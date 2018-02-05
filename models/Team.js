const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeamSchema = new Schema({
    teamName: String,
    teamLeaderEmail: { type: String, trim: true, unique: true  },
    teamMembers: []
});


TeamSchema.statics.addUserToTeam = function(oData){
    this.findeOne( {_id: oData.teamId} , (err,teamFound) => {
        teamFound.teamMembers.push(oData.user.email);
        teamFound.save( (err) => { if (err) console.log(err) });
    })
};


TeamSchema.statics.removeUserFromTeam = function (oData){
    this.findOne( {_id: oData.teamId } , (err,teamFound) => {
        teamFound.removeFromMembers(oData.user.email);
        teamFound.save( (err) => { if (err) console.log(err) });
    })
};



TeamSchema.methods.removeFromMemberFromTeam = function(userEmail){
    let emailIndex = this.teamMembers.indexOf(userEmail);
    if (emailIndex !== -1){
        this.teamMembers.splice(emailIndex, 1);
    }
};















// put on mongoose model new collection named users with type userSchema
mongoose.model('teams', TeamSchema);
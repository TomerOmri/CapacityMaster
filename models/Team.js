const mongoose = require('mongoose');
const { Schema } = mongoose;


const teamSchema = new Schema({
    teamName: String,
    teamLeaderEmail: { type: String, trim: true, unique: true  },
    teamMembers: []
});


teamSchema.statics.addUserToTeam = function (oData){
    this.findeOne( { _id: oData.teamId } , (err,teamFound) => {
        teamFound.teamMembers.push(oData.user.email);
        teamFound.save( (err) => { if (err) console.log(err) });
    })
};


teamSchema.statics.removeUserFromTeam = function (oData){
    this.findOne({ _id: oData.teamId } , (err,teamFound) => {
        teamFound.removeFromMembers(oData.user.email);
        teamFound.save( (err) => { if (err) console.log(err) });
    })
};



teamSchema.methods.removeFromMemberFromTeam = function (userEmail){
    let emailIndex = this.teamMembers.indexOf(userEmail);
    if (emailIndex !== -1){
        this.teamMembers.splice(emailIndex, 1);
    }
};






// put on mongoose model new collection named users with type userSchema
module.exports = mongoose.model('teams' , teamSchema);

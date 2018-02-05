const mongoose = require('mongoose');
var TeamModel = require('../models/Team'),
      UserModel = require('../models/User');

var Team = mongoose.model('Team', TeamModel);
var User = mongoose.model('User', UserModel);
mongoose.Promise = global.Promise;


exports.createNewTeam = function (req, res, next){

    console.log(" ==== arrived here ====  \n");


    console.log(req.body);

    console.log(" ==== arrived here ====  \n");


    var newTeam = new Team(req.body);
    console.log(newTeam);
    newTeam.save( (err, savedTeam) => {
        if (err){
            console.log(" ==== error here ====  \n");

            console.log(err);
            return next(err);
        } else {
            User.findeOneAndUpdate( {email: newTeam.teamLeaderEmail} , {
                isTeamLeader: true,
                teamLeaderTeamId: newTeam._id,
                userRole: 'teamLeader'
            });
            User.save();
        }
    })

}
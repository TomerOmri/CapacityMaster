const Team = require('mongoose').model('Team'),
      User = require('mongoose').model('User');



exports.createNewTeam = function (req, res, next){
    var newTeam = new Team(req.body);
    newTeam.save( (err, savedTeam) => {
        if (err){
            console.log(err);
            return next(err);
        } else {
            User.findeOneAndUpdate( {email: newTeam.teamLeaderEmail} , {
                isTeamLeader: true,
                teamLeaderTeamId: newTeam._id,
                userRole: ROLES.TeamLeader
            });
            User.save();
        }
    })
}
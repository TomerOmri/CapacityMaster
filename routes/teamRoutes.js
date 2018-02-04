const teams = require('../controllers/teamController'),
      users = require('../controllers/userController');


module.exports = function(app){
    app.route('/createTeam').post(teams.createNewTeam);
    app.route('/teams/:teamId/changeTeamLeader').post(users.isSuperAdmin, teams.changeTeamLeader);
    app.route('/teams/:teadId/addTeamMate').post(users.isTeamLeaderOrSuperAdmin, teams.addTeamMate);
    app.route('/teams/:teamId').get(teams.getTeamMembers);
};
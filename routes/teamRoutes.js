const expressRouter = require ('express').Router();
const mongoose = require('mongoose');
require('../models/Team');
const Team = mongoose.model('teams');

async function getHello(req, res) {
    res.send({
        'hi': 'there2'
    })
}

async function createNewTeam(req, res){
    const newTeam = new Team({
        teamName: req.body.teamName,
        teamLeaderEmail: req.body.teamLeaderEmail
    });

    try {
        const team = await newTeam.save();
    } catch (e) {
        res.send("Couldn't Create team: " + e);
    }

    console.log('New Team created successfully');
    return res.send({ Team: newTeam, status: 'ok' });
}

async function addUserToTeam(req, res){
    const { userEmail, teamLeaderEmail } = req.body;
    console.log( req.body );
    try {
        const team = await Team.findOneAndUpdate({ teamLeaderEmail } ,
                { $addToSet: { 'teamMembers': userEmail } },
                { new: true, passRawResult: true });
        if (team) {
            console.log(team);
            console.log('New user added to team successfully');
            return res.send({ Team: team, status: 'ok' });
        }

    } catch(err) {
        console.log("Couldnt find team");
        console.error(err);
        return res.status(500).send( { msg:err } );
    }


}

async function removeUserFromTeam(req, res){
    const { userEmail, teamLeaderEmail } = req.body;
    Team.findOneAndUpdate({ teamLeaderEmail }, (err, teamFound) => {
        if (err){
            res.send("Couldn't find team: " + err);
        } else {
            const userIndex = teamFound.teamMembers.indexOf(userEmail);
            if (userIndex !== -1){
                teamFound.teamMembers.splice(userIndex, 1);
                res.send(userEmail + " Was deleted from team " + teamFound.teamName);
            } else {
                res.send(`Can't find ${userEmail} in ${teamFound.teamName}`);
            }
        }
    });
}

async function deleteTeam(req,res){
    const { teamLeaderEmail } = req.body;
    Team.findOneAndRemove({ teamLeaderEmail }, (err) => {
        if (err){
            res.send(`Couldn't find and delete ${teamLeaderEmail} team`);
        } else {
            res.send(`${teamLeaderEmail} deleted successfully`);
        }
    })
}

async function getTeamMembers(req, res){
    consloe.log(req.query);
    let arr = [];
    arr.push('1');
    arr.push('2');
    arr.push('3');
    return res.send(arr);
}

expressRouter.get('/hi', getHello);
expressRouter.get('/getTeamMembers/:email', getTeamMembers);
expressRouter.post('/createTeam/',createNewTeam);
expressRouter.post('/addUser/',addUserToTeam);
expressRouter.delete('/removeUser/',removeUserFromTeam);
expressRouter.delete('/deleteTeam/',deleteTeam);

module.exports = expressRouter;

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
    console.log(req.body);
    const newTeam = new Team({
        teamName: req.body.teamName,
        teamLeaderEmail: req.body.teamLeaderEmail
    });

    try {
        const team = await newTeam.save();
    } catch (e) {

    }

    console.log('New Team created successfully');
    return res.send({ Team: newTeam, status: 'ok' });
}

async function addUserToTeam(req, res){
    res.send("add user to team")
}

async function removeUserFromTeam(req, res){
    res.send("remove user to team")
}



expressRouter.get('/hi', getHello);
expressRouter.post('/createTeam/',createNewTeam);
expressRouter.post('/addUser/',addUserToTeam);
expressRouter.delete('/removeUser/',removeUserFromTeam);


module.exports = expressRouter;

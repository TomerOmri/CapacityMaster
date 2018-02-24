const expressRouter = require ('express').Router(),
    mongoose = require ('mongoose');

async function getHello(req, res) {
    res.send({
        'hi': 'there2'
    })
}

async function createNewTeam(req, res){
    res.send("create new team")
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

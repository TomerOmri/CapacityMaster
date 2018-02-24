const passport = require('passport');
const   expressRouter = require ('express').Router();


// turn on google stratgy and ask for profile and email
async function getGooglAuth(req,res){
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
}

async function getGooglAuthCallback(req,res){
    passport.authenticate('google'),
        (req, res) => {
            res.redirect('/dashboard')
        }
}

async function getCurrentUser(req,res){
    res.send(req.user); //passport attaches automaticly user to req, and many more functions..one of the req.logout()
}

async function getUserLogout(req,res){
    req.logout();       // kills the cookie
    // res.send(req.user);
    res.redirect('/dashboard')
}

async function getTomer(req,res){
    res.send({
        'hi': 'there2'
    })
}


// GET
expressRouter.get('/auth/google', getGooglAuth);
expressRouter.get('/auth/google/callback', getGooglAuthCallback);
expressRouter.get('/current_user', getCurrentUser);
expressRouter.get('/logout', getUserLogout);
expressRouter.get('/tomer', getTomer);


module.exports = expressRouter;

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// Invokes the modules when the app starts
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

// telling app we are using cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,            // 30days 24hours 60min 60sec 1000mils
        keys: [keys.cookieKey]                      // encrypt cookie
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

app.get(
    '/auth/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
        res.send({
            'hdi': "ho"
        })
    }
);

require('./routes/authRoutes')(app);


if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    const path = require('path');
    app.get( '*' , (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
var port = (process.env.PORT || 5000);
app.listen(port);
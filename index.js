const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const routes = require('./routes');

// Invokes the modules when the app starts
require('./models/User');
require('./services/passport');

mongoose.Promise = Promise;

mongoose.connect(keys.mongoURI);

const bodyParser = require('body-parser');
const app = express();

// telling app we are using cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,            // 30days 24hours 60min 60sec 1000mils
        keys: [keys.cookieKey]                      // encrypt cookie
    })
);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());


app.use('/', routes);

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    const path = require('path');
    app.get( '*' , (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
var port = (process.env.PORT || 5000);
app.listen(port);

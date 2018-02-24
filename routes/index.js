const Router = require('express').Router();
const authRoute = require('./authRoutes');
const team = require('./teamRoutes');

Router.use('/team', team);
Router.use('/api', authRoute);

module.exports = Router;

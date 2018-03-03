const Router = require('express').Router();
const authRoute = require('./authRoutes');
const team = require('./teamRoutes');

Router.use('/api/team', team);
Router.use('/api', authRoute);

module.exports = Router;

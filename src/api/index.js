const express = require('express');
const getPostsRoute = require('./routes/getposts');
const pingRoute = require('./routes/ping');

const apiRouter = express.Router();

apiRouter.use('/posts', getPostsRoute);
apiRouter.use('/ping', pingRoute);

module.exports = apiRouter;
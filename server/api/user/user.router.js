//Core
const { Router } = require('express');
//Controller
const userController = require('./user.controller');
//Helpers
const validate = require('../../helpers/validate');
const tryCatchHandler = require('../../helpers/tryCatchHandler');
const validationSchemas = require('../../helpers/validationSchemas');

const { getAllUsers, getStatsByUserId } = userController;
const { paramSchema, querySchema } = validationSchemas;

const userRouter = Router();

// @ GET /api/user/
userRouter.get('/', validate(querySchema, 'query'), tryCatchHandler(getAllUsers));

// @ GET /api/user/:id
userRouter.get(
	'/:id',
	validate(paramSchema, 'params'),
	validate(querySchema, 'query'),
	tryCatchHandler(getStatsByUserId),
);

module.exports = userRouter;

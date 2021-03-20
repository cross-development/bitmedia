//Core Node
const path = require('path');
const fsPromises = require('fs/promises');
//Core Express
const express = require('express');
//Middleware
require('dotenv').config();
const cors = require('cors');
//Router
const userRouter = require('../api/user/user.router');
//Data Access Object
const dao = require('./dao');
const UserQuery = require('../api/user/user.query');
const userDataPath = path.join(__dirname, process.env.USER_DATA_SOURCE);
const userStatDataPath = path.join(__dirname, process.env.USER_STAT_DATA_SOURCE);

class Server {
	constructor() {
		this.server = null;
	}

	async start() {
		this.initServer();
		this.initMiddleware();
		this.initRouter();
		await this.initDatabase();
		this.startListening();
	}

	initServer() {
		this.server = express();
	}

	initMiddleware() {
		this.server.use(express.json());
		this.server.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
	}

	initRouter() {
		this.server.use('/api/user', userRouter);
	}

	async initDatabase() {
		const userQuery = new UserQuery(dao);

		try {
			await userQuery.createUserTable();
			await userQuery.createStatTable();

			const userData = await fsPromises.readFile(userDataPath, 'utf-8');
			Promise.all(JSON.parse(userData).map(user => userQuery.setUsersData(user)));

			const userStatData = await fsPromises.readFile(userStatDataPath, 'utf-8');
			Promise.all(JSON.parse(userStatData).map(userStat => userQuery.setUsersStatData(userStat)));
		} catch (error) {
			console.error(error);
			process.exit(0);
		}
	}

	startListening() {
		const port = process.env.PORT || 8080;

		this.server.listen(port, () => {
			console.log('Server started listening on port', port);
		});
	}
}

module.exports = Server;

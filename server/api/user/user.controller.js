//Data Access Object
const dao = require('../../app/dao');
//Queries
const UserQuery = require('./user.query');

class UserController {
	constructor(userQuery) {
		this.userQuery = userQuery;
	}

	async getAllUsers(req, res) {
		const { page, count } = req.query;

		const totalCount = await userQuery.countUsers();

		const totalResults = totalCount[0].totalCount;
		const totalPages = totalResults / count;
		const offset = (page - 1) * count;

		const results = await userQuery.getAllUsers(count, offset);

		res.status(200).json({ results, limitResults: count, totalResults, page, totalPages });
	}

	async getStatsByUserId(req, res) {
		const id = req.params.id;
		const { from, to } = req.query;

		const results = await userQuery.getStatByUserId(id, from, to);

		res.status(200).json({ results });
	}
}

const userQuery = new UserQuery(dao);

module.exports = new UserController(userQuery);

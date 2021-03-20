class UserQuery {
	constructor(dao) {
		this.dao = dao;
	}

	createUserTable() {
		const sql = `
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                first_name TEXT,
                last_name TEXT,
                email TEXT UNIQUE,
                gender TEXT,
                ip_address TEXT
            )
        `;

		return this.dao.run(sql);
	}

	createStatTable() {
		const sql = `
            CREATE TABLE IF NOT EXISTS users_statistic (
                user_id INTEGER,
                date TEXT,
                page_views INTEGER,
                clicks INTEGER,
                FOREIGN KEY (user_id) REFERENCES users(id) 
                    ON UPDATE CASCADE ON DELETE CASCADE
            )
        `;

		return this.dao.run(sql);
	}

	setUsersData(user) {
		const { id, first_name, last_name, email, gender, ip_address } = user;

		const sql = `
            INSERT or REPLACE INTO users 
                (id, first_name, last_name, email, gender, ip_address) 
                VALUES (?, ?, ?, ?, ?, ?)
        `;

		return this.dao.run(sql, [id, first_name, last_name, email, gender, ip_address]);
	}

	setUsersStatData(user_statistic) {
		const { user_id, date, page_views, clicks } = user_statistic;

		const sql = `
            INSERT or REPLACE INTO users_statistic 
                (user_id, date, page_views, clicks)
                VALUES (?, ?, ?, ?)
        `;

		return this.dao.run(sql, [user_id, date, page_views, clicks]);
	}

	getAllUsers(limit, offset) {
		const sql = `
            SELECT * FROM users LIMIT ${limit} OFFSET ${offset}
        `;

		return this.dao.all(sql);
	}

	countUsers() {
		const sql = `
            SELECT COUNT(id) as totalCount FROM users
        `;

		return this.dao.all(sql);
	}

	getStatByUserId(user_id, from, to) {
		const sql = `
            SELECT * FROM users_statistic 
            WHERE user_id = ? 
                ${from && to ? `AND date BETWEEN date('${from}') AND date('${to}')` : `OR date("")`}
            ORDER BY date ASC
        `;

		return this.dao.all(sql, [user_id]);
	}
}

module.exports = UserQuery;

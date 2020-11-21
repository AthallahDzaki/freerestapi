const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

const Member = () => new Promise((resolve, reject) => {
    pool.query('SELECT member FROM info', (error, results) => {
		if (error) {
			reject(error);
		}
		resolve(results.rows[0]);
	})
})

module.exports = Member
const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

var datas;

async function M()
{
    try {
		await pool.query('SELECT member FROM info', (error, results) => {
			if (error) {
				console.log(error);
			}
			//console.log(results.rows[0].member);
			return datas = results.rows[0].member
		})
	} catch (err) {
      throw err;
    }
}

const Member = () => new Promise((resolve, reject) => {
    M().then(
		resolve({
			datas
		})
	).catch(err => { reject(err) })
})

module.exports = Member
const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function M()
{
    try {
		pool.query('SELECT member FROM info', (error, results) => {
			if (error) {
				console.log(error);
			}
			console.log(results.rows[0].member)
		})
	} catch (err) {
      throw err;
    }
}

const Member = () => new Promise((resolve, reject) => {
    M().then(data => {
		resolve({
			data
		})
	}).catch(err => { reject(err) })
})

module.exports = Member
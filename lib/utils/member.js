const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function M()
{
    try {
      const client = await pool.connect();
      const result1 = await client.query('SELECT member FROM info');
      const results = { 'results': (result1) ? result.rows : null};
      return results;
      client.release();
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
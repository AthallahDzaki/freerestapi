const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


const GetCurrentVisitor = () => new Promise((resolve, reject) => {
    try {
      const client = await pool.connect();
      const result1 = await client.query('SELECT member FROM info');
      const results = { 'results': (result1) ? result.rows : null};
      resolve(results)
      client.release();
    } catch (err) {
      reject(err);
    }
})

module.exports = GetCurrentVisitor
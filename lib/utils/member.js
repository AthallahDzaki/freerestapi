const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


module.exports = GetCurrentVisitor = async () => {
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
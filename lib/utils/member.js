const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


async function GetCurrentVisitor() {
    try {
      const client = pool.connect();
      const result1 = client.query('SELECT member FROM info');
      const results = { 'results': (result1) ? result.rows : null};
      return results;
      client.release();
    } catch (err) {
      throw err;
    }
}

module.exports = GetCurrentVisitor
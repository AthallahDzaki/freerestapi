const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

let initialize = (options) => {
  return AddVisitor;
}

let AddVisitor = (req, res, next) => {
    pool.query('UPDATE info SET member = member+1;', (error, results) => {
		if (error) {
			reject(error);
		}
		console.log("+1");
	})
	next();
}

module.exports = AddVisitor;
module.exports.AddVisitor = AddVisitor;
module.exports.initialize = initialize;
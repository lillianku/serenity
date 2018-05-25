const
  options = {query: (e)=>{console.log(e.query)}},
  pgp = require('pg-promise')(options),
  db = pgp(process.env.DATABASE_URL || 'postgres://localhost:5432/serenity');



module.exports = db;

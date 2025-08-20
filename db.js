const { Pool } = require("pg");

const pool = new Pool({
  user: "username",    
  host: "hostname",        
  database: "database_name", 
  password: "password", 
  port: 5432,               
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Connection error", err.stack));



module.exports = pool;

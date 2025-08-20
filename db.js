const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",    // e.g. postgres
  host: "localhost",        // or your db host
  database: "mydb", // your db name
  password: "Samiran@1963", // your postgres password
  port: 5432,               // default postgres port
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Connection error", err.stack));



module.exports = pool;

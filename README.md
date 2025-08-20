# API Postgres

A simple Node.js REST API using Express and PostgreSQL.

## Project Structure

```
.
├── db.js
├── index.js
├── package.json
└── routes/
    └── users.js
```

## Requirements

- Node.js
- PostgreSQL

## Setup

1. **Clone the repository**

   ```sh
   git clone https://github.com/Adyatoni/psql_api.git
   cd psql_api
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Configure PostgreSQL**

   - Ensure PostgreSQL is running.
   - Update the credentials in [`db.js`](db.js) if needed.
   - Example: database name- `mydb` and a table name- `users`:

     ```sql
     CREATE DATABASE mydb;
     \c mydb
     CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100),
       email VARCHAR(100)
     );
     ```

4. **Start the server**

   ```sh
   node index.js
   ```

   The server will run at [http://localhost:5000](http://localhost:5000).

## API Endpoints

- `GET /`  
  Returns a welcome message.

- `GET /users`  
  Returns all users from the database.


# API Postgres

A simple Node.js REST API using Express, Sequelize ORM, and PostgreSQL.

## Project Structure

```
psql_api/
├── .env
├── .gitignore
├── index.js
├── package.json
├── pnpm-lock.yaml
├── README.md
├── config/
│   └── db.js
├── models/
│   └── usermodel.js
└── routes/
    └── getusers.js
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
   # or
   pnpm install
   ```

3. **Configure PostgreSQL**

   - Ensure PostgreSQL is running.
   - Update the credentials in the [.env](.env) file if needed.
   - Example: database name `mydb` and a table name `users`:

     ```sql
     CREATE DATABASE mydb;
     \c mydb
     CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100) NOT NULL,
       email VARCHAR(100) NOT NULL UNIQUE
     );
     ```

4. **Start the server**

   ```sh
   npm start
   # or
   node index.js
   ```

   The server will run at [http://localhost:5000](http://localhost:5000).

## API Endpoints

- `GET /`  
  Returns a welcome message.

- `GET /users`  
  Returns all users from the database.

## Environment Variables

Set the following in your `.env` file:

```
DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=5432
```

##
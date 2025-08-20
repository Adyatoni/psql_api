const express = require("express");
const usersRouter = require("./routes/users");

const app = express();
const PORT = 5000;

app.use(express.json());

// Routes
app.use("/users", usersRouter);

// Root
app.get("/", (req, res) => {
  res.send("Postgres + Node.js API is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

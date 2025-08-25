import express from "express";
import sequelize from "./config/db";
import User from "./models/usermodel";
import authRoutes from "./routes/auth";

const app = express();
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("API running!");
});

// Auth routes
app.use("/auth", authRoutes);

// DB Sync + Start server
sequelize
  .sync()
  .then(() => {
    console.log("Database connected & synced");
    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch((err) => console.error("DB connection error:", err));

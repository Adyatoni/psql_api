import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./config/db";
import userRoutes from "./routes/getusers.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", userRoutes);
app.get("/", (_req, res) => {
  res.send("API + Postgres is running!");
});


sequelize.authenticate()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error("Database connection error:", err);
  });

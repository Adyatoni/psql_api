import { Router, Request, Response } from "express";
import User from "../models/usermodel.js";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).json({ error: "Database error" });
  }
});

export default router;

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

// update email feature
router.put("/email/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({msg: "email required" });
    }

    const u = await User.findByPk(id);
    if (!u) {
      return res.status(404).json({ msg: "user not found"});
    }

    u.email = email;
    await u.save();

    res.json({ msg: "email updated", email: u.email });
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).json({ msg: "server error"});
  }
});


export default router;

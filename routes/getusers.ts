import { Router, Request, Response } from "express";
import User from "../models/usermodel.js";
import { verifyToken, auth_req } from "../middleware/authmw";
import redis from "../config/redis";


const router = Router();

router.get("/", verifyToken, async (_req: auth_req, res: Response) => {
  try {
      const cacheData = await redis.get("users");
      if (cacheData) {
      console.log("data from cache");
      return res.json(JSON.parse(cacheData));
      }

    console.log("data from db");
    const users = await User.findAll();
    await redis.set("users", JSON.stringify(users), "EX", 60);
    res.json(users);
   } catch (err : any) {
     res.status(500).json({ error: err.message });
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
    await redis.del("users");
    console.log("cache data deleted");

    res.json({ msg: "email updated", email: u.email });
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).json({ msg: "server error"});
  }
});


export default router;

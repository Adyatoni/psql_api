import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export interface auth_req extends Request {
  user?: any; 
}

export const verifyToken = (req: auth_req, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  const token = header?.split(" ")[1]; 

  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      return res.status(403).json({ msg: "Token not valid" });
    }

    req.user = decoded;
    next();
  });
};

import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET as string);
    (req as any).user = verified;
  } catch (err) {
    res.status(400).send("invalid Token");
  }
}

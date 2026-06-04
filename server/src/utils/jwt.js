import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export const createToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    env.jwtSecret,
    { expiresIn: "1h" },
  );
};

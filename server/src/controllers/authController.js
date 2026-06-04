import { z } from "zod";
import { loginUser, registerUser } from "../services/authService.js";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const register = async (req, res, next) => {
  try {
    const data = registerSchema.parse(req.body);
    const result = await registerUser(data);

    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const data = loginSchema.parse(req.body);
    const result = await loginUser(data);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

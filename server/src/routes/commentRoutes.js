import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/blogs/:id", authMiddleware, (req, res) => {
  return res.status(201).json({ message: "Comment added", id: req.params.id });
});

export default router;

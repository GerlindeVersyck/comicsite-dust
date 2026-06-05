import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  return res
    .status(200)
    .json({ message: "Favorites of logged-in user", user: req.user });
});

router.post("/", authMiddleware, (req, res) => {
  return res.status(201).json({ message: "Favorite added" });
});

router.delete("/:id", authMiddleware, (req, res) => {
  return res.status(200).json({
    message: "Favorite removed",
    id: req.params.id,
  });
});

export default router;

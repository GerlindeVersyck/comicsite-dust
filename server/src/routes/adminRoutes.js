import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get("/me", authMiddleware, (req, res) => {
  return res.status(200).json({
    message: "Admin route works",
    user: req.user,
  });
});

router.get("/users", authMiddleware, roleMiddleware("admin"), (req, res) => {
  return res.status(200).json({
    message: "User list for admin",
  });
});

router.get("/config", authMiddleware, roleMiddleware("admin"), (req, res) => {
  return res.status(200).json({
    message: "Admin config page",
  });
});

export default router;

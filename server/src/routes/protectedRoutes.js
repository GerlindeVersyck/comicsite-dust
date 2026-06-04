import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get("/me", authMiddleware, (req, res) => {
  return res.status(200).json({
    message: "Protected route works",
    user: req.user,
  });
});

router.get("/admin", authMiddleware, roleMiddleware("admin"), (req, res) => {
  return res.status(200).json({
    message: "Welcome admin",
  });
});
export default router;

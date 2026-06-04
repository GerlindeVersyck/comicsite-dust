import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API works" });
});

app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use(errorMiddleware);

export default app;

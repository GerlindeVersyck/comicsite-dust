import express from "express";

const router = express.Router();

router.get("/about", (req, res) => {
  return res.status(200).json({ message: "About page" });
});

router.get("/contact", (req, res) => {
  return res.status(200).json({ message: "Contact page" });
});

router.get("/calendar", (req, res) => {
  return res.status(200).json({ message: "Calendar page" });
});

router.get("/comics", (req, res) => {
  return res.status(200).json({ message: "Public comics list" });
});

router.get("/comics/:id", (req, res) => {
  return res
    .status(200)
    .json({ message: "Public comic detail", id: req.params.id });
});

router.get("/blogs", (req, res) => {
  return res.status(200).json({ message: "Public blogs list" });
});

router.get("/blogs/:id", (req, res) => {
  return res
    .status(200)
    .json({ message: "Public blog detail", id: req.params.id });
});

export default router;

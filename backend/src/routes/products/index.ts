import { Router } from "express";

// products endpoint
const router = Router();

router.get("/", (req, res) => {
  res.send("The list of products");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("a product");
});

router.post("/", (req, res) => {
  res.send("New product created.");
});

export default router;
import { Router } from "express";
import {
  listProducts,
  createProduct,
  deleteProduct,
  getProudctById,
  updateProduct,
} from "./productsController";

// products endpoint
const router = Router();

router.get("/", listProducts);
router.get("/:id", getProudctById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;

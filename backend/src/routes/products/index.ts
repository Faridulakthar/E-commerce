import { Router } from "express";
import {
  listProducts,
  createProduct,
  deleteProduct,
  getProudctById,
  updateProduct,
} from "./productsController";
import { validateData } from "../../middlewares/validationMiddleware";
import {
  createProductSchema,
  updateProductSchema,
} from "../../db/productsSchema";
import { verifySeller, verifyToken } from "../../middlewares/authMiddleware";

// const createProductSchema = z.object({
//   name: z.string(),
//   price: z.number()
// });

// products endpoint
const router = Router();

router.get("/", listProducts);
router.get("/:id", getProudctById);
router.post(
  "/",
  verifyToken,
  verifySeller,
  validateData(createProductSchema),
  createProduct
);
router.put(
  "/:id",
  verifyToken,
  verifySeller,
  validateData(updateProductSchema),
  updateProduct
);
router.delete("/:id", verifyToken, verifySeller, deleteProduct);

export default router;

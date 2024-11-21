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

// const createProductSchema = z.object({
//   name: z.string(),
//   price: z.number()
// });

// products endpoint
const router = Router();

router.get("/", listProducts);
router.get("/:id", getProudctById);
router.post("/", validateData(createProductSchema), createProduct);
router.put("/:id", validateData(updateProductSchema), updateProduct);
router.delete("/:id", deleteProduct);

export default router;

import express from "express";
import productsRoutes from "./routes/products/index";

const app = express();
const port = 3000;

app.use("/products", productsRoutes);

app.listen(port, () => {
  console.log(`App listening on port 3000`);
});
 
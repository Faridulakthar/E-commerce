import express, { json, urlencoded } from "express";
import productsRoutes from "./routes/products/index";
import authRoutes from "./routes/auth/index";

console.log("testing");

const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());
const port = 3000;

app.use("/products", productsRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`App listening on port 3000`);
});

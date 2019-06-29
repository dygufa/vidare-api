import * as express from "express";
import { ProductController } from "./controllers";
import "./mongoose";

const PORT = 8000;

const app = express();

app.get("/products", ProductController.getProducts);

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
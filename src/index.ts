import * as express from "express";
import { ProductController, VoucherController, BloodDonationController, UserController } from "./controllers";
import * as bodyParser from "body-parser";
import { authJWT } from "./utils";
import "./mongoose";

const PORT = 8000;

const app = express();

app.use(bodyParser.json())

app.post("/login", UserController.login);
app.get("/products", authJWT, ProductController.getProducts);
app.get("/vouchers", authJWT, VoucherController.getVouchers);
app.post("/vouchers", authJWT, VoucherController.postVoucher);
app.get("/bloodDonations", authJWT, BloodDonationController.getBloodDonations);
app.post("/bloodDonations", authJWT, BloodDonationController.postBloodDonations);

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
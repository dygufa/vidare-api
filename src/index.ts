import * as express from "express";
import { ProductController, VoucherController, BloodDonationController, UserController } from "./controllers";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { authJWT } from "./utils";
import "./mongoose";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/login", UserController.login);
app.get("/products", ProductController.getProducts);
app.get("/products/:id", ProductController.getProduct);
app.get("/me", authJWT, UserController.me);
app.get("/vouchers", authJWT, VoucherController.getVouchers);
app.post("/vouchers", authJWT, VoucherController.postVoucher);
app.get("/bloodDonations", authJWT, BloodDonationController.getBloodDonations);
app.post("/bloodDonations", authJWT, BloodDonationController.postBloodDonations);
app.post("/redeem", VoucherController.redeem);

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
require('dotenv').config();
import * as mongoose from "mongoose";

if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL must be defined");
}

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, {
    useMongoClient: true
});
const db = mongoose.connection;

db.on("error", function (err) {
    console.error("MongoDB connection error:", err);
});

db.once("open", function callback() {
    console.info("MongoDB connection is established");
});

db.on("disconnected", function () {
    console.error("MongoDB disconnected!");
    mongoose.connect(MONGO_URL, { server: { auto_reconnect: true } });
});

db.on("reconnected", function () {
    console.info("MongoDB reconnected!");
});
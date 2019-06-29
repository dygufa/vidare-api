import express from "express";

const PORT = 8000;

const app = express();

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
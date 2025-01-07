import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
    cors({
        origin: "http://127.0.0.1:5173",
    })
);

app.listen(3000, () => console.log('Backend running on port 3000'));
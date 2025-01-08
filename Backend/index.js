import express from "express";
import cors from "cors";
import paymentRoutes from "./Routes/payment.routes.js";

const app = express();

app.use(cors({ origin: "http://127.0.0.1:5173" })); // Allow frontend origin
app.use(express.json()); // Parse JSON request bodies

// Use payment routes
app.use("/api/payment", paymentRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

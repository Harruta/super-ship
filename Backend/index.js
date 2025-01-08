import express from "express";
import cors from "cors";
import paymentRoutes from "./Routes/payment.routes.js";
import { sendWelcomeEmail } from "./Routes/SendWelcomeEmail.js";

const app = express();

app.use(cors({ origin: "http://127.0.0.1:5173" })); // Allow frontend origin
app.use(express.json()); // Parse JSON request bodies

// Use payment routes
app.use("/api/payment", paymentRoutes);
//email route
app.post("/api/sendWelcomeEmail", async (req, res) => {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
  
    try {
      const result = await sendWelcomeEmail(email);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error sending welcome email:", error);
      res.status(400).json({ error: error.message });
    }
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

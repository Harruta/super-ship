import Razorpay from "razorpay";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config({ path: ".env" });

const router = express.Router(); // Use a router for modular routes

// Initialize Razorpay instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Middleware for CORS and JSON parsing (if not done in main app.js)
router.use(cors({ origin: "http://127.0.0.1:5173" })); // Allow requests from frontend
router.use(express.json()); // Parse JSON bodies

// API to create an order
router.post("/order", async (req, res) => {
    try {
        const { amount } = req.body; // Amount in dollars

        if (!amount) {
            return res.status(400).json({ success: false, message: "Amount is required" });
        }

        const options = {
            amount: Math.round(amount * 100), // Convert amount to the smallest currency unit (cents)
            currency: "USD", // Set the currency
        };

        const order = await razorpay.orders.create(options);

        res.status(200).json({
            success: true,
            orderId: order.id,
            amount: options.amount,
            currency: options.currency,
        });
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

export default router;

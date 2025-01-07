import Razorpay from "razorpay";
import dotenv from ".env.local";

dotenv.config();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID, 
    key_secret: process.env.RAZORPAY_KEY_SECRET, 
});

// API to create an order
app.post("/api/payment/order", async (req, res) => {
    try {
        const { amount } = req.body; // Amount in dollars

        const options = {
            amount: Math.round(amount * 100), // Convert dollars to cents
            currency: "USD", // Set the currency to USD
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

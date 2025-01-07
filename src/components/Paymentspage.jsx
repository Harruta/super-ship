import React, { useState } from "react";

// Payment page component
const PaymentPage = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    // Call your backend to create the order (make sure this is a POST request to your backend)
    const response = await fetch("/api/payment/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 50 }), // Amount in USD, for example $50
    });

    const { orderId, amount, currency } = await response.json();

    if (orderId) {
      // Initialize Razorpay with the order information
      const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
        amount: amount, // Amount in cents (50 USD = 5000 cents)
        currency: currency, // Currency (USD in this case)
        name: "Your Company Name",
        description: "Payment for Order",
        order_id: orderId, // Order ID returned from backend
        handler: function (response) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          // Optionally, you can send this payment ID to the backend for verification
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "1234567890",
        },
        theme: {
          color: "#4CAF50", // Green color for the Razorpay button
        },
      };

      const razorpay = new Razorpay(options);
      razorpay.open(); // Open Razorpay UI for payment

      // Reset loading state
      setLoading(false);
    } else {
      setLoading(false);
      alert("Failed to create order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Payment Page</h1>
        <p className="text-center text-lg mb-6">
          Pay for your order of <span className="font-semibold">$50 USD</span>.
        </p>
        <button
          onClick={handlePayment}
          className={`w-full py-3 text-white rounded-lg ${loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"} transition-all`}
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;

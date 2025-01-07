import React, { useState } from "react";

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/payment/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 50 }), // Amount in USD
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      const { orderId, amount, currency } = await response.json();

      const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
        amount: amount,
        currency: currency,
        name: "Your Company Name",
        description: "Payment for Order",
        order_id: orderId,
        handler: function (response) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "1234567890",
        },
        theme: {
          color: "#ffffff", // Button color in Razorpay UI
        },
      };

      const razorpay = new Razorpay(options);
      razorpay.open();
      setLoading(false);
    } catch (error) {
      console.error("Payment failed:", error);
      setLoading(false);
      alert("Payment initiation failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full sm:w-96">
        <h1 className="text-2xl font-bold text-center mb-4 text-white">Payment Page</h1>
        <p className="text-center text-lg mb-6 text-gray-300">
          Pay for your order of <span className="font-semibold text-white">$50 USD</span>.
        </p>
        <button
          onClick={handlePayment}
          className={`w-full py-3 rounded-lg text-black ${loading ? "bg-gray-400" : "bg-white hover:bg-gray-200"} transition-all`}
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;

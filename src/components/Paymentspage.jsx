import React, { useState } from "react";

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);

  // Function to dynamically load the Razorpay script
  const loadRazorpayScript = () =>
    new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => reject(false);
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    setLoading(true);

    // Load Razorpay script dynamically
    const scriptLoaded = await loadRazorpayScript().catch(() => false);

    if (!scriptLoaded) {
      alert("Failed to load Razorpay script. Please try again.");
      setLoading(false);
      return;
    }

    try {
      // Call your backend to create the Razorpay order
      const response = await fetch("http://localhost:3000/api/payment/order", {
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

      // Razorpay payment options
      const options = {
        key:"rzp_test_6JimtPYphPfTHC", 
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
          color: "#ffffff", // White color for the theme
        },
      };

      // Check if Razorpay is available
      if (window.Razorpay) {
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        alert("Razorpay is not available. Please refresh the page and try again.");
      }

      setLoading(false);
    } catch (error) {
      console.error("Payment failed:", error);
      setLoading(false);
      alert("Payment initiation failed. Please try again.");
    }
  };
  const sendWelcomeEmail = async (email) => {
    try {
      const response = await fetch("http://localhost:3000/api/sendWelcomeEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Send the user's email to backend
      });
  
      if (response.ok) {
        console.log("Welcome email sent successfully");
      } else {
        console.error("Failed to send welcome email");
      }
    } catch (error) {
      console.error("Error sending welcome email:", error);
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
          className={`w-full py-3 rounded-lg text-black ${
            loading ? "bg-gray-400" : "bg-white hover:bg-gray-200"
          } transition-all`}
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;

import React, { useState } from "react";

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Create order on your backend
      const response = await fetch("http://localhost:3000/api/payment/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 50 }), // Amount in INR
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      const { orderId, amount, currency, keyId } = await response.json();

      // Razorpay payment options
      const options = {
        key: keyId, // Get from backend response
        amount: amount,
        currency: currency,
        name: "Your Company Name",
        description: "Payment for Order",
        order_id: orderId,
        handler: async function (response) {
          try {
            // Verify payment on backend
            const verifyResponse = await fetch("http://localhost:3000/api/payment/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              }),
            });

            const verifyResult = await verifyResponse.json();

            if (verifyResult.success) {
              // Handle successful payment
              const userEmail = response.email;
              await sendWelcomeEmail(userEmail);
              alert("Payment Successful!");
            } else {
              alert("Payment verification failed.");
            }
            //as of right now even after the payment it shows that "Payment verification failed"
            //because in the logic above i have set to show "Payment Successful!" only when the email
            //has been send but its failing to send the email because razorpay api has protections that 
            //is stopping me form stealing the users email from the api pop up
          } catch (error) {
            console.error("Error in payment verification:", error);
            alert("Payment verification failed.");
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "1234567890",
        },
        theme: {
          color: "#ffffff",
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment initiation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full sm:w-96">
        <h1 className="text-2xl font-bold text-center mb-4 text-white">Payment Page</h1>
        <p className="text-center text-lg mb-6 text-gray-300">
          Pay for your order of <span className="font-semibold text-white">₹50</span>
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
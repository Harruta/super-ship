import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const RESEND_API_URL = "https://api.resend.com/v1/emails";
const RESEND_API_KEY = process.env.RESEND_API_KEY; // Get it from your .env file

export const sendWelcomeEmail = async (email) => {
  if (!email) {
    throw new Error("Email is required");
  }

  try {
    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "welcome@yourcompany.com", // Your sender email
        to: email,
        subject: "Welcome to Our Service!",
        html: "<p>Welcome! We're excited to have you with us.</p>", // Customize your welcome email
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error sending email");
    }

    return { message: "Welcome email sent" };
  } catch (error) {
    throw new Error("Error sending welcome email: " + error.message);
  }
};

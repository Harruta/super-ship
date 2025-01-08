import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWelcomeEmail = async (email) => {
  console.log("Sending email to:", email);

  if (!email) {
    throw new Error("Email is required");
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Welcome to Our Service!',
      html: '<p>Welcome! We\'re excited to have you with us.</p>'
    });

    if (error) {
      console.error("Email error:", error);
      throw new Error(error.message);
    }

    console.log("Email sent successfully:", data);
    return { message: "Welcome email sent", data };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending welcome email: " + error.message);
  }
};
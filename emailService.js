const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});



const sendVerificationEmail = async (email, code) => {
  console.log("💌 THE EMAIL IS:", email);
  console.log("📮 SENDING VERIFICATION CODE:", code);

  const mailOptions = {
    from: "pettranspo.service.tech@gmail.com",
    to: email,
    subject: "Your Verification Code - PetTranspo",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #333; text-align: center;">Verify Your Email</h2>
        <p style="color: #555; font-size: 16px;">Use the verification code below to complete your sign-up process:</p>
        
        <div style="text-align: center; margin: 20px 0;">
          <div style="display: inline-block; background-color: #007bff; color: #fff; padding: 12px 20px; font-size: 24px; border-radius: 5px; letter-spacing: 2px;">
            ${code}
          </div>
        </div>

        <p style="color: #555; font-size: 14px;">If you did not sign up for a PetTranspo account, you can safely ignore this email.</p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

        <p style="color: #777; font-size: 12px; text-align: center;">
          Need help? Contact our support team at <a href="mailto:pettranspo.service.tech@gmail.com">pettranspo.service.tech@gmail.com</a>.
        </p>
      </div>
    `,
  };

  
  module.exports = sendVerificationEmail;

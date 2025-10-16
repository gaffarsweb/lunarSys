// src/app/api/sendEmail/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const logoUrl = "https://raw.githubusercontent.com/gaffars712/my-imgs/refs/heads/main/logo%20(4).png"
        const { fullName, mobile, email, interest, remark, query } = await request.json();

        if (!email) {
            return new Response(JSON.stringify({ error: 'Recipient email is required' }), { status: 400 });
        }

        // Transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            port: 465,
            secure: true,
            auth: {
                user: 'info@infiniaero.com',
                pass: process.env.SMTP_PASS,
            },
        });

        // const logoUrl = "https://infiniaero.com/logo.png"; // replace with your actual logo

        // Template for User
        const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin:auto; border:1px solid #ddd; border-radius:8px; overflow:hidden;">
        <div style="background:#004aad; padding:15px; text-align:center; color:white;">
          <img src="${logoUrl}" alt="Infiniaero" style="max-height:50px;"><br>
          <h2>Submission Received</h2>
        </div>
        <div style="padding:20px;">
          <p>Hi ${fullName || 'Customer'},</p>
          <p>Thank you for reaching out to Infiniaero! We have received your details and our team will contact you shortly.</p>
          <h3>Your Submission Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${fullName || '-'}</li>
            <li><strong>Mobile:</strong> ${mobile || '-'}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Interest:</strong> ${interest || '-'}</li>
            <li><strong>Remark:</strong> ${remark || '-'}</li>
            <li><strong>Query:</strong> ${query || '-'}</li>
          </ul>
          <p>Best regards,<br><strong>Infiniaero Team</strong></p>
        </div>
      </div>
    `;

        // Template for Admin
        const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin:auto; border:1px solid #ddd; border-radius:8px; overflow:hidden;">
        <div style="background:#004aad; padding:15px; text-align:center; color:white;">
          <img src="${logoUrl}" alt="Infiniaero" style="max-height:50px;"><br>
          <h2>New Lead Received</h2>
        </div>
        <div style="padding:20px;">
          <p>You have received a new inquiry from your website.</p>
          <h3>Lead Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${fullName || '-'}</li>
            <li><strong>Mobile:</strong> ${mobile || '-'}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Interest:</strong> ${interest || '-'}</li>
            <li><strong>Remark:</strong> ${remark || '-'}</li>
            <li><strong>Query:</strong> ${query || '-'}</li>
          </ul>
          <p>Please contact the lead at your earliest convenience.</p>
        </div>
      </div>
    `;

        // Send email to user
        await transporter.sendMail({
            from: 'info@infiniaero.com',
            to: email,
            subject: 'Submission Successful - Infiniaero',
            cc: ['gaffars712@gmail.com', 'infiniaero@gmail.com'],
            html: userHtml,
        });

        // Send email to admin
        await transporter.sendMail({
            from: 'info@infiniaero.com',
            to: 'info@infiniaero.com', // Admin email
            subject: 'New Website Inquiry - Infiniaero',
            cc: ['gaffars712@gmail.com', 'infiniaero@gmail.com'],
            html: adminHtml,
        });

        return new Response(JSON.stringify({ success: true, message: "Emails sent successfully" }), { status: 200 });

    } catch (error) {
        console.error("Email sending failed:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

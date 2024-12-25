import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { guest, notes } = await request.json();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Wedding Contact Form - ${guest.firstName} ${guest.lastName}`,
      text: `
        New contact form submission:
        
        From: ${guest.firstName} ${guest.lastName}
        Message: ${notes}
      `,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>From:</strong> ${guest.firstName} ${guest.lastName}</p>
        <p><strong>Message:</strong><br>${notes}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

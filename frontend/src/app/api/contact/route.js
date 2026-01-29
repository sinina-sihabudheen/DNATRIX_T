import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Configure Transporter
    // Note: In a real production app, these should be environment variables.
    // For now, we'll check if they exist, otherwise log the email content.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com', // Default to gmail if not set
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email Content
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || '"DNATRIX Web" <no-reply@dnatrixme.com>',
      to: process.env.COMPANY_EMAIL || 'info@dnatrixme.com', // The company email
      replyTo: email,
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f766e;">New Message from DNATRIX Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
          <br/>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">
            <p style="margin-top: 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    // If credentials are missing, we mock the success for demonstration purposes
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('---------------------------------------------------');
      console.log('⚠️  SMTP Credentials missing in .env.local file.');
      console.log('📧  Simulating Email Send:');
      console.log(JSON.stringify(mailOptions, null, 2));
      console.log('---------------------------------------------------');
      
      // Return success even if simulated, so the UI works
      return NextResponse.json(
        { message: 'Message sent successfully (Simulation mode: Configure SMTP in .env.local to send real emails)' },
        { status: 200 }
      );
    }

    // Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}

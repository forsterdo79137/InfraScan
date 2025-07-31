import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you can integrate with your preferred email service
    // Option 1: SendGrid (recommended for production)
    // Option 2: Nodemailer with Gmail/SMTP
    // Option 3: Resend.com
    // Option 4: EmailJS (client-side)

    // For now, we'll log the data and you can implement the email service later
    console.log('Contact Form Submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // TODO: Replace this with actual email sending logic
    // Example with SendGrid:
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'your-email@example.com', // Your email address
      from: 'noreply@infrascan.com', // Verified sender
      subject: 'New InfraScan Early Access Request',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New InfraScan Early Access Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };
    
    await sgMail.send(msg);
    */

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 
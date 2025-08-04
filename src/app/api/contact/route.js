import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_gbkf3ow6_PgLMwfHnQciRJwU54duJgoQq');

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

    // Send confirmation email to customer using simple HTML first
    const customerEmail = await resend.emails.send({
      from: 'InfraScan <noreply@infrascan.world>',
      to: [email],
      subject: 'Thank you for joining InfraScan Early Access!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Welcome to InfraScan!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Infrastructure Inspection Revolution</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Hello ${name},</h2>
            
            <p style="color: #555; line-height: 1.6;">
              Thank you for joining the InfraScan early access waitlist! We're excited to have you on board as we revolutionize infrastructure inspection with AI-powered crack detection.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <h3 style="color: #333; margin-top: 0;">What's Next?</h3>
              <ul style="color: #555; line-height: 1.6;">
                <li>We'll notify you as soon as InfraScan launches in Q2 2026</li>
                <li>You'll get early access to our AI-powered inspection tools</li>
                <li>Exclusive updates on new features and capabilities</li>
                <li>Priority support during the early access period</li>
              </ul>
            </div>
            
            <p style="color: #555; line-height: 1.6;">
              <strong>Your Message:</strong><br>
              "${message}"
            </p>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #888; font-size: 14px;">
                Best regards,<br>
                The InfraScan Team
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #888; font-size: 12px;">
            <p>© 2024 InfraScan. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    // Send notification email to business owner
    let ownerEmail;
    try {
      ownerEmail = await resend.emails.send({
        from: 'InfraScan Contact Form <noreply@infrascan.world>',
        to: ['dominik-luis.forster@tecnico.ulisboa.pt'], // Business owner email
        subject: 'New InfraScan Early Access Request',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #f8f9fa; padding: 30px; border-radius: 10px;">
              <h2 style="color: #333; margin-top: 0;">New Early Access Request</h2>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
                <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">${message}</p>
                <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
              </div>
              
              <p style="color: #555; line-height: 1.6;">
                This person has joined the InfraScan early access waitlist and should be added to your CRM system.
              </p>
            </div>
          </div>
        `,
      });
      console.log('Owner email sent successfully:', ownerEmail);
    } catch (ownerError) {
      console.error('Owner email error:', ownerError);
      ownerEmail = { error: ownerError };
    }

    console.log('Contact Form Submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      customerEmailId: customerEmail.data?.id,
      ownerEmailId: ownerEmail.data?.id,
      customerEmailError: customerEmail.error,
      ownerEmailError: ownerEmail.error
    });

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
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, companyName } = await request.json();

    // Create a nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email template with better styling
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
              background-color: #0052CC;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              padding: 20px;
            }
            .info-row {
              margin-bottom: 15px;
              border-bottom: 1px solid #eee;
              padding-bottom: 10px;
            }
            .label {
              font-weight: bold;
              color: #666;
            }
            .value {
              color: #333;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #eee;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Consultation Request</h1>
            </div>
            <div class="content">
              <div class="info-row">
                <p class="label">Full Name:</p>
                <p class="value">${firstName} ${lastName}</p>
              </div>
              <div class="info-row">
                <p class="label">Email Address:</p>
                <p class="value">${email}</p>
              </div>
              <div class="info-row">
                <p class="label">Company Name:</p>
                <p class="value">${companyName}</p>
              </div>
              <div class="info-row">
                <p class="label">Request Time:</p>
                <p class="value">${new Date().toLocaleString()}</p>
              </div>
            </div>
            <div class="footer">
              <p>This is an automated message from your website's consultation booking system.</p>
              <p>© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email content with the template
    const mailOptions = {
      from: {
        name: 'Consultation Booking',
        address: process.env.EMAIL_USER as string
      },
      to: process.env.ADMIN_EMAIL,
      subject: `New Consultation Request from ${firstName} ${lastName} - ${companyName}`,
      html: htmlTemplate,
      // Text version for email clients that don't support HTML
      text: `
        New Consultation Request
        
        Full Name: ${firstName} ${lastName}
        Email Address: ${email}
        Company Name: ${companyName}
        Request Time: ${new Date().toLocaleString()}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      message: 'Thank you! Your consultation request has been received. We will contact you soon.' 
    }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Sorry, there was an error processing your request. Please try again later.' },
      { status: 500 }
    );
  }
} 
// utils/email.ts
import sgMail from '@sendgrid/mail';

// Initialize SendGrid client with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export const sendVerificationEmail = async (email: string) => {
  const msg = {
    to: email,
    from: 'your@example.com', // Your verified sender email address
    subject: 'Verify Your Email Address',
    text: 'Please verify your email address by clicking the link below:',
    html: '<strong>Please verify your email address by clicking the link below:</strong>',
  };

  await sgMail.send(msg);
};

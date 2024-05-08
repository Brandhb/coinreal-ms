// pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth';
import Email from 'next-auth/providers/email';

export default NextAuth({
  providers: [
    // Add authentication providers here
    Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    // Add other authentication providers as needed
  ],
  // Add additional NextAuth.js configuration options here
});

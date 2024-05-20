// pages/api/veriff-webhook.ts

import { NextApiRequest, NextApiResponse } from 'next';
//import mysql from 'mysql2/promise';

{/*const dbConfig = {
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'your_database_name',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    // Parse the incoming webhook payload
    const webhookData = req.body;

    // Extract verification status and other relevant data from the webhook payload
    const verificationStatus = webhookData?.verification?.status;
    const userId = webhookData?.verification?.vendorData; // Assuming vendorData contains user ID

    // Handle verification status updates
    if (verificationStatus === 'approved' && userId) {
      // User has been successfully verified
      // Connect to MySQL database
      const connection = await mysql.createConnection(dbConfig);

      // Insert/update user status in the database
      await connection.query(
        'INSERT INTO user_verification_status (user_id, status) VALUES (?, ?) ON DUPLICATE KEY UPDATE status = ?',
        [userId, verificationStatus, verificationStatus]
      );

      // Close database connection
      await connection.end();
    }

    // Respond to Veriff with a success status code (200)
    res.status(200).end('Webhook received successfully');
  } catch (error) {
    console.error('Error processing Veriff webhook:', error);
    res.status(500).end('Internal server error');
  }
} */}
export default async function handler(req: NextApiRequest, res: NextApiResponse) { 
    res.status(200).end('Webhook received successfully');
}
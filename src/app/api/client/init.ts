// /pages/api/v1/clients.ts
import { NextApiRequest, NextApiResponse } from 'next';
import * as clientController from '@/app/controllers/client.controller';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Handle GET requests
        // Example: Fetch all clients
        //const clients = await clientController.getAll();
        res.status(200).json('clients');
    } else if (req.method === 'POST') {
        // Handle POST requests
        // Example: Create a new client
        //const newClient = await createClient(req.body);
        res.status(201).json('newClient');
    }
    // Add other methods as needed
}

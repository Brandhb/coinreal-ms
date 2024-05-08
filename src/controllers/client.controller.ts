import { NextApiRequest, NextApiResponse } from 'next';
import * as clientsService from '@/services/client.service';

export default async function init(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Your initialization logic here
    // let veriff = null;
    // try {
    //   // veriff = await getVeriffLink('Ilya', 'Druzhinin')
    //   veriff = await checkVeriffSession('14b50cec-14d9-40c2-9a71-44fdb0a5453d')
    // } catch (error) {
    //   console.log(error)
    // }
    // console.log(veriff)
    
    //res.send({ client: req.session.client || null });
    res.send({ client: null });

  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
}

export async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email } = req.body;
    const client = await clientsService.login(email);
    if (client) {
      //req.session.client = client;
      res.send({ success: 'Welcome!', client });
    } else {
      throw new Error('Internal server error');
    }
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
}

export async function logout(req: NextApiRequest, res: NextApiResponse) {
  try {
    //req.session.client = null;
    res.send({ success: 'You have successfully exited!', client: null });
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
}

export async function getAll(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const clients = await clientsService.getAll();
    res.send(clients);
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
}
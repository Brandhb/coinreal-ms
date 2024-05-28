import { NextApiRequest, NextApiResponse } from 'next';
import { getVeriffLink, checkVeriffSession } from '@/app/actions/veriff';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  let veriff: any = null;
  try {
    veriff = await getVeriffLink('Ilya', 'Druzhinin');
    veriff = await checkVeriffSession('14b50cec-14d9-40c2-9a71-44fdb0a5453d');
  } catch (error) {
    console.error(error);
  }
  console.log(veriff);
  res.json({ client: req.cookies.session || null });
}

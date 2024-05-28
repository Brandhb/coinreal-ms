import { getVeriffLink, checkVeriffSession } from '@/app/actions/veriff';

export async function POST(req: Request) {
  let veriff: any = null;
  try {
    veriff = await getVeriffLink('Ilya', 'Druzhinin');
    veriff = await checkVeriffSession('14b50cec-14d9-40c2-9a71-44fdb0a5453d');
  } catch (error) {
    console.error(error);
  }
  console.log(veriff);
  return new Response("OK", { status: 200 })
}

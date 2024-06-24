//import { config } from 'dotenv';
//config();

export async function GET(req: Request) {
  try {
    const apiKey = process.env.CHANGENOW_API_KEY;
    if (!apiKey) {
      throw new Error('CHANGENOW_API_KEY is not defined');
    }

    const response = await fetch('https://api.changenow.io/v2/fiat-status', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching fiat transaction status: ${response.statusText}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Error fetching fiat transaction status:', error);
    return new Response('Internal server error', { status: 500 });
  }
}

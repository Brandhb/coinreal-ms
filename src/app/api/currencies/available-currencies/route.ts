export async function GET(req: Request) {
  
  try {
    const apiKey = process.env.CHANGENOW_API_KEY;
    if (!apiKey) {
      throw new Error('CHANGENOW_API_KEY is not defined');
    }

    const response = await fetch('https://api.changenow.io/v2/exchange/currencies?active=&flow=standard&buy=&sell=');

    if (!response.ok) {
      throw new Error(`Error fetching currencies: ${response.statusText}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Error fetching currencies:', error);
    return new Response('Internal server error', { status: 500 });
  }
}

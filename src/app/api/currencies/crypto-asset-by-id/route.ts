
export async function GET(req: Request) {

    const coinGeckoApiKey = process.env.COINGECKO_API_KEY || '';
    const {searchParams} = new URL(req.url);
    const id = searchParams.get('id');
  
    try {
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&ids=${id}`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': coinGeckoApiKey,
        },
      };
  
      const response = await fetch(url, options);
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error('Error fetching currencies:', error);
      return new Response('Internal server error', { status: 500 });
    }
  }
  
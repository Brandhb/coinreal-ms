export async function POST(req: Request) {
    try {
      const { fromCurrency, toCurrency } = await req.json();
      const response = await fetch(`https://api.changenow.io/v1/market-info/fixed-rate/changenow?from=${fromCurrency}&to=${toCurrency}`);
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error('Error fetching minimum exchange amount:', error);
      return new Response('Internal server error', { status: 500 });
    }
  }
  
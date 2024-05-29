export async function POST(req: Request) {
    try {
      const { amount, fromCurrency, toCurrency } = await req.json();
      const response = await fetch(`https://api.changenow.io/v1/exchange-amount/${amount}/${fromCurrency}_${toCurrency}?api_key=YOUR_API_KEY`);
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error('Error fetching estimated amount:', error);
      return new Response('Internal server error', { status: 500 });
    }
  }
  
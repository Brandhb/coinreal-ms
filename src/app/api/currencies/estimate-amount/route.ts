
export async function POST(req: Request) {
  try {
    const { amount, fromCurrency, toCurrency } = await req.json();
    const apiKey = process.env.CHANGENOW_API_KEY;
    if (!apiKey) {
      throw new Error('CHANGENOW_API_KEY is not defined');
    }

    const response = await fetch(`https://api.changenow.io/v2/exchange/estimated-amount?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}&fromAmount=${amount}&toAmount=&fromNetwork=btc&toNetwork=eth&flow=fixed-rate&type=&useRateId=true`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-changenow-api-key': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching estimated amount: ${response.statusText}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Error fetching estimated amount:', error);
    return new Response('Internal server error', { status: 500 });
  }
}

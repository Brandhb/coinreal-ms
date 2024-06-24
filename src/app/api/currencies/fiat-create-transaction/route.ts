export async function POST(req: Request) {
    try {
      const apiKey = process.env.CHANGENOW_API_KEY;
    if (!apiKey) {
      throw new Error('CHANGENOW_API_KEY is not defined');
    }
      const { fromCurrency, toCurrency, address, amount, userId } = await req.json();
      const response = await fetch('https://api.changenow.io/v2/fiat-transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify({
          from: fromCurrency,
          to: toCurrency,
          address: address,
          amount: amount,
          extraId: '',
          userId: userId,
          contactEmail: '',
          refundAddress: '',
          refundExtraId: ''
        }),
      });
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error('Error creating transaction:', error);
      return new Response('Internal server error', { status: 500 });
    }
  }
  
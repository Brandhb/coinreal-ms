export async function POST(req: Request) {
    try {
      const { fromCurrency, toCurrency, address, amount } = await req.json();
      const response = await fetch('https://api.changenow.io/v1/transactions/XXX', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromCurrency,
          to: toCurrency,
          address: address,
          amount: amount,
          extraId: '',
          userId: '',
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
  
export async function POST(req: Request) {
    try {
      const { transactionId } = await req.json();
      const response = await fetch(`https://api.changenow.io/v1/transactions/${transactionId}/changenow`);
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error('Error fetching transaction status:', error);
      return new Response('Internal server error', { status: 500 });
    }
  }
  
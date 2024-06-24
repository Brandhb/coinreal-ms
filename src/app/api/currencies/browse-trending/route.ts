export async function GET(req: Request) {
    try {
      const response = await fetch('https://digitalsurge.com.au/api/public/broker/ticker/');
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error('Error fetching currencies:', error);
      return new Response('Internal server error', { status: 500 });
    }
  }
  
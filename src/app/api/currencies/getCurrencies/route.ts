export async function POST(req: Request) {
    try {
      const response = await fetch('https://api.changenow.io/v1/currencies?active=true');
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error('Error fetching currencies:', error);
      return new Response('Internal server error', { status: 500 });
    }
  }
  
import { handleVeriffEvent } from "@/app/actions/veriff";

export async function POST(req: Request) {
  try {
    const payload = req.body;
    await handleVeriffEvent(payload);
    return new Response("Webhook received successfully", { status: 200 });
  } catch (error) {
    console.error("Error processing Veriff webhook:", error);
    return new Response("Internal server error", { status: 500 });  }
}

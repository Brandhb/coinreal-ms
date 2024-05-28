export const getClerkWebhookSecret = (): string => {
    const secret = process.env.CLERK_WEBHOOK_SECRET;
    if (!secret) {
      throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local");
    }
    return secret;
  };
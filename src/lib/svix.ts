import { Webhook } from "svix";

export const createSvixWebhook = (secret: string) => {
  return new Webhook(secret);
};

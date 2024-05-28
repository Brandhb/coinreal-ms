import { db } from "@/lib/db";
import { formatName } from "@/utils/nameFormat";
import { WebhookEvent } from "@clerk/nextjs/server";

export const  handleEvent = async (evt: WebhookEvent) => {
  const { type: eventType, data } = evt;
  
  switch (eventType) {
    case "user.created":
      await handleUserCreated(data);
      break;
    case "user.updated":
      await handleUserUpdated(data);
      break;
    case "user.deleted":
      await handleUserDeleted(data);
      break;
    default:
      throw new Error(`Unhandled event type: ${eventType}`);
  }
};

const handleUserCreated = async (data: any) => {
  const { id, email_addresses, first_name, last_name } = data;
  const name = formatName(first_name, last_name);

  if (!id || !email_addresses) {
    throw new Error("Error occurred -- missing data");
  }

  await db.user.create({
    data: {
      clerkUserId: id,
      name,
      email: email_addresses[0].email_address,
    },
  });

  console.log(`User created with ID: ${id}`);
};

const handleUserUpdated = async (data: any) => {
  const { id, email_addresses, first_name, last_name } = data;
  const name = formatName(first_name, last_name);

  await db.user.update({
    where: { clerkUserId: id },
    data: {
      name,
      email: email_addresses,
    },
  });

  console.log(`User updated with ID: ${id}`);
};

const handleUserDeleted = async (data: any) => {
  const { id } = data;

  await db.user.delete({
    where: { clerkUserId: id },
  });

  console.log(`User deleted with ID: ${id}`);
};

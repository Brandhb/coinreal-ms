'use server'
import { z } from "zod";
import { Resend } from "resend";
import {
  ContactUsEmail,
  VerificationEmail,
  ContactUsEmailtoSupport,
} from "@/emails";
import { ContactFormSchema, EmailFormScheme, VerrifFormSchema } from "@/validators";

const resend = new Resend(process.env.RESEND_API_KEY);
const supportEmailAddress = "support@ways2coin.com";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
type VerificationFormInputs = z.infer<typeof VerrifFormSchema>;
type EmailFormInput = z.infer<typeof EmailFormScheme>
type EmailType = "contactUs" | "contactUsSupport" | "verification";

const emailComponents = {
  contactUs: ContactUsEmail,
  contactUsSupport: ContactUsEmailtoSupport,
  verification: VerificationEmail,
};

export const sendEmail = async (
  data: ContactFormInputs,
  emailType: EmailType
) => {
  let result;
  if (emailType === "verification") {
    result = VerrifFormSchema.safeParse(data);
  } else {
    result = ContactFormSchema.safeParse(data);
  }

  if (!result.success) {
    return { success: false, error: result.error.format() };
  }

  const { name, senderEmail, message } = result.data;
  const reactComponent = emailComponents[emailType]({
    name,
    senderEmail,
    reason: emailType === "verification" ? 'data.reason' : undefined,
    message,
  });

  try {
    const emailToSupport = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [supportEmailAddress],
      subject: getEmailSubject(emailType),
      text: `Name: ${name}\nEmail: ${senderEmail}\nMessage: ${message}`,
      react: reactComponent,
    });

    if (emailToSupport.error) {
      throw new Error(`Failed to send email to support: ${emailToSupport.error.message}`);
    }

    const emailToClient = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [senderEmail],
      subject: getEmailSubject(emailType),
      text: `Name: ${name}\nEmail: ${senderEmail}\nMessage: ${message}`,
      react: reactComponent,
    });

    if (emailToClient.error) {
      throw new Error(`Failed to send confirmation email to client: ${emailToClient.error.message}`);
    }

    return { success: true, emailData: { emailToSupport, emailToClient } };
  } catch (error) {
    console.error("Failed to send email: ", error);
    return { success: false, error: error };
  }
};

const getEmailSubject = (emailType: EmailType): string => {
  switch (emailType) {
    case "contactUs":
    case "contactUsSupport":
      return "Ways2Coin - Contact form submission";
    case "verification":
      return "Ways2Coin - Verification Required";
    default:
      throw new Error("Invalid email type");
  }
};

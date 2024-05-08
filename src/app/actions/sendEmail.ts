"use server";

import { z } from 'zod'
import { ContactFormSchema } from "@/validators";
import ContactUsEmail from "@/emails";
import { validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Inputs = z.infer<typeof ContactFormSchema>

export const sendEmail = async (formData: Inputs) => {
    debugger;
  return new Promise((resolve, reject) => {
    const result = ContactFormSchema.safeParse(formData)

    if (result.success) {
        
        console.log("Running on server");
        console.log("name:", result.data.name);
        console.log("senderEmail:", result.data.senderEmail);
        console.log("message:", result.data.message);
        
        const { name, senderEmail, message } = result.data;
    
        if (!validateString(senderEmail, 500)) {
          reject("Invalid sender email");
          return;
        }
        if (!validateString(message, 5000)) {
          reject("Invalid message");
          return;
        }
    
        resend.emails
          .send({
            from: "onboarding@resend.dev",
            to: "developer@goldy.team",
            subject: "Message from contact Form",
            text: message as string,
            html: ContactUsEmail as unknown as string,
            reply_to: senderEmail as string,
          })
          .then(() => {
            resolve("Email sent successfully");
          })
          .catch((error) => {
            reject(error);
          });
    }
  
    if (result.error) {
      return { success: false, error: result.error.format() }
    }
    
  });
};
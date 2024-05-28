'use server'
import { z } from 'zod'
import { ContactFormSchema } from "@/validators";
import ContactUsEmail from "@/emails";
import { validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
type Inputs = z.infer<typeof ContactFormSchema>

export const sendEmail = async (data: Inputs) => {
  const result = ContactFormSchema.safeParse(data)
    if (result.success) {
      const { name, senderEmail, message } = result.data
      try {
        const data = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: [senderEmail],
          subject: 'Ways2Coin - Contact form submission',
          text: `Name: ${name}\nEmail: ${senderEmail}\nMessage: ${message}`,
          react: ContactUsEmail({ name, senderEmail, message })
        })
        if(data.error) throw Error(data.error.message)
        return { success: true, data }
      } catch (error) {
        console.log("Failed to send email: ", error)
        return { success: false, error }
      }
    }
  
    if (result.error) {
      return { success: false, error: result.error.format() }
    }
};
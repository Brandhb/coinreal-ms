'use server'
import { z } from 'zod'
import { ContactFormSchema } from "@/validators";
import ContactUsEmail, { ContactUsEmailtoSupport } from "@/emails";
import { validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
type Inputs = z.infer<typeof ContactFormSchema>
const supprotEmailAddress = "support@ways2coin.com"
export const sendEmail = async (data: Inputs) => {
  const result = ContactFormSchema.safeParse(data)
    if (result.success) {
      const { name, senderEmail, message } = result.data
      try {
        const emailData = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: [supprotEmailAddress],
          subject: 'Ways2Coin - Contact form submission',
          text: `Name: ${name}\nEmail: ${senderEmail}\nMessage: ${message}`,
          react: ContactUsEmailtoSupport({ name, senderEmail, message })
        })
        
        if(emailData.error) throw Error(emailData.error.message)
          //Send confirmation email to the client email 
          const clientEmailData = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [senderEmail],
            subject: 'Ways2Coin - Contact form submission',
            text: `Name: ${name}\nEmail: ${senderEmail}\nMessage: ${message}`,
            react: ContactUsEmail({ name, senderEmail, message })
          })
          if(clientEmailData.error)  throw Error(clientEmailData.error.message)
        return { success: true, emailData }        
      } catch (error) {
        console.log("Failed to send email: ", error)
        return { success: false, error }
      }
    }
  
    if (result.error) {
      return { success: false, error: result.error.format() }
    }
};
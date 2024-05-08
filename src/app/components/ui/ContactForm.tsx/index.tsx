/* eslint-disable react/prop-types */
"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactFormSchema } from "@/validators";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/shadcn/form";
import { Input } from "@/app/components/ui/shadcn/input";
import { sendEmail } from "@/app/actions/sendEmail";
import { slideIn } from "@/utils/motions";

import EarthCanvas from "@/app/components/canvas/Earth";

type Inputs = z.infer<typeof ContactFormSchema>;

const ContactFrom = () => {
  const form = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      senderEmail: "",
      message: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const processForm: SubmitHandler<Inputs> = async (formData) => {
    debugger;
    console.log('formData: ', formData)
    try {
      setLoading(true);
      await sendEmail(formData);
      // Reset form after successful submission if needed
      form.reset();
      setLoading(false);
    } catch (error) {
      console.error("Error sending email:", error);
      setLoading(false);
      // Handle error as needed, e.g., show error message to the user
    }
  };

  return (
    <div className="lg:py-0 md:py-10 sm:py-10">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"></div>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(processForm)}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Name
              </span>
              <input
                {...form.register("name")}
                placeholder="What's your name?"
                className="bg-gray-50 py-3 px-4 placeholder:text-grey-300 text-grey-900 rounded-lg outline-none border-none font-medium"
              />
              {form.formState.errors.name?.message && (
                <p className="text-sm text-red-400">
                  {form.formState.errors.name.message}
                </p>
              )}
            </label>
            <label className="flex flex-col">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Email
              </span>
              <input
                {...form.register("senderEmail")}
                placeholder="What's your email address?"
                className="bg-gray-50 py-4 px-6 placeholder:text-grey-900 text-grey-900 rounded-lg outline-none border-none font-medium"
              />
              {form.formState.errors.senderEmail?.message && (
                <p className="text-sm text-red-400">
                  {form.formState.errors.senderEmail.message}
                </p>
              )}
            </label>
            <label className="flex flex-col">
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Message
              </span>
              <textarea
                rows={7}
                placeholder="What you want to say?"
                className="bg-gray-50 py-4 px-6 placeholder:text-grey-900 text-grey-900 rounded-lg outline-none border-none font-medium"
                {...form.register("message")}
              />
              {form.formState.errors.message?.message && (
                <p className="text-sm text-red-400">
                  {form.formState.errors.message.message}
                </p>
              )}
            </label>

            <button
              className="bg-blue-500 max-w-40 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
            >
              Send Email
            </button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

export default ContactFrom;

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { sendEmail } from "@/lib/utils";
import CustomButton from "../custom-button";
import MaxWidthWrapper from "../max-width-wrapper";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).max(40, { message: "Name must be less than 40 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(500, { message: "Message must be less than 500 characters" }),
});

const ContactUs = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    sendEmail(data.name, data.email, data.phone, data.message, setLoading);
    form.reset();
  };

  return (
    <MaxWidthWrapper className="h-fit" isTopAccent>
      <div className="grid h-full w-full grid-cols-1 divide-x rounded-3xl border bg-white shadow lg:grid-cols-2">
        <div className="relative hidden w-full rounded-l-3xl bg-gradient-to-b from-[#2c2c30] to-[#1d1d20] lg:col-span-1 lg:flex">
          <div className="absolute inset-0 z-[1] flex flex-col items-center justify-between gap-20 rounded-l-3xl p-10">
            <div className="flex w-full flex-col items-center justify-center gap-2 text-white">
              <span className="w-full text-left font-bold text-[30px] leading-[30px]">Get in Touch with Us.</span>
              <span className="w-full text-left text-[14px] leading-[20px]">
                Let&apos;s build something great together. Fill out the form on the right, and we&apos;ll get back to
                you ASAP.
              </span>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2.5 rounded-lg border border-white/25 bg-white/10 p-5 text-white shadow backdrop-blur-sm">
              <div className="flex w-full items-center justify-center gap-5">
                <div className="flex size-8 items-center justify-center rounded-full border p-2">
                  <Phone className="size-4" />
                </div>
                <span className="flex-1 text-left">+ 1 (407) 37-34745</span>
              </div>
              <div className="flex w-full items-center justify-center gap-5">
                <div className="flex size-8 items-center justify-center rounded-full border p-2">
                  <Mail className="size-4" />
                </div>
                <span className="flex-1 text-left">info@digimarkdevelopers.us</span>
              </div>
            </div>
          </div>
          <div className="-top-32 -right-32 absolute z-0 size-64 rounded-full bg-white/20 blur-[50px]" />
          <div className="-bottom-24 -left-24 absolute z-0 size-80 rounded-full bg-white/20 blur-[50px]" />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="col-span-1 flex w-full flex-col items-center justify-center gap-7.5 p-6 sm:p-10"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      className="w-full placeholder:text-[#8E8E8E]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="w-full placeholder:text-[#8E8E8E]"
                      placeholder="john@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="w-full placeholder:text-[#8E8E8E]"
                      placeholder="(123) 456-7890"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-56 w-full resize-none p-5 placeholder:text-[#8E8E8E]"
                      placeholder="Enter your Inquiry"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CustomButton type="submit" className="w-full cursor-pointer" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" /> : "Send Message"}
            </CustomButton>
          </form>
        </Form>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactUs;

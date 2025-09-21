"use client";

import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import CustomButton from "../custom-button";
import MaxWidthWrapper from "../max-width-wrapper";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const ContactUs = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <MaxWidthWrapper className="h-fit" isTopAccent>
      <div className="grid h-full w-full grid-cols-2 divide-x rounded-3xl border bg-white shadow">
        <div className="relative col-span-1 w-full rounded-l-3xl bg-gradient-to-b bg-neutral-900 from-[#2c2c30] to-[#1d1d20]">
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
        <form className="col-span-1 flex w-full flex-col items-center justify-center gap-7.5 p-10">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <Label htmlFor="fullName" className="w-full text-left">
              Full Name
            </Label>
            <Input
              type="text"
              placeholder="Enter your Full Name"
              className="w-full placeholder:text-[#8E8E8E]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <Label htmlFor="email" className="w-full text-left">
              Email
            </Label>
            <Input
              type="email"
              placeholder="Enter your Email"
              className="w-full placeholder:text-[#8E8E8E]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <Label htmlFor="phone" className="w-full text-left">
              Phone
            </Label>
            <Input
              type="text"
              placeholder="Enter your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full placeholder:text-[#8E8E8E]"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <Label htmlFor="message" className="w-full text-left">
              Message
            </Label>
            <Textarea
              placeholder="Enter your Inquiry"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-56 w-full resize-none p-5 placeholder:text-[#8E8E8E]"
            />
          </div>
          <CustomButton type="submit" size="lg" className="w-full">
            <Send />
            Send Inquiry
          </CustomButton>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactUs;

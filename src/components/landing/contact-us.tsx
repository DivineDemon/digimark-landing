"use client";

import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import CustomButton from "../custom-button";
import MaxWidthWrapper from "../max-width-wrapper";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { sendEmail } from "public/utils/helpers";

const ContactUs = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = "Name is required";

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!phone.trim()) {
      newErrors.phone = "Contact Number is required";
    } else if (!/^\d+$/.test(phone)) {
      newErrors.phone = "Contact Number must be numeric";
    }

    if (!message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setLoading(true);

      try {
        // Assuming sendEmail returns a Promise
        await sendEmail(name, email, phone, message, setLoading);

        // ✅ Clear form after success
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setErrors({});
      } catch (err) {
        console.error("Error sending email:", err);
      } finally {
        // ✅ Re-enable button after completion
        setLoading(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <MaxWidthWrapper className="h-fit" isTopAccent>
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2 divide-x rounded-3xl border bg-white shadow">
        {/* LEFT SECTION */}
        <div className="relative hidden w-full rounded-l-3xl bg-gradient-to-b from-[#2c2c30] to-[#1d1d20] lg:col-span-1 lg:flex">
          <div className="absolute inset-0 z-[1] flex flex-col items-center justify-between gap-20 rounded-l-3xl p-10">
            <div className="flex w-full flex-col items-center justify-center gap-2 text-white">
              <span className="w-full text-left font-bold text-[30px] leading-[30px]">
                Get in Touch with Us.
              </span>
              <span className="w-full text-left text-[14px] leading-[20px]">
                Let&apos;s build something great together. Fill out the form on
                the right, and we&apos;ll get back to you ASAP.
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
                <span className="flex-1 text-left">
                  info@digimarkdevelopers.us
                </span>
              </div>
            </div>
          </div>
          <div className="-top-32 -right-32 absolute z-0 size-64 rounded-full bg-white/20 blur-[50px]" />
          <div className="-bottom-24 -left-24 absolute z-0 size-80 rounded-full bg-white/20 blur-[50px]" />
        </div>

        {/* RIGHT SECTION */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="col-span-1 flex w-full flex-col items-center justify-center gap-7.5 p-6 sm:p-10"
        >
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <Label htmlFor="fullName" className="w-full text-left">
              Full Name
            </Label>
            <Input
              type="text"
              placeholder="Enter your Full Name"
              className="w-full placeholder:text-[#8E8E8E]"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
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
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2">
            <Label htmlFor="phone" className="w-full text-left">
              Phone
            </Label>
            <Input
              type="text"
              placeholder="Enter your Phone Number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors({ ...errors, phone: "" });
              }}
              className="w-full placeholder:text-[#8E8E8E]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2">
            <Label htmlFor="message" className="w-full text-left">
              Message
            </Label>
            <Textarea
              placeholder="Enter your Inquiry"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors({ ...errors, message: "" });
              }}
              className="h-56 w-full resize-none p-5 placeholder:text-[#8E8E8E]"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <CustomButton
            type="submit"
            size="lg"
            className={`w-full ${loading ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
            aria-disabled={loading}
          >
            <Send className={loading ? "animate-spin" : ""} />
            {loading ? "Sending..." : "Send Inquiry"}
          </CustomButton>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactUs;

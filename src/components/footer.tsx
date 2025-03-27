"use client";

import Image from "next/image";
import { useState } from "react";

import GithubIcon from "@/assets/icons/socials/github.svg";
import InstagramIcon from "@/assets/icons/socials/instagram.svg";
import XIcon from "@/assets/icons/socials/x.svg";
import FooterOne from "@/assets/img/footer1.svg";

import MaxWidthWrapper from "./max-width-wrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  return (
    <footer className="h-fit w-full pt-3">
      <MaxWidthWrapper
        isBottomBorder={false}
        isTopAccent={false}
        isTopBorder={false}
        className="border-none"
      >
        <div className="grid w-full grid-cols-6 gap-10 py-20">
          <div className="col-span-2 flex w-full flex-col items-start justify-start">
            <span className="w-full text-3xl font-semibold tracking-tighter">
              Cal.com<sup>®</sup>
            </span>
            <span className="my-5 w-full text-left text-xs font-medium text-black">
              Cal.com® and Cal® are a registered
              <br />
              trademark by Cal.com, Inc. All rights
              <br />
              reserved.
            </span>
            <div className="flex w-full items-center justify-start gap-2.5">
              {[...Array(5)].map((_, idx) => (
                <Image
                  key={idx}
                  src={FooterOne}
                  alt="footer-one"
                  className="size-12"
                />
              ))}
            </div>
            <div className="mt-7 mb-5 flex w-full items-center justify-start gap-5">
              <Image
                src={XIcon}
                alt="x"
                className="size-5 cursor-pointer opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-100"
              />
              <Image
                src={GithubIcon}
                alt="github"
                className="size-5 cursor-pointer opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-100"
              />
              <Image
                src={InstagramIcon}
                alt="instagram"
                className="size-5 cursor-pointer opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-100"
              />
              <Image
                src={XIcon}
                alt="x"
                className="size-5 cursor-pointer opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-100"
              />
              <Image
                src={GithubIcon}
                alt="github"
                className="size-5 cursor-pointer opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-100"
              />
              <Image
                src={InstagramIcon}
                alt="instagram"
                className="size-5 cursor-pointer opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-100"
              />
            </div>
            <span className="w-full text-left text-sm font-medium">
              Our mission is to connect a billion people by
              <br />
              2031 through calendar scheduling.
            </span>
            <Select
              value={selectedLanguage}
              onValueChange={setSelectedLanguage}
            >
              <SelectTrigger className="my-5 w-[180px] border-gray-300 bg-gray-200">
                <SelectValue placeholder={selectedLanguage} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Urdu">Urdu</SelectItem>
                <SelectItem value="French">French</SelectItem>
                <SelectItem value="Arabic">Arabic</SelectItem>
                <SelectItem value="Spanish">Spanish</SelectItem>
              </SelectContent>
            </Select>
            <span className="w-full text-left text-xs font-medium text-black">
              Need Help?&nbsp;
              <span className="text-blue-500 underline">support@cal.com</span>
              &nbsp; or&nbsp;
              <span className="text-blue-500 underline">live chat</span>.
            </span>
          </div>
          <div className="col-span-1 flex w-full flex-col items-start justify-start gap-5">
            <span className="w-full text-left font-semibold">Solutions</span>
            {[
              "Self-hosted",
              "SaaS Hosting",
              "Docs",
              "Cal.ai - AI Phone Agent",
              "Enterprise",
              "Platform",
              "Routing",
              "Cal.com Atoms",
              "Unified Calendar API",
              "Desktop App",
              "FAQ",
              "Enterprise API",
              "Github",
              "Docker",
            ].map((item, idx) => (
              <span
                key={idx}
                className="hover:text-muted-foreground w-full cursor-pointer text-left text-sm text-black transition-colors duration-150 ease-in-out"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="col-span-1 flex w-full flex-col items-start justify-start gap-5">
            <span className="w-full text-left font-semibold">Use Cases</span>
            {[
              "Sales",
              "Marketing",
              "Talent Acquisition",
              "Customer Support",
              "Higher Education",
              "Telehealth",
              "Professional Services",
              "Hiring Marketplace",
              "Human Resources",
              "Tutoring",
              "C-suite",
              "Law",
            ].map((item, idx) => (
              <span
                key={idx}
                className="hover:text-muted-foreground w-full cursor-pointer text-left text-sm text-black transition-colors duration-150 ease-in-out"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="col-span-1 flex w-full flex-col items-start justify-start gap-5">
            <span className="w-full text-left font-semibold">Resources</span>
            {[
              "Blog",
              "Teams",
              "Embed",
              "Recurring Events",
              "Developers",
              "OOO",
              "Workflows",
              "Instant Meetings",
              "App Store",
              "Requires Confirmation",
              "Payments",
              "Video Conferencing",
            ].map((item, idx) => (
              <span
                key={idx}
                className="hover:text-muted-foreground w-full cursor-pointer text-left text-sm text-black transition-colors duration-150 ease-in-out"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="col-span-1 flex w-full flex-col items-start justify-start gap-5">
            <span className="w-full text-left font-semibold">Company</span>
            {[
              "Jobs",
              "About",
              "Open Startup",
              "Support",
              "Privacy",
              "Terms",
              "License",
              "Security",
              "Changelog",
            ].map((item, idx) => (
              <span
                key={idx}
                className="hover:text-muted-foreground w-full cursor-pointer text-left text-sm text-black transition-colors duration-150 ease-in-out"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;

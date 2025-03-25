"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import CustomButton from "./custom-button";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-2.5 z-50 mx-auto w-[1190px] px-5">
      <motion.div
        initial={{
          backgroundColor: "rgba(255, 255, 255, 0)",
          boxShadow: "none",
          borderColor: "rgba(0, 0, 0, 0)",
        }}
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0)",
          boxShadow: isScrolled ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
          borderColor: isScrolled
            ? "rgba(209, 213, 219, 1)"
            : "rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.3 }}
        className="flex h-16 w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-5 shadow shadow-gray-200"
      >
        <span className="w-[205px] text-3xl font-semibold tracking-tighter">
          Cal.com<sup>®</sup>
        </span>
        <div className="flex items-center justify-center gap-10 text-sm">
          {[
            "Solutions",
            "Enterprise",
            "Templates",
            "Developer",
            "Resources",
            "Pricing",
          ].map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>
        <div className="flex w-[205px] items-center justify-center gap-5">
          <Button type="button" variant="ghost">
            Sign in
          </Button>
          <CustomButton>
            <span>Get started</span>
          </CustomButton>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

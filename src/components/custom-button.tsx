import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

interface CustomButtonProps {
  children: ReactNode;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  className?: string;
}

const CustomButton = ({
  size,
  variant,
  children,
  className,
}: CustomButtonProps) => {
  return (
    <Button
      type="button"
      size={size}
      variant={variant}
      className={cn(
        "group relative hidden items-center justify-center overflow-hidden rounded-lg border border-[transparent] bg-neutral-900 bg-gradient-to-b from-[#2c2c30] to-[#1d1d20] px-3 py-2 text-sm font-medium whitespace-nowrap text-white transition-all duration-150 ease-in-out before:pointer-events-none before:absolute before:inset-0 before:rounded-lg before:shadow-[0px_2px_0.4px_0px_rgba(255,_255,_255,_0.16)_inset] hover:bg-neutral-800 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 focus-visible:outline-none lg:flex dark:bg-white dark:text-black",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

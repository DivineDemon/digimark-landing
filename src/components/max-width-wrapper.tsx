import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  className?: string;
  isTopBorder?: boolean;
  isTopAccent?: boolean;
  isBottomBorder?: boolean;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({
  children,
  className,
  isTopBorder,
  isTopAccent,
  isBottomBorder = true,
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn("w-full", {
        "border-b border-gray-300": isBottomBorder,
      })}
    >
      <div
        className={cn(
          "relative mx-auto h-full w-full max-w-[1200px] border-x border-gray-300 p-3",
          className,
          {
            "border-t": isTopBorder,
          }
        )}
      >
        <div
          className={cn("absolute -bottom-3 -left-3 size-6 bg-[#F4F4F4] p-1", {
            hidden: !isBottomBorder,
          })}
        >
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div
          className={cn("absolute -top-3 -left-3 size-6 bg-[#F4F4F4] p-1", {
            hidden: !isTopAccent,
          })}
        >
          <Plus className="text-muted-foreground size-full" />
        </div>
        {children}
        <div
          className={cn("absolute -right-3 -bottom-3 size-6 bg-[#F4F4F4] p-1", {
            hidden: !isBottomBorder,
          })}
        >
          <Plus className="text-muted-foreground size-full" />
        </div>
        <div
          className={cn("absolute -top-3 -right-3 size-6 bg-[#F4F4F4] p-1", {
            hidden: !isTopAccent,
          })}
        >
          <Plus className="text-muted-foreground size-full" />
        </div>
      </div>
    </div>
  );
};

export default MaxWidthWrapper;

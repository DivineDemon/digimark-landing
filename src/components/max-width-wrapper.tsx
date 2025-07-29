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
        "border-gray-300 border-b": isBottomBorder,
      })}
    >
      <div
        className={cn(
          "relative mx-auto h-full w-[95%] max-w-[1200px] border-gray-300 border-x p-3 xl:w-full",
          className,
          {
            "border-t": isTopBorder,
          },
        )}
      >
        <div
          className={cn("-bottom-3 -left-3 absolute size-6 bg-[#F4F4F4] p-1", {
            hidden: !isBottomBorder,
          })}
        >
          <Plus className="size-full text-muted-foreground" />
        </div>
        <div
          className={cn("-top-3 -left-3 absolute size-6 bg-[#F4F4F4] p-1", {
            hidden: !isTopAccent,
          })}
        >
          <Plus className="size-full text-muted-foreground" />
        </div>
        {children}
        <div
          className={cn("-right-3 -bottom-3 absolute size-6 bg-[#F4F4F4] p-1", {
            hidden: !isBottomBorder,
          })}
        >
          <Plus className="size-full text-muted-foreground" />
        </div>
        <div
          className={cn("-top-3 -right-3 absolute size-6 bg-[#F4F4F4] p-1", {
            hidden: !isTopAccent,
          })}
        >
          <Plus className="size-full text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default MaxWidthWrapper;

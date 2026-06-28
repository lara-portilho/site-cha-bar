import cn from "classnames";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;
export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "bg-detail-green hover:bg-detail-green/80 text-detaibg-detail-orange m-0.5 cursor-pointer rounded-md px-2 py-1 font-bold text-white transition disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500",
        className,
      )}
    >
      {children}
    </button>
  );
}

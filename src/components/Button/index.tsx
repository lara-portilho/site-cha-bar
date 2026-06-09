import cn from "classnames";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "solid" | "outline" | "blue";
  size?: "md" | "lg";
};

export function Button({
  className,
  children,
  variant = "solid",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "cursor-pointer rounded-md font-bold transition disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500",
        className,
        {
          "bg-brown hover:bg-brown/80 m-0.5 text-white": variant === "blue",
          "bg-pale hover:bg-pale/80 text-brown m-0.5": variant === "solid",
          "border-pale hover:bg-pale/20 text-brown border-2":
            variant === "outline",
          "px-2 py-1": size === "md",
          "px-3 py-2 text-xl": size === "lg",
        },
      )}
    >
      {children}
    </button>
  );
}

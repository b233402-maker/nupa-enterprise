import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "social";
  icon?: ReactNode;
  isLoading?: boolean;
}

const AuthButton = ({
  children,
  variant = "primary",
  icon,
  isLoading,
  className,
  disabled,
  ...props
}: AuthButtonProps) => {
  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        "w-full py-3.5 px-6 rounded-lg font-medium text-sm transition-all duration-200",
        "flex items-center justify-center gap-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variant === "primary" && [
          "bg-primary text-primary-foreground",
          "hover:opacity-90 active:scale-[0.98]",
        ],
        variant === "social" && [
          "bg-background border border-input text-foreground",
          "hover:bg-muted active:scale-[0.98]",
        ],
        className
      )}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default AuthButton;
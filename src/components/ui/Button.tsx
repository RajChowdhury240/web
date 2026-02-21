import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonProps = BaseProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-green text-bg-base border-accent-green hover:bg-accent-green-hover hover:shadow-glow-green-md hover:-translate-y-0.5 active:bg-accent-green-active active:translate-y-0",
  secondary:
    "bg-transparent text-accent-cyan border-accent-cyan hover:bg-accent-cyan-muted hover:shadow-glow-cyan-sm",
  ghost:
    "bg-transparent text-text-secondary border-border-default hover:bg-bg-hover hover:text-text-primary",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-4 text-xs",
  md: "h-10 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-mono font-medium uppercase tracking-wider border rounded-lg transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-green focus-visible:outline-offset-2 disabled:opacity-40 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

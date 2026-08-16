import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BaseProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  external?: boolean;
  download?: boolean;
}

interface ButtonAsButton extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const variantClass = props.variant === "secondary" ? "btn-secondary" : "btn-primary";
  const className = cn(variantClass, props.className);

  if ("href" in props && props.href) {
    const { href, external, download, children } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      );
    }
    if (download) {
      return (
        <a href={href} download className={className}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button", children } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

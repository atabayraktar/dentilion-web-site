import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
  label?: string;
  external?: boolean;
};

export default function Button({ href, variant = "primary", children, className = "", label, external }: Props) {
  const cls = `btn btn-${variant} ${className}`;
  if (external || /^(tel:|https?:)/.test(href)) {
    return (
      <a href={href} aria-label={label} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} aria-label={label} className={cls}>
      {children}
    </Link>
  );
}

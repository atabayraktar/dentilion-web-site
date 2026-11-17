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

const styles = {
  primary: "bg-accent text-on-accent hover:opacity-90",
  ghost: "border border-current hover:bg-surface/10",
};

export default function Button({ href, variant = "primary", children, className = "", label, external }: Props) {
  const cls = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold transition ${styles[variant]} ${className}`;
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

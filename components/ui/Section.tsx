import type { ReactNode } from "react";
import Reveal from "./Reveal";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <Reveal className="mb-6 text-muted md:mb-8">
      <span className="label">{children}</span>
    </Reveal>
  );
}

import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-x-2">
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-x-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {c.href ? (
              <Link href={c.href} className="inline-flex min-h-11 items-center transition-colors hover:text-accent">{c.label}</Link>
            ) : (
              <span aria-current="page" className="text-text">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

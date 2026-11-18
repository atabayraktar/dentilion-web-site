export const locales = ["tr", "en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export const isLocale = (v: string): v is Locale =>
  (locales as readonly string[]).includes(v);

/** Build a public URL for a locale. tr has no prefix; path may carry a #hash. */
export function localePath(locale: Locale, path = "/"): string {
  const [p, hash] = path.split("#");
  const base = locale === defaultLocale ? p || "/" : `/${locale}${p === "/" ? "" : p}`;
  return hash ? `${base}#${hash}` : base;
}

/** Detail-page path of a service slug. */
export const servicePath = (slug: string) => `/hizmetler/${slug}`;

/** Remove a leading locale segment from a browser pathname. */
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split("/");
  return isLocale(first ?? "") ? `/${rest.join("/")}` : pathname;
}

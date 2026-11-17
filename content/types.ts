import type { Locale } from "@/lib/i18n";

export type { Locale };
/** All three locales are required, so a missing translation fails tsc. */
export type Localized<T> = { tr: T; en: T; de: T };

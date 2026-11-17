import Link from "next/link";
import { site } from "@/content/site";
import { getDict } from "@/content/ui";
import { localePath, type Locale } from "@/lib/i18n";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import HeaderShell from "./HeaderShell";
import { ArrowIcon } from "./icons";

export default function Header({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const items = site.nav.map((n) => ({ href: n.href, label: n.label[locale] }));

  return (
    <HeaderShell>
      <div className="pointer-events-auto relative flex h-[4.25rem] items-center justify-between gap-2 rounded-full border border-line bg-bg/60 pl-4 pr-2 shadow-sm backdrop-blur-xl transition-[background-color,box-shadow] duration-300 group-data-[scrolled=true]/h:bg-bg/90 group-data-[scrolled=true]/h:shadow-lg md:pl-6">
        <Link href={localePath(locale)} aria-label={t.logoLabel} className="shrink-0 py-2">
          <Logo className="h-11 w-auto md:h-12" />
        </Link>
        <nav aria-label={t.mainNav} className="hidden md:block">
          <ul className="flex text-[1.05rem] font-medium lg:gap-1">
            {items.map((i) => (
              <li key={i.href}>
                <Link href={localePath(locale, i.href)} className="nav-link block">
                  <span>{i.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <LanguageSwitcher locale={locale} label={t.language} />
            <ThemeToggle label={t.themeSwitch} />
          </div>
          <Link
            href={localePath(locale, "/#iletisim")}
            className="cta-wow group inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-semibold md:px-6 md:text-[0.95rem]"
          >
            {t.book}
            <ArrowIcon width={16} height={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <MobileMenu locale={locale} items={items} t={t} />
        </div>
      </div>
    </HeaderShell>
  );
}

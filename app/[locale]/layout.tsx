import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, Dancing_Script, Figtree } from "next/font/google";
import { getDict } from "@/content/ui";
import { site } from "@/content/site";
import { isLocale, locales } from "@/lib/i18n";
import { baseUrl, homeTitle } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import "../globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  variable: "--font-bricolage",
  display: "swap",
});
const script = Dancing_Script({ subsets: ["latin", "latin-ext"], weight: "700", variable: "--font-script", display: "swap" });
const text = Figtree({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  variable: "--font-figtree",
  display: "swap",
});

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export const viewport: Viewport = { colorScheme: "light dark" };

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    metadataBase: new URL(baseUrl),
    title: { default: homeTitle[locale], template: `%s | ${site.name}` },
    description: site.fullName[locale],
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${display.variable} ${text.variable} ${script.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          {t.skip}
        </a>
        <Header locale={locale} />
        <main id="main">
          {children}
        </main>
        <Footer locale={locale} />
        <StickyBar locale={locale} />
      </body>
    </html>
  );
}

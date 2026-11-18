"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/content/contact";
import { services } from "@/content/services";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { ArrowIcon, WhatsAppIcon } from "./icons";
import Select from "./ui/Select";

type Errors = Partial<Record<"name" | "phone" | "consent", string>>;

const field =
  "mt-2 block w-full rounded-ui border border-text/30 bg-transparent px-4 py-3 text-text transition-colors duration-200 hover:border-accent/70 focus:border-accent";

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = contact[locale];
  const [v, setV] = useState({ name: "", phone: "", service: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof v) => (e: { target: { value: string } }) => setV((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!v.name.trim()) next.name = t.errName;
    if (v.phone.replace(/\D/g, "").length < 10) next.phone = t.errPhone;
    if (!consent) next.consent = t.errConsent;
    setErrors(next);
    if (Object.keys(next).length) return;
    const text = [
      v.service ? t.waService.replace("{s}", v.service) : t.waGeneral,
      `${t.waName}: ${v.name.trim()}`,
      `${t.waPhone}: ${v.phone.trim()}`,
      v.message.trim() && `${t.waNote}: ${v.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const err = (k: keyof Errors) => (errors[k] ? <p id={`e-${k}`} className="mt-1 text-sm text-coral">{errors[k]}</p> : null);
  const aria = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `e-${k}` : undefined });

  return (
    <form onSubmit={submit} noValidate className="flex h-full flex-col gap-5 rounded-ui border border-line bg-bg p-[clamp(1.25rem,3vw,2.5rem)]">
      <h3 className="text-3xl">{t.formTitle}</h3>
      <label className="block">
        {t.name} *
        <input value={v.name} onChange={set("name")} autoComplete="name" className={field} {...aria("name")} />
        {err("name")}
      </label>
      <label className="block">
        {t.phone} *
        <input value={v.phone} onChange={set("phone")} type="tel" autoComplete="tel" inputMode="tel" className={field} {...aria("phone")} />
        {err("phone")}
      </label>
      <Select label={t.service} placeholder={t.anyService} options={services.map((s) => s.title[locale])} value={v.service} onChange={(s) => setV((x) => ({ ...x, service: s }))} />
      <label className="block">
        {t.message} <span className="text-sm text-muted">({t.optional})</span>
        <textarea value={v.message} onChange={set("message")} rows={3} maxLength={300} className={`${field} resize-none`} />
      </label>
      <div>
        <label className="group flex min-h-11 cursor-pointer items-start gap-3 text-sm text-muted">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="peer sr-only appearance-none" {...aria("consent")} />
          <span aria-hidden className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border border-text/40 text-on-accent transition-colors duration-200 group-hover:border-accent peer-checked:border-accent peer-checked:bg-accent peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent [&>svg]:scale-0 peer-checked:[&>svg]:scale-100">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 motion-reduce:transition-none">
              <path d="M3 8.5l3.2 3L13 4.5" />
            </svg>
          </span>
          <span>{t.consent} *</span>
        </label>
        {err("consent")}
      </div>
      <button type="submit" className="btn btn-primary mt-auto self-start">
        <WhatsAppIcon width={22} height={22} fill="currentColor" aria-hidden />
        {t.submit}
        <ArrowIcon width={18} height={18} />
      </button>
      <p role="status" className="min-h-6 text-accent">
        {sent && (
          <>
            {t.done} <a href={`tel:${site.phone.tel}`} className="font-semibold">{site.phone.display}</a>
          </>
        )}
      </p>
    </form>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { form as formCopy } from "@/content/form";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { buildWhatsAppText, buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Locale } from "@/lib/i18n";
import { WhatsAppIcon, ArrowIcon } from "./icons";

type Errors = Partial<Record<"name" | "phone" | "kvkk", string>>;

const field =
  "mt-2 block w-full rounded-lg border border-white/25 bg-transparent px-4 py-3 text-stage-fg placeholder:text-stage-muted";

export default function AppointmentForm({ locale }: { locale: Locale }) {
  const t = formCopy[locale];
  const [v, setV] = useState({ name: "", phone: "", service: "", when: "", message: "" });
  const [kvkk, setKvkk] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "preparing" | "done">("idle");
  const set = (k: keyof typeof v) => (e: { target: { value: string } }) => setV((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!v.name.trim()) next.name = t.errName;
    if (v.phone.replace(/\D/g, "").length < 10) next.phone = t.errPhone;
    if (!kvkk) next.kvkk = t.errKvkk;
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("preparing");
    const url = buildWhatsAppUrl(locale, v);
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("done");
    }, 400);
  };

  const err = (k: keyof Errors) => (errors[k] ? <p id={`e-${k}`} className="mt-1 text-sm text-coral">{errors[k]}</p> : null);
  const aria = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `e-${k}` : undefined });
  const preview = buildWhatsAppText(locale, v);

  return (
    <div className="grid gap-10">
      <form onSubmit={submit} noValidate className="space-y-5">
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
        <label className="block">
          {t.service}
          <select value={v.service} onChange={set("service")} className={`${field} bg-stage`}>
            <option value="">{t.anyService}</option>
            {services.map((s) => (
              <option key={s.id} value={s.title[locale]}>{s.title[locale]}</option>
            ))}
          </select>
        </label>
        <label className="block">
          {t.when}
          <input value={v.when} onChange={set("when")} placeholder={t.whenHint} className={field} />
        </label>
        <label className="block">
          {t.message}
          <textarea value={v.message} onChange={set("message")} rows={3} className={field} />
        </label>
        <div>
          <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm text-stage-muted">
            <input type="checkbox" checked={kvkk} onChange={(e) => setKvkk(e.target.checked)} className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--aqua)]" {...aria("kvkk")} />
            <span>{t.kvkk} *</span>
          </label>
          {err("kvkk")}
        </div>
        <button
          type="submit"
          disabled={status === "preparing"}
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-aqua px-7 font-semibold text-stage"
        >
          <WhatsAppIcon />
          {status === "preparing" ? t.preparing : t.submit}
          <ArrowIcon width={18} height={18} />
        </button>
        <p className="text-sm text-stage-muted">{t.noEmail}</p>
        <p role="status" className="text-aqua">
          {status === "done" && (
            <>
              {t.done} <a href={`tel:${site.phone.tel}`} className="underline">{site.phone.display}</a>
            </>
          )}
        </p>
      </form>
      <div aria-live="off">
        <p className="label text-stage-muted">{t.preview}</p>
        <pre className="mt-4 whitespace-pre-wrap rounded-2xl rounded-tl-sm border border-aqua/60 p-5 font-sans text-stage-fg">{preview}</pre>
      </div>
    </div>
  );
}

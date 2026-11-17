import Image from "next/image";

export default function SplitHero({ title, text, src, alt }: { title: string; text?: string; src: string; alt: string }) {
  return (
    <section className="stage relative isolate overflow-hidden">
      <div className="wrap grid items-center gap-10 pb-12 pt-28 md:pb-20 md:pt-36 lg:grid-cols-12 lg:gap-[clamp(2rem,5vw,6rem)]">
        <div className="lg:col-span-7">
          <h1 className="max-w-3xl text-[clamp(2.25rem,5.5vw,4.75rem)]">{title}</h1>
          {text && <p className="mt-5 max-w-xl text-stage-muted md:text-lg">{text}</p>}
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] lg:col-span-5 lg:aspect-[4/3] lg:rounded-[2.5rem]">
          <Image src={src} alt={alt} fill priority quality={85} sizes="(min-width:1024px) 42vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-stage/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

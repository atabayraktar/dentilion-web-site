import { posts } from "@/content/blog";
import { detailServices } from "@/content/services";
import { site } from "@/content/site";
import { localePath } from "@/lib/i18n";
import { baseUrl } from "@/lib/seo";

export function GET() {
  const url = (p: string) => baseUrl + localePath("tr", p);
  const hours = site.hours.map((h) => `${h.label.tr} ${h.open}-${h.close}`).join(", ");
  const body = `# ${site.fullName.tr}

> ${site.name} is a dental clinic in Çanakkale, Türkiye led by ${site.doctor}. Site languages: Turkish (default), English (/en), German (/de).

## Contact
- Address: ${site.address.full}
- Phone: ${site.phone.display} (${site.phone.tel})
- WhatsApp: +${site.whatsapp}
- Email: ${site.email}
- Hours: ${hours}
- Instagram: ${site.instagram}
- Map: ${site.mapUrl}

## Pages
- [Home](${url("/")})
- [Services](${url("/hizmetler")})
- [Blog](${url("/blog")})

## Services
${detailServices.map((s) => `- [${s.title.tr}](${url(`/${s.slug}`)}): ${s.summary.tr}`).join("\n")}

## Blog
${posts.map((p) => `- [${p.content.tr.title}](${url(`/${p.slug}`)}): ${p.content.tr.excerpt}`).join("\n")}
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}

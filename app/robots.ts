import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/seo";

const ai = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "PerplexityBot", "Google-Extended", "Applebot-Extended"];

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }, { userAgent: ai, allow: "/" }], sitemap: `${baseUrl}/sitemap.xml` };
}

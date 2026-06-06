import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Contact as ContactSection } from "@/components/home/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Linguaverse" },
      { name: "description", content: "Reach out to enroll, book a free demo, or partner for corporate training." },
      { property: "og:title", content: "Contact Linguaverse" },
      { property: "og:description", content: "We'll respond within 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <Layout>
      <div className="py-10" />
      <ContactSection />
    </Layout>
  ),
});

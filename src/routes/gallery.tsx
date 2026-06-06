import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Gallery as GallerySection } from "@/components/home/Gallery";
import { Testimonials } from "@/components/home/Testimonials";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mozhi Mirai" },
      { name: "description", content: "Glimpses of classrooms, cultural events and workshops at Mozhi Mirai." },
      { property: "og:title", content: "Mozhi Mirai Gallery" },
      { property: "og:description", content: "A look inside our vibrant campus." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: () => (
    <Layout>
      <div className="py-10" />
      <GallerySection />
      <Testimonials />
    </Layout>
  ),
});

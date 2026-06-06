import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Gallery as GallerySection } from "@/components/home/Gallery";
import { Testimonials } from "@/components/home/Testimonials";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Linguaverse" },
      { name: "description", content: "Glimpses of classrooms, cultural events and workshops at Linguaverse." },
      { property: "og:title", content: "Linguaverse Gallery" },
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

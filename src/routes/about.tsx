import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { About as AboutSection } from "@/components/home/About";
import { WhyUs } from "@/components/home/WhyUs";
import { Stats } from "@/components/home/Stats";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mozhi Mirai Lingua Institute of Languages" },
      { name: "description", content: "Our mission, vision and story: helping learners speak the world's most powerful languages since 2010." },
      { property: "og:title", content: "About Mozhi Mirai" },
      { property: "og:description", content: "Premium language training built around your success." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <Layout>
      <div className="py-10" />
      <AboutSection />
      <WhyUs />
      <Stats />
    </Layout>
  ),
});

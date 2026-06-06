import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Courses as CoursesSection } from "@/components/home/Courses";
import { Batches } from "@/components/home/Batches";
import { Process } from "@/components/home/Process";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Mozhi Mirai" },
      { name: "description", content: "Explore our English, German, French, Japanese, Spanish, IELTS, TOEFL and corporate training programs." },
      { property: "og:title", content: "Mozhi Mirai Courses" },
      { property: "og:description", content: "Find the right language course for your goals." },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: () => (
    <Layout>
      <div className="py-10" />
      <CoursesSection />
      <Process />
      <Batches />
    </Layout>
  ),
});

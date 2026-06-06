import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Courses } from "@/components/home/Courses";
import { WhyUs } from "@/components/home/WhyUs";
import { Testimonials } from "@/components/home/Testimonials";
import { Process } from "@/components/home/Process";
import { Stats } from "@/components/home/Stats";
import { Gallery } from "@/components/home/Gallery";
import { Batches } from "@/components/home/Batches";
import { Contact } from "@/components/home/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Linguaverse — Master Global Languages, Unlock Global Opportunities" },
      { name: "description", content: "Learn English, German, French, Japanese, Spanish, IELTS, TOEFL and more from certified trainers. Flexible online and offline batches." },
      { property: "og:title", content: "Linguaverse — Master Global Languages" },
      { property: "og:description", content: "Certified language training and exam prep for students, professionals, and corporates." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <About />
      <Courses />
      <WhyUs />
      <Testimonials />
      <Process />
      <Stats />
      <Gallery />
      <Batches />
      <Contact />
    </Layout>
  );
}

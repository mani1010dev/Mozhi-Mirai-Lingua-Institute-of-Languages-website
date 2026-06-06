import { motion } from "framer-motion";
import { ArrowUpRight, Clock, BarChart3 } from "lucide-react";
import { SectionHeader } from "./Section";

const courses = [
  { name: "English", flag: "GB", duration: "3 months", level: "All Levels" },
  { name: "German", flag: "DE", duration: "4 months", level: "A1 – C1" },
  { name: "French", flag: "FR", duration: "3 months", level: "A1 – B2" },
  { name: "Japanese", flag: "JP", duration: "6 months", level: "N5 – N3" },
  { name: "Spanish", flag: "ES", duration: "3 months", level: "A1 – B2" },
  { name: "IELTS Prep", flag: "IELTS", duration: "8 weeks", level: "Band 6 – 8" },
  { name: "TOEFL Prep", flag: "TOEFL", duration: "8 weeks", level: "80 – 110" },
  { name: "Corporate Training", flag: "B2B", duration: "Custom", level: "Tailored" },
];

export function Courses() {
  return (
    <section id="courses" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Our Courses"
          title={<>Languages and exams, <span className="gradient-text">expertly taught</span></>}
          subtitle="From foundational to advanced — every program led by certified trainers."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:shadow-soft hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 size-32 rounded-full gradient-brand opacity-10 group-hover:opacity-25 transition" />
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-bold tracking-wider text-primary mb-4">
                {c.flag}
              </div>
              <h3 className="font-display font-bold text-xl">{c.name}</h3>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Clock className="size-3.5" /> {c.duration}</span>
                <span className="inline-flex items-center gap-1"><BarChart3 className="size-3.5" /> {c.level}</span>
              </div>
              <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Learn more <ArrowUpRight className="size-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

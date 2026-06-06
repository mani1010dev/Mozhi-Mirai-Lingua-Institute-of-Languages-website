import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";
import { SectionHeader } from "./Section";
import students from "@/assets/students.jpg";

const timeline = [
  { year: "2010", text: "Founded with 3 languages and 12 students" },
  { year: "2015", text: "Expanded to corporate training partnerships" },
  { year: "2019", text: "Launched online learning platform" },
  { year: "2023", text: "Crossed 5,000 successful alumni worldwide" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 gradient-brand rounded-3xl opacity-20 blur-2xl" />
          <img
            src={students}
            alt="Students learning at Mozhi Mirai"
            loading="lazy"
            width={1280}
            height={960}
            className="relative rounded-3xl shadow-soft w-full object-cover"
          />
        </motion.div>
        <div>
          <SectionHeader
            center={false}
            eyebrow="About Mozhi Mirai"
            title={<>Where curious minds become <span className="gradient-text">global citizens</span></>}
            subtitle="For over a decade, Mozhi Mirai has been helping learners speak the world's most powerful languages with fluency, confidence, and cultural depth."
          />
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { Icon: Target, title: "Mission", text: "Empower learners through immersive, outcome-driven language education." },
              { Icon: Eye, title: "Vision", text: "A connected world where language is never a barrier to opportunity." },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="p-5 rounded-2xl bg-card border border-border">
                <Icon className="size-6 text-coral mb-3" />
                <h4 className="font-bold mb-1">{title}</h4>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 relative pl-6 border-l-2 border-border space-y-5">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[31px] top-1 size-4 rounded-full gradient-brand ring-4 ring-background" />
                <div className="flex items-baseline gap-3">
                  <Award className="size-4 text-coral" />
                  <span className="font-display font-bold text-lg">{t.year}</span>
                </div>
                <p className="text-sm text-muted-foreground ml-7">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

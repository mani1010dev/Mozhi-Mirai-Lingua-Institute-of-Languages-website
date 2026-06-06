import { motion } from "framer-motion";
import { ClipboardCheck, BookOpen, Users2, Award } from "lucide-react";
import { SectionHeader } from "./Section";

const steps = [
  { Icon: ClipboardCheck, title: "Assessment", text: "Take a quick placement test so we can build your roadmap." },
  { Icon: BookOpen, title: "Enrollment", text: "Pick the course, batch, and learning mode that suits you." },
  { Icon: Users2, title: "Expert Training", text: "Learn through interactive sessions, projects, and immersion." },
  { Icon: Award, title: "Certification", text: "Earn your certificate and unlock global opportunities." },
];

export function Process() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Learning Journey" title={<>A simple <span className="gradient-text">4-step path</span> to fluency</>} />
        <div className="mt-16 relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-coral to-primary opacity-30" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative mx-auto size-20 rounded-2xl gradient-brand grid place-items-center text-white shadow-glow">
                <s.Icon className="size-8" />
                <span className="absolute -top-2 -right-2 size-7 rounded-full bg-card border border-border text-xs font-bold grid place-items-center text-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

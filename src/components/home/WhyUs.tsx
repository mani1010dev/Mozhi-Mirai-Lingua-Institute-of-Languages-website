import { motion } from "framer-motion";
import { GraduationCap, Clock4, Laptop2, Users, Briefcase, Globe2 } from "lucide-react";
import { SectionHeader } from "./Section";

const features = [
  { Icon: GraduationCap, title: "Certified Trainers", text: "Native and accredited instructors with international experience." },
  { Icon: Clock4, title: "Flexible Timings", text: "Morning, evening, and weekend batches that fit your schedule." },
  { Icon: Laptop2, title: "Online & Offline", text: "Choose live classrooms or interactive virtual sessions." },
  { Icon: Users, title: "Small Batches", text: "Maximum 12 learners per batch for personalised attention." },
  { Icon: Briefcase, title: "Placement Assistance", text: "Career guidance and corporate connections to launch your journey." },
  { Icon: Globe2, title: "Exam Prep Experts", text: "Specialised IELTS, TOEFL, JLPT, DELE, DELF and Goethe coaching." },
];

export function WhyUs() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={<>An institute built around <span className="gradient-text">your success</span></>}
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-all"
            >
              <div className="size-12 rounded-xl gradient-brand grid place-items-center text-white mb-5 group-hover:scale-110 transition-transform">
                <f.Icon className="size-6" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

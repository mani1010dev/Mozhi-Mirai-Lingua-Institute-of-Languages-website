import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "./Section";

const reviews = [
  { name: "Priya Menon", course: "IELTS Prep", score: "Band 8.5", avatar: "PM", text: "The mock tests and personalised feedback pushed me from 6.5 to 8.5 in ten weeks. Truly life-changing." },
  { name: "Rahul Sharma", course: "German B2", score: "Goethe B2", avatar: "RS", text: "Moved to Berlin for my masters because of the confidence I built here. My trainer felt like a mentor." },
  { name: "Aisha Khan", course: "Japanese N4", score: "Cleared JLPT", avatar: "AK", text: "Small batch sizes meant I never felt lost. The cultural workshops were the highlight of my year." },
  { name: "Daniel Roy", course: "Spoken English", score: "Promoted", avatar: "DR", text: "I went from hesitant to leading client calls in six months. The trainers genuinely care about your progress." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Success Stories" title={<>Voices of our <span className="gradient-text">global alumni</span></>} />
        <div className="mt-14 max-w-3xl mx-auto relative">
          <Quote className="absolute -top-6 -left-2 size-24 text-primary/10" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative p-10 rounded-3xl bg-card border border-border shadow-soft"
            >
              <div className="flex gap-1 text-gold mb-5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="size-5 fill-current" />
                ))}
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="size-12 rounded-full gradient-brand grid place-items-center text-white font-bold">{r.avatar}</div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.course} · {r.score}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={prev} aria-label="Previous" className="size-10 grid place-items-center rounded-full bg-card border border-border hover:bg-secondary">
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all ${idx === i ? "w-8 gradient-brand" : "w-2 bg-border"}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="size-10 grid place-items-center rounded-full bg-card border border-border hover:bg-secondary">
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Counter } from "@/components/site/Counter";

const bubbles = ["A", "あ", "ع", "Я", "文", "Ñ", "ß", "한"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-cover opacity-30"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <div className="absolute -top-32 -left-32 size-96 gradient-brand opacity-20 blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-32 size-96 bg-coral opacity-25 blur-3xl animate-blob" />

      {bubbles.map((c, i) => (
        <motion.span
          key={i}
          className="absolute hidden md:grid place-items-center size-14 rounded-full bg-card/70 backdrop-blur border border-border font-display font-bold text-xl text-primary"
          style={{
            top: `${15 + (i * 9) % 70}%`,
            left: `${5 + (i * 13) % 90}%`,
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        >
          {c}
        </motion.span>
      ))}

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
            <Sparkles className="size-3.5 text-coral" /> New batches enrolling for 2026
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Master Global Languages,{" "}
            <span className="gradient-text">Unlock Global Opportunities</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Learn English, German, French, Japanese, Spanish, IELTS, TOEFL, and more from certified trainers — online or in person.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-brand text-white font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              Enroll Now <ArrowRight className="size-4" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-card border border-border font-semibold hover:bg-secondary transition"
            >
              <PlayCircle className="size-5" /> Book Free Demo
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto">
            {[
              { v: 5000, s: "+", l: "Students" },
              { v: 15, s: "+", l: "Languages" },
              { v: 95, s: "%", l: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.l} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold gradient-text">
                  <Counter to={stat.v} suffix={stat.s} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-coral mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </motion.div>
  );
}

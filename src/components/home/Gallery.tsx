import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeader } from "./Section";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, label: "Classroom", span: "md:col-span-2 md:row-span-2" },
  { src: g2, label: "Cultural Day" },
  { src: g3, label: "Japanese Workshop" },
  { src: g4, label: "Study Group" },
  { src: g5, label: "Graduation" },
  { src: g6, label: "Workshop", span: "md:col-span-2" },
];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Gallery" title={<>Moments from our <span className="gradient-text">vibrant campus</span></>} />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setActive(img.src)}
              className={`group relative overflow-hidden rounded-2xl ${img.span ?? ""}`}
            >
              <img src={img.src} alt={img.label} loading="lazy" width={800} height={800} className="size-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition" />
              <span className="absolute bottom-3 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition">{img.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur grid place-items-center p-6"
          >
            <button onClick={() => setActive(null)} aria-label="Close" className="absolute top-6 right-6 size-10 grid place-items-center rounded-full bg-white/10 text-white">
              <X />
            </button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={active} alt="" className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

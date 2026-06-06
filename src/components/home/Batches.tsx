import { motion } from "framer-motion";
import { Calendar, Clock, Wifi, MapPin } from "lucide-react";
import { SectionHeader } from "./Section";

const batches = [
  { course: "IELTS Intensive", date: "Jun 17, 2026", time: "7:00 – 9:00 AM", mode: "Online", Icon: Wifi },
  { course: "German A1 Foundation", date: "Jun 22, 2026", time: "6:30 – 8:00 PM", mode: "Offline", Icon: MapPin },
  { course: "Spoken English", date: "Jun 24, 2026", time: "10:00 – 11:30 AM", mode: "Online", Icon: Wifi },
  { course: "Japanese N5", date: "Jul 01, 2026", time: "Sat & Sun · 11 AM", mode: "Offline", Icon: MapPin },
  { course: "TOEFL Crash Course", date: "Jul 08, 2026", time: "8:00 – 10:00 PM", mode: "Online", Icon: Wifi },
  { course: "French A2", date: "Jul 15, 2026", time: "5:30 – 7:00 PM", mode: "Hybrid", Icon: Wifi },
];

export function Batches() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Upcoming Batches" title={<>Reserve your seat — <span className="gradient-text">batches fill fast</span></>} />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {batches.map((b, i) => (
            <motion.div
              key={b.course}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-coral/50 hover:shadow-soft transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-bold text-lg">{b.course}</h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-coral/10 text-coral">
                  <b.Icon className="size-3" /> {b.mode}
                </span>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Calendar className="size-4" /> Starts {b.date}</div>
                <div className="flex items-center gap-2"><Clock className="size-4" /> {b.time}</div>
              </div>
              <a href="#contact" className="mt-5 block text-center w-full py-2.5 rounded-xl gradient-brand text-white font-semibold text-sm hover:opacity-90">
                Reserve seat
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

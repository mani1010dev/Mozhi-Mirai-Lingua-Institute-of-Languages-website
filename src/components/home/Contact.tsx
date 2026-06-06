import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { SectionHeader } from "./Section";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid phone").max(20),
  course: z.string().min(1, "Pick a course"),
  message: z.string().trim().max(1000).optional(),
});

const COURSES = ["English", "German", "French", "Japanese", "Spanish", "IELTS", "TOEFL", "Corporate Training"];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setError(null);
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Get In Touch"
          title={<>Ready to start? <span className="gradient-text">Let's talk.</span></>}
          subtitle="Fill the form and our counsellor will reach out within 24 hours."
        />
        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-8 rounded-3xl bg-card border border-border shadow-soft space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              <Field label="Phone" name="phone" placeholder="+91 98765 43210" />
              <div>
                <label className="text-sm font-medium block mb-1.5">Course interested</label>
                <select name="course" required className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select course</option>
                  {COURSES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Message (optional)</label>
              <textarea name="message" rows={4} maxLength={1000} placeholder="Tell us about your goals..." className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            {sent && (
              <div className="flex items-center gap-2 text-sm text-coral font-medium">
                <CheckCircle2 className="size-4" /> Thanks! We'll be in touch shortly.
              </div>
            )}
            <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-brand text-white font-semibold shadow-glow hover:scale-[1.02] transition">
              Send enquiry <Send className="size-4" />
            </button>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
              <Info Icon={MapPin} title="Visit us" text="24 Linguistics Avenue, Indiranagar, Bengaluru 560001" />
              <Info Icon={Phone} title="Call us" text="+91 98765 43210" />
              <Info Icon={Mail} title="Email" text="hello@mozhimirai.in" />
              <a href="https://wa.me/919876543210" className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition">
                <span className="size-10 rounded-full bg-[#25D366] text-white grid place-items-center"><MessageCircle className="size-5" /></span>
                <div>
                  <div className="font-semibold text-sm">Chat on WhatsApp</div>
                  <div className="text-xs text-muted-foreground">Replies within minutes</div>
                </div>
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border h-64">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.63%2C12.96%2C77.65%2C12.98&amp;layer=mapnik"
                className="size-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-medium block mb-1.5">{label}</label>
      <input name={name} type={type} required placeholder={placeholder} className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary" />
    </div>
  );
}

function Info({ Icon, title, text }: { Icon: typeof MapPin; title: string; text: string }) {
  return (
    <div className="flex gap-3">
      <span className="size-10 rounded-full gradient-brand grid place-items-center text-white shrink-0">
        <Icon className="size-4" />
      </span>
      <div>
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-sm text-muted-foreground">{text}</div>
      </div>
    </div>
  );
}

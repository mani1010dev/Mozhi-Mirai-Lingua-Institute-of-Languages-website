import { Link } from "@tanstack/react-router";
import { Languages, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="container mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="size-9 rounded-xl gradient-brand grid place-items-center text-white">
              <Languages className="size-5" />
            </span>
            <span>Mozhi Mirai</span>
          </div>
          <p className="mt-4 text-sm text-background/70 leading-relaxed">
            Premium language training and exam preparation since 2010. Building confident global communicators.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="size-9 grid place-items-center rounded-full bg-background/10 hover:bg-background/20 transition">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/about" className="hover:text-background">About</Link></li>
            <li><Link to="/courses" className="hover:text-background">Courses</Link></li>
            <li><Link to="/gallery" className="hover:text-background">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-background">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Popular Courses</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li>IELTS Preparation</li>
            <li>Spoken English</li>
            <li>German A1–B2</li>
            <li>Japanese JLPT</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 shrink-0" /> 24 Linguistics Avenue, Bengaluru 560001</li>
            <li className="flex gap-2"><Phone className="size-4 mt-0.5 shrink-0" /> +91 98765 43210</li>
            <li className="flex gap-2"><Mail className="size-4 mt-0.5 shrink-0" /> hello@mozhimirai.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-5 text-sm text-background/60 flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Mozhi Mirai Lingua Institute of Languages. All rights reserved.</span>
          <span>Crafted with care for learners worldwide.</span>
        </div>
      </div>
    </footer>
  );
}

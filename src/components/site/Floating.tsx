import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Floating() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 size-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-glow hover:scale-110 transition-transform"
      >
        <MessageCircle className="size-6" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </a>
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-24 right-6 z-40 size-11 grid place-items-center rounded-full bg-foreground text-background shadow-soft hover:scale-110 transition-transform"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

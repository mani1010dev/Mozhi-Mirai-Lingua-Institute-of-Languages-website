import { Counter } from "@/components/site/Counter";

const stats = [
  { v: 5000, s: "+", l: "Students Trained" },
  { v: 15, s: "+", l: "Languages Offered" },
  { v: 100, s: "+", l: "Corporate Clients" },
  { v: 95, s: "%", l: "Student Satisfaction" },
];

export function Stats() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl gradient-brand p-10 md:p-14 overflow-hidden shadow-glow">
          <div className="absolute -top-20 -right-20 size-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 size-72 bg-coral/40 rounded-full blur-3xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="text-4xl md:text-6xl font-extrabold font-display">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-2 text-sm md:text-base text-white/80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

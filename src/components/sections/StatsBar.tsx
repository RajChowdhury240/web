"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { label: "Years Experience", value: 7, suffix: "+" },
  { label: "CVEs Published", value: 6, suffix: "+" },
  { label: "CTFs Won", value: 15, suffix: "+" },
  { label: "Certified", value: 0, suffix: "", display: "OSCP+" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-border-subtle bg-bg-surface/50">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-display text-4xl font-bold text-accent-green tabular-nums">
              {stat.display || <AnimatedNumber target={stat.value} suffix={stat.suffix} />}
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

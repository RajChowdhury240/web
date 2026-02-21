import { experiences } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/effects/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Raj Chowdhury",
  description: "Professional experience in offensive security and cloud engineering.",
};

export default function ExperiencePage() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="career"
          title="Experience"
          subtitle="From penetration testing to cloud security architecture"
        />

        <div className="relative pl-8">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-0 w-0.5 bg-gradient-to-b from-accent-green-muted to-border-subtle" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.company} delay={i * 0.1}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 border-accent-green ${
                      exp.current
                        ? "bg-accent-green shadow-glow-green-sm animate-pulse-green"
                        : "bg-bg-base"
                    }`}
                  />

                  <div className="bg-bg-surface border border-border-subtle rounded-lg p-6 hover:border-border-default transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-mono text-xl font-medium text-text-primary">
                          {exp.role}
                        </h3>
                        <p className="text-accent-green-text font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-mono text-accent-green bg-accent-green-muted rounded border border-accent-green/20">
                            Current
                          </span>
                        )}
                        <span className="font-mono text-xs text-text-muted whitespace-nowrap">
                          {exp.startDate} — {exp.endDate || "Present"}
                        </span>
                      </div>
                    </div>

                    <p className="text-text-muted text-sm font-mono mb-3">
                      {exp.location}
                    </p>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="text-text-secondary text-sm flex items-start gap-2"
                        >
                          <span className="text-accent-green mt-1.5 text-xs">&#9654;</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-mono text-accent-cyan-text bg-accent-cyan-muted rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

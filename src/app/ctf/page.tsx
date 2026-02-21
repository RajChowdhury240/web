import { ctfAchievements } from "@/data/ctf";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/effects/AnimatedSection";
import { Trophy, Medal } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CTF Achievements | Raj Chowdhury",
  description: "Capture The Flag competition achievements and awards.",
};

const scopeColors: Record<string, string> = {
  International: "text-accent-green-text bg-accent-green-muted border-accent-green/20",
  National: "text-accent-cyan-text bg-accent-cyan-muted border-accent-cyan/20",
  Regional: "text-severity-medium bg-severity-medium/10 border-severity-medium/20",
  Online: "text-text-muted bg-bg-hover border-border-default",
};

const placementIcon = (placement: string) => {
  if (placement.includes("1st"))
    return <Trophy size={24} className="text-yellow-400" />;
  if (placement.includes("2nd"))
    return <Medal size={24} className="text-gray-300" />;
  if (placement.includes("3rd"))
    return <Medal size={24} className="text-amber-600" />;
  return <Trophy size={24} className="text-text-muted" />;
};

export default function CTFPage() {
  const totalCTFs = ctfAchievements.length;
  const firstPlace = ctfAchievements.filter((c) =>
    c.placement.includes("1st")
  ).length;
  const international = ctfAchievements.filter(
    (c) => c.scope === "International"
  ).length;

  // Group by year
  const grouped = ctfAchievements.reduce(
    (acc, ctf) => {
      const year = ctf.date.split("-")[0];
      if (!acc[year]) acc[year] = [];
      acc[year].push(ctf);
      return acc;
    },
    {} as Record<string, typeof ctfAchievements>
  );

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="ctf"
          title="CTF Achievements"
          subtitle="Competing at the highest levels of cybersecurity"
        />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { label: "Total CTFs", value: totalCTFs },
            { label: "1st Place", value: firstPlace },
            { label: "International", value: international },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-bg-surface border border-border-subtle rounded-lg p-4 text-center"
            >
              <p className="font-display text-2xl font-bold text-accent-green">
                {stat.value}
              </p>
              <p className="font-mono text-xs text-text-muted uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        {years.map((year) => (
          <div key={year} className="mb-10">
            <h3 className="font-mono text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <span className="text-accent-green">#</span> {year}
            </h3>
            <div className="space-y-4">
              {grouped[year].map((ctf, i) => (
                <AnimatedSection key={ctf.name + ctf.date} delay={i * 0.05}>
                  <div className="bg-bg-surface border border-border-subtle rounded-lg p-5 flex gap-4 items-start hover:border-border-default transition-colors">
                    <div className="mt-1">{placementIcon(ctf.placement)}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-mono text-base font-medium text-text-primary">
                          {ctf.name}
                        </h4>
                        <span
                          className={`px-2 py-0.5 text-xs font-mono rounded border ${scopeColors[ctf.scope]}`}
                        >
                          {ctf.scope}
                        </span>
                      </div>
                      <p className="font-mono text-sm font-bold text-accent-green-text mb-1">
                        {ctf.placement}
                      </p>
                      {ctf.description && (
                        <p className="text-text-secondary text-sm leading-relaxed mb-2">
                          {ctf.description}
                        </p>
                      )}
                      <div className="flex items-center gap-3 text-text-muted font-mono text-xs">
                        <span>{ctf.date}</span>
                        {ctf.teamName && <span>Team: {ctf.teamName}</span>}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

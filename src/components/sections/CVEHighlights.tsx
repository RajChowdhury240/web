import { cves } from "@/data/cves";
import AnimatedSection from "@/components/effects/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const severityColors: Record<string, string> = {
  Critical: "text-severity-critical bg-severity-critical/10 border-severity-critical/20",
  High: "text-severity-high bg-severity-high/10 border-severity-high/20",
  Medium: "text-severity-medium bg-severity-medium/10 border-severity-medium/20",
  Low: "text-severity-low bg-severity-low/10 border-severity-low/20",
};

const severityBorder: Record<string, string> = {
  Critical: "border-l-severity-critical",
  High: "border-l-severity-high",
  Medium: "border-l-severity-medium",
  Low: "border-l-severity-low",
};

export default function CVEHighlights() {
  const topCves = cves.slice(0, 3);

  return (
    <section className="py-24 bg-bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="vulnerabilities"
          title="CVE Discoveries"
          subtitle="Real vulnerabilities found in production systems"
        />

        <div className="space-y-4">
          {topCves.map((cve, i) => (
            <AnimatedSection key={cve.id} delay={i * 0.1}>
              <div
                className={`bg-bg-surface border border-border-subtle border-l-[3px] ${severityBorder[cve.severity]} rounded-lg p-5`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono text-sm font-semibold text-accent-cyan-text">
                    {cve.id}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-xs font-mono rounded border ${severityColors[cve.severity]}`}
                  >
                    {cve.severity}
                  </span>
                  <span className="px-2 py-0.5 text-xs font-mono text-text-muted bg-bg-hover rounded">
                    {cve.type}
                  </span>
                  {cve.cvssScore && (
                    <span className="font-mono text-xs text-text-muted">
                      CVSS {cve.cvssScore}
                    </span>
                  )}
                </div>
                <h3 className="font-mono text-base font-medium text-text-primary mb-1">
                  {cve.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                  {cve.summary}
                </p>
                <p className="font-mono text-xs text-text-muted mt-2">
                  {cve.vendor} &bull; {cve.dateDisclosed}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/cves"
            className="font-mono text-sm text-accent-cyan-text hover:text-accent-cyan transition-colors inline-flex items-center gap-1"
          >
            View all CVEs <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

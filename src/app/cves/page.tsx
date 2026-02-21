"use client";

import { useState } from "react";
import { cves } from "@/data/cves";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/effects/AnimatedSection";

const types = ["All", "SSRF", "RCE", "IDOR", "XSS", "Auth Bypass"];

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

const severityOrder: Record<string, number> = {
  Critical: 0,
  High: 1,
  Medium: 2,
  Low: 3,
};

export default function CVEsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = cves
    .filter((cve) => filter === "All" || cve.type === filter)
    .sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="vulnerabilities"
          title="CVE Discoveries"
          subtitle="Security vulnerabilities discovered through responsible disclosure"
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-lg border transition-all ${
                filter === type
                  ? "bg-accent-green-muted text-accent-green-text border-accent-green/20"
                  : "text-text-muted border-border-subtle hover:border-border-default hover:text-text-secondary"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((cve, i) => (
            <AnimatedSection key={cve.id} delay={i * 0.05}>
              <div
                className={`bg-bg-surface border border-border-subtle border-l-[3px] ${severityBorder[cve.severity]} rounded-lg p-6 hover:border-border-default transition-all`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
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
                <h3 className="font-mono text-lg font-medium text-text-primary mb-2">
                  {cve.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  {cve.summary}
                </p>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-text-muted">
                    {cve.vendor}
                  </span>
                  <span className="font-mono text-xs text-text-faint">
                    {cve.dateDisclosed}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

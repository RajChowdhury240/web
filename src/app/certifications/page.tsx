import { certifications } from "@/data/certifications";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/effects/AnimatedSection";
import { Award, Shield, Cloud, Code } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Raj Chowdhury",
  description: "Professional certifications in offensive security and cloud computing.",
};

const iconMap: Record<string, React.ReactNode> = {
  "Offensive Security": <Shield size={32} />,
  Cloud: <Cloud size={32} />,
  Development: <Code size={32} />,
  Other: <Award size={32} />,
};

export default function CertificationsPage() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="certs"
          title="Certifications"
          subtitle="Professional credentials and qualifications"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.name} delay={i * 0.1}>
              <div
                className={`bg-bg-surface border rounded-lg p-6 text-center hover:shadow-md transition-all duration-300 ${
                  cert.featured
                    ? "border-accent-green/40 shadow-glow-green-sm"
                    : "border-border-subtle hover:border-border-default"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    cert.featured
                      ? "text-accent-green bg-accent-green-muted"
                      : "text-text-muted bg-bg-hover"
                  }`}
                >
                  {iconMap[cert.category]}
                </div>
                <h3 className="font-mono text-lg font-medium text-text-primary mb-1">
                  {cert.name}
                </h3>
                <p className="text-text-muted text-sm mb-2">{cert.issuer}</p>
                <p className="font-mono text-xs text-text-faint">
                  {cert.dateEarned}
                </p>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    className="inline-block mt-3 font-mono text-xs text-accent-cyan-text border-b border-dashed border-accent-cyan-text/40 hover:border-accent-cyan hover:text-accent-cyan transition-colors"
                  >
                    Verify
                  </a>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

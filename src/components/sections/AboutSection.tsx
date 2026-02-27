import AnimatedSection from "@/components/effects/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="about"
          title="About Me"
          subtitle="Breaking things to make them stronger"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m a 24-year-old security enthusiast who&apos;s been breaking things
                since my teens. With 7+ years in offensive security, I&apos;ve evolved
                from curious script kiddie to a seasoned penetration tester and
                cloud security architect.
              </p>
              <p>
                Currently serving as a <span className="text-accent-green-text">Senior Cloud IAM Engineer</span> at
                Synchrony Financial, I architect enterprise-scale identity and
                access management solutions while maintaining my offensive edge
                through red teaming and bug bounty hunting.
              </p>
              <p>
                I hold multiple CVEs across SSRF, RCE, IDOR, and XSS
                vulnerability classes, and I&apos;ve competed in CTFs at both
                national and international levels. When I&apos;m not hunting bugs, I&apos;m
                building security tools in Python or automating cloud
                infrastructure with Terraform.
              </p>
              <p>
                My unique blend of offensive security and cloud engineering
                gives me an attacker&apos;s perspective on defense — I build secure
                systems because I know exactly how they break.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-bg-base border border-border-subtle rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-bg-surface border-b border-border-subtle">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-2 font-mono text-xs text-text-muted">
                  profile.json
                </span>
              </div>
              <pre className="p-4 font-mono text-sm leading-7 text-accent-green-text overflow-x-auto">
{`{
  "name": "Chowdhury Faizal Ahammed",
  "age": 24,
  "role": "Sr. Cloud IAM Engineer",
  "company": "Synchrony Financial",
  "experience": "7+ years",
  "focus": [
    "Offensive Security",
    "Cloud IAM Architecture",
    "Red Teaming",
    "Bug Bounty"
  ],
  "certifications": ["AD-RTS", "CRTA", "OSCP+", "CNPen", "CAP"],
  "cves_published": 6,
  "ctfs_won": "25+",
  "languages": ["Python", "Bash", "Golang", "JavaScript"],
  "cloud": "AWS",
  "status": "Always hunting"
}`}
              </pre>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

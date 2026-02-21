import { skillCategories } from "@/data/skills";
import { Shield, Cloud, Code, Terminal } from "lucide-react";
import AnimatedSection from "@/components/effects/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={20} />,
  Cloud: <Cloud size={20} />,
  Code: <Code size={20} />,
  Terminal: <Terminal size={20} />,
};

export default function SkillsSection() {
  return (
    <section className="py-24 bg-bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="skills"
          title="Technical Arsenal"
          subtitle="Tools and expertise forged through years of offensive operations"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.name} delay={i * 0.1}>
              <div className="bg-bg-surface border border-border-subtle rounded-lg p-6 hover:border-border-default hover:shadow-glow-green-sm transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent-green">
                    {iconMap[category.icon]}
                  </span>
                  <h3 className="font-mono text-lg font-medium text-text-primary">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono text-accent-green-text bg-accent-green-muted rounded border border-accent-green/10 hover:border-accent-green/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

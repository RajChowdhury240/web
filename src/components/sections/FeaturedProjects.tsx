import { projects } from "@/data/projects";
import AnimatedSection from "@/components/effects/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="projects"
          title="Featured Projects"
          subtitle="Security tools and frameworks built to break and protect"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.1}>
              <div className="bg-bg-surface border border-border-subtle rounded-lg p-6 hover:border-accent-green hover:shadow-glow-green-sm hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <span className="font-mono text-xs text-accent-cyan-text bg-accent-cyan-muted px-2 py-1 rounded self-start mb-4">
                  {project.category}
                </span>
                <h3 className="font-mono text-xl font-medium text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono text-accent-green-text bg-accent-green-muted rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="text-text-muted hover:text-accent-green transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="font-mono text-sm text-accent-cyan-text hover:text-accent-cyan transition-colors inline-flex items-center gap-1"
          >
            View all projects <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

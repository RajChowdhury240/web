"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/effects/AnimatedSection";
import { Github, ExternalLink } from "lucide-react";

const categories = ["All", "Security Tool", "Cloud Infrastructure", "Research", "Open Source"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="projects"
          title="Projects"
          subtitle="Open source tools and security research"
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-lg border transition-all ${
                filter === cat
                  ? "bg-accent-green-muted text-accent-green-text border-accent-green/20"
                  : "text-text-muted border-border-subtle hover:border-border-default hover:text-text-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.05}>
              <div
                className={`bg-bg-surface border rounded-lg p-6 hover:-translate-y-1 hover:shadow-glow-green-sm transition-all duration-300 h-full flex flex-col ${
                  project.featured
                    ? "border-accent-green/30"
                    : "border-border-subtle hover:border-accent-green"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs text-accent-cyan-text bg-accent-cyan-muted px-2 py-1 rounded">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="font-mono text-xs text-accent-green-text bg-accent-green-muted px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                </div>
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
                <div className="flex gap-4 pt-2 border-t border-border-subtle">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="text-text-muted hover:text-accent-green transition-colors flex items-center gap-1 text-sm font-mono"
                    >
                      <Github size={16} /> Source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="text-text-muted hover:text-accent-cyan transition-colors flex items-center gap-1 text-sm font-mono"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

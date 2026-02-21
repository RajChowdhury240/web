"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/effects/AnimatedSection";
import { Clock, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");

  const allTags = [
    "All",
    ...Array.from(new Set(blogPosts.flatMap((p) => p.tags))),
  ];

  const filtered = blogPosts.filter(
    (post) => activeTag === "All" || post.tags.includes(activeTag)
  );

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="blog"
          title="Blog"
          subtitle="Security research, writeups, and thoughts"
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-lg border transition-all ${
                activeTag === tag
                  ? "bg-accent-green-muted text-accent-green-text border-accent-green/20"
                  : "text-text-muted border-border-subtle hover:border-border-default"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.05}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="bg-bg-surface border border-border-subtle rounded-lg p-6 h-full flex flex-col hover:border-accent-green hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono text-accent-cyan-text bg-accent-cyan-muted rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-mono text-lg font-medium text-text-primary mb-2 line-clamp-2 group-hover:text-accent-green-text transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                    {post.summary}
                  </p>
                  <div className="flex items-center gap-4 text-text-muted font-mono text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readingTime} min read
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

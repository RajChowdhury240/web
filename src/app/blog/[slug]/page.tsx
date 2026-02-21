import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Raj Chowdhury`,
    description: post.summary,
  };
}

function renderMarkdown(content: string) {
  return content
    .split("\n\n")
    .map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="font-mono text-2xl font-bold text-text-primary mt-10 mb-4"
          >
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("### ")) {
        return (
          <h3
            key={i}
            className="font-mono text-xl font-medium text-text-primary mt-8 mb-3"
          >
            {block.replace("### ", "")}
          </h3>
        );
      }
      // Handle inline code
      const parts = block.split(/(`[^`]+`)/g);
      return (
        <p key={i} className="text-text-secondary leading-relaxed mb-4">
          {parts.map((part, j) => {
            if (part.startsWith("`") && part.endsWith("`")) {
              return (
                <code
                  key={j}
                  className="font-mono text-sm text-accent-green-text bg-accent-green-muted px-1.5 py-0.5 rounded"
                >
                  {part.slice(1, -1)}
                </code>
              );
            }
            return <span key={j}>{part}</span>;
          })}
        </p>
      );
    });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) notFound();

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-mono text-xs text-text-muted mb-8">
          <Link href="/" className="hover:text-text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/blog"
            className="hover:text-text-primary transition-colors"
          >
            Blog
          </Link>
          <span>/</span>
          <span className="text-text-faint truncate max-w-[200px]">
            {post.title}
          </span>
        </nav>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-mono text-accent-cyan-text bg-accent-cyan-muted rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-text-muted font-mono text-sm mb-10 pb-6 border-b border-border-subtle">
          <span className="flex items-center gap-1.5">
            <User size={14} />
            Raj Chowdhury
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readingTime} min read
          </span>
        </div>

        {/* Content */}
        <article className="prose-custom">{renderMarkdown(post.content)}</article>

        {/* Back */}
        <div className="mt-12 pt-6 border-t border-border-subtle">
          <Link
            href="/blog"
            className="font-mono text-sm text-accent-cyan-text hover:text-accent-cyan transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={14} />
            Back to all posts
          </Link>
        </div>
      </div>
    </section>
  );
}

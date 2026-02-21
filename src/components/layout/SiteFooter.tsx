import Link from "next/link";
import { Github, Linkedin, Twitter, Terminal } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle bg-bg-base">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="font-mono text-lg font-bold flex items-center gap-2">
              <Terminal size={18} className="text-accent-green" />
              <span className="text-accent-green">raj</span>
              <span className="text-text-muted">@security</span>
            </Link>
            <p className="text-text-muted text-sm mt-3">
              Built with Next.js &bull; Secured by paranoia
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-widest text-text-faint mb-2">
              Navigation
            </p>
            {[
              { href: "/blog", label: "Blog" },
              { href: "/cves", label: "CVEs" },
              { href: "/projects", label: "Projects" },
              { href: "/experience", label: "Experience" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-accent-green-text transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-text-faint mb-4">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-green transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-green transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-subtle">
          <p className="font-mono text-xs text-text-faint text-center">
            &copy; {new Date().getFullYear()} Raj Chowdhury. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

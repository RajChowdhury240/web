"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import ResumeModal from "./ResumeModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/cves", label: "CVEs" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/certifications", label: "Certs" },
  { href: "/ctf", label: "CTFs" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);
      setHidden(current > lastScroll && current > 100);
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 lg:px-10 border-b transition-all duration-300",
          scrolled
            ? "glass border-border-subtle"
            : "bg-transparent border-transparent",
          hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <Link href="/" className="font-mono text-lg font-bold">
          <span className="text-accent-green">raj</span>
          <span className="text-text-muted">@security</span>
          <span className="text-text-faint">:~$</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono text-xs uppercase tracking-widest px-3 py-2 rounded transition-colors",
                pathname === link.href
                  ? "text-accent-green-text bg-accent-green-muted"
                  : "text-text-muted hover:text-text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setResumeOpen(true)}
            className="ml-2 font-mono text-xs uppercase tracking-widest px-4 py-2 border border-border-default rounded-lg text-text-secondary hover:bg-bg-hover hover:text-text-primary transition-colors flex items-center gap-2"
          >
            <Download size={14} />
            Resume
          </button>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-bg-base/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 md:hidden">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono text-2xl uppercase tracking-widest transition-colors",
                pathname === link.href
                  ? "text-accent-green"
                  : "text-text-secondary hover:text-text-primary"
              )}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              setResumeOpen(true);
            }}
            className="font-mono text-2xl uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors flex items-center gap-3"
          >
            <Download size={20} />
            Resume
          </button>
        </div>
      )}

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}

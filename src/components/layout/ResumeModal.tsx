"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Mail, MapPin, Globe } from "lucide-react";

export default function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-bg-base/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 5 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-bg-elevated border border-border-default rounded-xl overflow-hidden flex flex-col mx-4"
            role="dialog"
            aria-modal="true"
            aria-label="Resume"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle">
              <h2 className="font-mono text-xl font-bold text-text-primary">
                Resume
              </h2>
              <button
                ref={closeRef}
                onClick={onClose}
                className="text-text-muted hover:text-text-primary transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Name */}
              <div className="text-center">
                <h3 className="font-display text-3xl font-bold text-text-primary">
                  Raj Chowdhury
                </h3>
                <p className="font-mono text-accent-green-text mt-1">
                  Senior Cloud IAM Engineer & Offensive Security Researcher
                </p>
                <div className="flex items-center justify-center gap-4 mt-3 text-text-muted text-sm">
                  <span className="flex items-center gap-1">
                    <Mail size={14} />
                    raj@example.com
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    USA
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe size={14} />
                    rajchowdhury.com
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="font-mono text-sm uppercase tracking-widest text-accent-green-text mb-3 border-b border-border-subtle pb-2">
                  Summary
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  Offensive security professional with 7+ years of experience in
                  penetration testing, red teaming, and cloud security
                  engineering. Currently serving as Senior Cloud IAM Engineer
                  building secure identity infrastructure at scale. OSCP+
                  certified with multiple published CVEs across SSRF, RCE, IDOR,
                  and XSS vulnerability classes.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h4 className="font-mono text-sm uppercase tracking-widest text-accent-green-text mb-3 border-b border-border-subtle pb-2">
                  Experience
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-mono font-medium text-text-primary">
                          Senior Cloud IAM Engineer
                        </p>
                        <p className="text-accent-cyan-text text-sm">
                          Synchrony Financial (SYF)
                        </p>
                      </div>
                      <span className="font-mono text-xs text-text-muted">
                        Jan 2023 - Present
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-mono font-medium text-text-primary">
                          Security Engineer
                        </p>
                        <p className="text-accent-cyan-text text-sm">
                          CyberDefense Corp
                        </p>
                      </div>
                      <span className="font-mono text-xs text-text-muted">
                        Jun 2021 - Dec 2022
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-mono font-medium text-text-primary">
                          Junior Penetration Tester
                        </p>
                        <p className="text-accent-cyan-text text-sm">
                          SecureNet Labs
                        </p>
                      </div>
                      <span className="font-mono text-xs text-text-muted">
                        Aug 2019 - May 2021
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-mono text-sm uppercase tracking-widest text-accent-green-text mb-3 border-b border-border-subtle pb-2">
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Active Directory Red Teaming",
                    "AWS Cloud Security",
                    "IAM Architecture",
                    "Penetration Testing",
                    "Python",
                    "Bash",
                    "Bug Bounty",
                    "Mobile Pentesting",
                    "Cloud Engineering",
                    "Terraform",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-mono text-accent-green-text bg-accent-green-muted rounded border border-accent-green/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="font-mono text-sm uppercase tracking-widest text-accent-green-text mb-3 border-b border-border-subtle pb-2">
                  Certifications
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "OSCP+ — Offensive Security",
                    "AWS Solutions Architect — AWS",
                    "CompTIA Security+ — CompTIA",
                    "CEH — EC-Council",
                  ].map((cert) => (
                    <p key={cert} className="text-sm text-text-secondary font-mono">
                      {cert}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border-subtle">
              <button
                onClick={onClose}
                className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-border-default rounded-lg text-text-secondary hover:bg-bg-hover transition-colors"
              >
                Close
              </button>
              <a
                href="/resume.pdf"
                download
                className="font-mono text-xs uppercase tracking-widest px-4 py-2 bg-accent-green text-bg-base border border-accent-green rounded-lg hover:bg-accent-green-hover hover:shadow-glow-green-md transition-all flex items-center gap-2"
              >
                <Download size={14} />
                Download PDF
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

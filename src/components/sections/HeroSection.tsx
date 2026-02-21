"use client";

import { motion } from "framer-motion";
import GlitchText from "@/components/effects/GlitchText";
import TypeWriter from "@/components/effects/TypeWriter";
import Button from "@/components/ui/Button";
import { ArrowDown, Download } from "lucide-react";

const roles = [
  "Offensive Security Engineer",
  "Cloud IAM Architect",
  "Red Team Operator",
  "Bug Bounty Hunter",
  "CTF Player",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,hsla(142,100%,50%,0.06)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,hsla(187,100%,50%,0.04)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-mono text-sm text-accent-green mb-6"
        >
          raj@kali:~$ whoami
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight"
        >
          <GlitchText text="RAJ CHOWDHURY" />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-xl md:text-2xl mb-10 h-8"
        >
          <TypeWriter words={roles} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="#projects" variant="primary" size="lg">
            <ArrowDown size={16} />
            View My Work
          </Button>
          <Button href="/resume.pdf" variant="ghost" size="lg">
            <Download size={16} />
            Download CV
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

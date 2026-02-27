import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: "Code",
    skills: [
      "Python",
      "Bash",
      "Golang",
      "JavaScript",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    icon: "Cloud",
    skills: [
      "AWS",
      "Terraform",
      "Cloudformation",
      "Cloud Security Architecture",
    ],
  },
  {
    name: "Red Team & Offense",
    icon: "Shield",
    skills: [
      "Sliver C2",
      "Cobalt Strike",
      "Caldera",
      "Red Teaming",
      "Penetration Testing",
      "Exploit Development",
      "Reverse Engineering",
      "Vulnerability Research",
    ],
  },
  {
    name: "AppSec & Testing",
    icon: "Terminal",
    skills: [
      "AppSec",
      "SAST/DAST",
      "Burp Suite",
      "Metasploit",
      "Nmap",
      "Wireshark",
    ],
  },
  {
    name: "Specializations",
    icon: "Star",
    skills: [
      "Agentic AI Development",
      "CTF Player",
      "Bug Bounty Hunting",
      "Security Tool Development",
    ],
  },
];

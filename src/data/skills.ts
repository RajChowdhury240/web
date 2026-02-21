import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Offensive Security",
    icon: "Shield",
    skills: [
      "Active Directory Red Teaming",
      "Web Application Pentesting",
      "Mobile Pentesting (Android/iOS)",
      "Network Pentesting",
      "Bug Bounty Hunting",
      "Exploit Development",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    icon: "Cloud",
    skills: [
      "AWS Cloud Architecture",
      "Cloud IAM & Identity",
      "Cloud Security Posture",
      "Infrastructure as Code",
      "CI/CD Security",
      "Container Security",
    ],
  },
  {
    name: "Programming",
    icon: "Code",
    skills: [
      "Python",
      "Bash / Shell Scripting",
      "Automation & Tooling",
      "API Development",
      "Security Tool Development",
    ],
  },
  {
    name: "Tools & Platforms",
    icon: "Terminal",
    skills: [
      "Burp Suite",
      "Metasploit",
      "BloodHound",
      "Nmap",
      "Wireshark",
      "Docker",
      "Terraform",
      "Git",
    ],
  },
];

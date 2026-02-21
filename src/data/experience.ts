import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Synchrony Financial (SYF)",
    role: "Senior Cloud IAM Engineer",
    location: "Remote, USA",
    startDate: "Jan 2023",
    description: "Leading cloud IAM architecture and security automation across enterprise AWS environments. Designing and implementing zero-trust access controls, automating IAM policy governance, and conducting internal red team exercises.",
    highlights: [
      "Architected enterprise-wide AWS IAM framework serving 5000+ identities with least-privilege enforcement",
      "Built automated IAM policy analysis pipeline reducing over-privileged roles by 60%",
      "Conducted internal red team engagements identifying critical privilege escalation paths",
      "Designed and deployed AWS SSO integration with custom ABAC policies",
      "Automated cloud security compliance reporting across 50+ AWS accounts",
    ],
    technologies: ["AWS", "IAM", "Terraform", "Python", "CloudFormation", "SSO", "SCP", "GuardDuty"],
    current: true,
  },
  {
    company: "CyberDefense Corp",
    role: "Security Engineer",
    location: "New York, USA",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    description: "Performed offensive security assessments, penetration testing, and vulnerability research for enterprise clients across finance, healthcare, and technology sectors.",
    highlights: [
      "Executed 40+ penetration tests across web apps, mobile apps, APIs, and cloud infrastructure",
      "Discovered multiple CVEs in production applications used by Fortune 500 companies",
      "Built automated vulnerability scanning pipeline reducing assessment time by 45%",
      "Led Active Directory red team engagements achieving domain admin in 90% of assessments",
      "Mentored junior penetration testers and developed internal training programs",
    ],
    technologies: ["Burp Suite", "Metasploit", "Python", "Bash", "Nmap", "BloodHound", "Cobalt Strike", "AWS"],
  },
  {
    company: "SecureNet Labs",
    role: "Junior Penetration Tester",
    location: "Remote",
    startDate: "Aug 2019",
    endDate: "May 2021",
    description: "Conducted web application and network penetration tests, performed mobile application security assessments, and assisted in security research projects.",
    highlights: [
      "Performed 25+ web application penetration tests identifying critical vulnerabilities",
      "Conducted Android and iOS mobile application security assessments",
      "Developed custom Burp Suite extensions for automated vulnerability detection",
      "Contributed to open-source security tools and CTF challenge development",
    ],
    technologies: ["Burp Suite", "OWASP ZAP", "Nmap", "Wireshark", "Python", "Frida", "Objection"],
  },
];

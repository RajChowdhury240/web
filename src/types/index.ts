export interface CVE {
  id: string;
  title: string;
  type: "SSRF" | "RCE" | "IDOR" | "XSS" | "Auth Bypass" | "Other";
  severity: "Critical" | "High" | "Medium" | "Low";
  cvssScore?: number;
  vendor: string;
  dateDisclosed: string;
  summary: string;
  advisoryUrl?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  category: "Security Tool" | "Cloud Infrastructure" | "Web App" | "Research" | "Open Source";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  date: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  current?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  dateEarned: string;
  credentialId?: string;
  verifyUrl?: string;
  category: "Offensive Security" | "Cloud" | "Development" | "Other";
  featured?: boolean;
}

export interface CTFAchievement {
  name: string;
  date: string;
  scope: "International" | "National" | "Regional" | "Online";
  placement: string;
  teamName?: string;
  description?: string;
  url?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readingTime: number;
  content: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

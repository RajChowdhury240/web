import { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    name: "OSCP+",
    issuer: "Offensive Security",
    dateEarned: "2023",
    category: "Offensive Security",
    featured: true,
    verifyUrl: "#",
  },
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    dateEarned: "2022",
    category: "Cloud",
    verifyUrl: "#",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    dateEarned: "2020",
    category: "Other",
    verifyUrl: "#",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    dateEarned: "2019",
    category: "Offensive Security",
    verifyUrl: "#",
  },
];

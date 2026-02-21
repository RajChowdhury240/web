import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Raj Chowdhury | Offensive Security Engineer & Cloud IAM Architect",
  description:
    "Senior Cloud IAM Engineer and offensive security researcher with 7+ years of experience. OSCP+ certified, multiple CVEs, red teaming, bug bounty, and cloud security expertise.",
  openGraph: {
    title: "Raj Chowdhury | Offensive Security Engineer",
    description: "Security researcher, cloud architect, and red teamer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg-base text-text-primary font-sans antialiased">
        <SiteHeader />
        <main className="min-h-screen pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

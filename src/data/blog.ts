import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "ssrf-fortune-500",
    title: "How I Found an SSRF in a Fortune 500 Company",
    date: "2024-03-20",
    summary: "A deep dive into discovering a critical SSRF vulnerability that allowed access to internal AWS metadata and led to a full cloud account compromise.",
    tags: ["SSRF", "Bug Bounty", "AWS", "Cloud Security"],
    readingTime: 8,
    content: `## The Discovery

During a bug bounty engagement, I was testing a webhook configuration feature that allowed users to specify callback URLs. The application would send test requests to verify the endpoint was reachable. This immediately caught my attention as a potential SSRF vector.

## Initial Testing

I started by supplying the AWS metadata endpoint \`http://169.254.169.254/latest/meta-data/\` as the webhook URL. The application made the request server-side and returned the response in the webhook test result. The IMDSv1 endpoint responded with the instance metadata, confirming the SSRF.

## Escalation to Cloud Compromise

With access to the metadata service, I was able to retrieve IAM role credentials attached to the EC2 instance. These temporary credentials had overly permissive policies that allowed:

- Listing all S3 buckets in the account
- Reading objects from sensitive data buckets
- Describing EC2 instances and their security groups
- Accessing AWS Secrets Manager secrets

## Impact

This single SSRF vulnerability led to a complete cloud account compromise. The IAM role had far more permissions than necessary for the webhook functionality, violating the principle of least privilege.

## Remediation

I recommended implementing IMDSv2 (requiring token-based requests), applying strict URL validation with an allowlist approach, and reducing the IAM role permissions to only what was necessary for the webhook feature.`,
  },
  {
    slug: "aws-iam-misconfigurations",
    title: "AWS IAM Misconfigurations That Could Cost You Millions",
    date: "2024-02-10",
    summary: "Common AWS IAM misconfigurations I've seen in production environments and how attackers exploit them for privilege escalation and data exfiltration.",
    tags: ["AWS", "IAM", "Cloud Security", "Best Practices"],
    readingTime: 12,
    content: `## The State of Cloud IAM

After reviewing hundreds of AWS environments as a Cloud IAM Engineer, I've compiled the most dangerous IAM misconfigurations that I encounter repeatedly. These aren't theoretical risks — I've exploited every one of these in authorized penetration tests.

## 1. Wildcard Resource Permissions

The most common and dangerous pattern is using \`"Resource": "*"\` in IAM policies. This grants the specified actions across ALL resources in the account, not just the intended ones. I've seen S3 full access policies meant for a single bucket that inadvertently exposed every bucket in the account.

## 2. Overly Permissive AssumeRole Trust Policies

Role trust policies that allow \`sts:AssumeRole\` from overly broad principals create lateral movement opportunities. A compromised low-privilege role can escalate to high-privilege roles if the trust relationships aren't properly scoped.

## 3. IAM Users with Long-lived Access Keys

Static access keys that never rotate are ticking time bombs. I've found access keys in source code, environment variables, and CI/CD configurations that were over 2 years old and still active.

## 4. Missing Permission Boundaries

Without permission boundaries, any principal that can create IAM roles can create roles with more permissions than they have themselves. This is a well-known privilege escalation path that's trivial to exploit.

## Defensive Recommendations

Implement SCPs at the organization level, use permission boundaries for all delegated administration, rotate credentials automatically, and adopt ABAC where possible to reduce policy complexity.`,
  },
  {
    slug: "ad-red-teaming-guide",
    title: "Active Directory Red Teaming: From Zero to Domain Admin",
    date: "2024-01-05",
    summary: "A comprehensive guide to Active Directory red teaming techniques, from initial foothold to domain dominance, based on real-world engagements.",
    tags: ["Active Directory", "Red Team", "Penetration Testing", "Windows"],
    readingTime: 15,
    content: `## Introduction

Active Directory remains the backbone of enterprise identity management, and it continues to be one of the most fertile attack surfaces in internal engagements. This post covers the techniques I use most frequently in real red team operations.

## Phase 1: Initial Enumeration

Once you have initial access to a domain-joined machine, the first step is passive enumeration. Tools like BloodHound, PowerView, and ADRecon help map the entire AD environment without triggering excessive alerts. Focus on identifying high-value targets, privileged groups, and trust relationships.

## Phase 2: Credential Harvesting

Kerberoasting and AS-REP roasting are my go-to techniques for harvesting crackable credentials. Service accounts often have weak passwords and elevated privileges. I've cracked Kerberos TGS tickets to domain admin service accounts in under 30 minutes.

## Phase 3: Lateral Movement

With valid credentials, lateral movement through the network becomes straightforward. Techniques like Pass-the-Hash, Pass-the-Ticket, and overpass-the-hash allow moving between systems without knowing plaintext passwords. WinRM and PSExec remain reliable execution methods.

## Phase 4: Privilege Escalation

ACL abuse paths identified by BloodHound often provide the most reliable privilege escalation. GenericAll, WriteDACL, and AddMember permissions on privileged groups are commonly misconfigured and allow direct escalation to Domain Admin.

## Phase 5: Persistence & Domain Dominance

Golden Ticket and Silver Ticket attacks provide long-term persistence. DCSync allows extracting all domain credentials without touching the domain controller's disk. These techniques demonstrate the true impact of an AD compromise.

## Key Takeaways

AD security requires a defense-in-depth approach: tiered administration, privileged access workstations, credential guard, and continuous monitoring with tools like Microsoft Defender for Identity.`,
  },
  {
    slug: "oscp-journey",
    title: "My OSCP+ Journey: Tips and Tricks",
    date: "2023-11-15",
    summary: "Lessons learned, study strategies, and exam tips from my OSCP+ certification journey — everything I wish I knew before starting.",
    tags: ["OSCP", "Certification", "Career", "Penetration Testing"],
    readingTime: 10,
    content: `## Why OSCP+

The OSCP has been the gold standard for penetration testing certifications, and the new OSCP+ format raised the bar even further. After years of hands-on offensive security work, I wanted the credential to formalize my skills.

## My Study Approach

I spent 3 months preparing, dedicating 3-4 hours daily. My approach was:

1. Complete all PEN-200 lab machines (including the new AD sets)
2. Practice on HackTheBox and Proving Grounds — at least 50 machines
3. Focus on methodology over tools — understand WHY attacks work
4. Document everything in a personal playbook

## Active Directory Focus

The OSCP+ exam now heavily emphasizes Active Directory. I practiced AD attack chains extensively — from initial foothold through Kerberoasting, lateral movement, and domain escalation. My real-world red teaming experience was invaluable here.

## Exam Day

The exam is a 24-hour practical assessment. My biggest tips:

- Enumerate thoroughly before exploiting — 80% of the work is reconnaissance
- Take breaks — fatigue leads to tunnel vision
- Document as you go — screenshots and notes save time during reporting
- Don't get stuck on one target — move on and come back with fresh eyes

## Results

I passed on my first attempt with a score well above the passing threshold. The new OSCP+ format is more challenging but also more realistic and rewarding. The Active Directory components truly test practical skills.

## Advice for Aspiring OSCPs

Start with the fundamentals. Understand networking, Linux, and Windows before diving into exploitation. Build a methodology you trust, practice it relentlessly, and document everything. The exam tests methodology as much as technical skill.`,
  },
];

 project portfolios
   - Research competitor portfolios in the security/hacker space

2. **Feature Definition**
   - Interactive terminal/CLI interface for navigation
   - AWS architecture diagrams showcase
   - CVE/vulnerability disclosure timeline
   - Skills matrix with proficiency indicators
   - Project showcase with live demos
   - Blog/writeups section for technical content
   - Contact form with encryption indicator
   - Achievement/certification badges
   - GitHub contribution graph integration
   - Dark/light theme toggle (default: dark)

3. **Technical Stack Decisions**
   - Framework: React with Next.js (SEO, performance)
   - Styling: Tailwind CSS + Framer Motion for animations
   - Icons: Lucide React
   - Hosting considerations: Vercel, AWS Am# AGENTS.md - Premium Security/Developer Portfolio Website

## Project Overview
Build a premium, interactive portfolio website tailored for hackers, cloud security engineers (AWS specialists), and developers. The site should feature cutting-edge UI/UX, advanced interactivity, and a sophisticated dark-themed aesthetic that appeals to the cybersecurity and tech community.

---

## Agent Workflow

### Phase 1: Discovery & Planning Agent
**Objective:** Define requirements, features, and technical architecture

**Tasks:**
1. **Audience Research**
   - Identify key personas: penetration testers, cloud security architects, DevSecOps engineers, full-stack developers
   - Define core pain points: showcasing technical skills, CVE discoveries, AWS certifications,plify, or Cloudflare Pages
   - Analytics: Privacy-focused (Plausible or self-hosted)

**Deliverables:**
- Feature specification document
- Wireframe concepts
- Technology stack recommendation
- Sitemap and user flow diagrams

---

### Phase 2: Design Agent
**Objective:** Create visual design system and UI components

**Tasks:**
1. **Design System Creation**
   - **Color Palette:**
     - Primary: Matrix green (#00FF41), Cyber blue (#00D9FF)
     - Background: Deep blacks (#0A0E27, #0F1419)
     - Accents: Electric purple (#B620E0), Alert red (#FF006E)
     - Text: Gray scale from #E0E0E0 to #666
   
   - **Typography:**
     - Headers: JetBrains Mono, Fira Code (monospace for tech feel)
     - Body: Inter, System UI
     - Code blocks: Fira Code with syntax highlighting
   
   - **Spacing & Layout:**
     - 8px grid system
     - Max content width: 1400px
     - Mobile-first responsive breakpoints

2. **Component Design**
   - Hero section with animated glitch text effect
   - Floating navigation with blur backdrop
   - Interactive skill cards with hover effects
   - Project cards with 3D tilt on hover
   - Terminal-style command interface
   - Animated background (matrix rain, particle network, or circuit board)
   - Loading states with skeleton screens
   - Micro-interactions for all CTAs

3. **Animation Strategy**
   - Page transitions with smooth fades
   - Scroll-triggered animations (fade up, slide in)
   - Parallax effects on hero section
   - Typing animations for text reveals
   - Cursor trail effects
   - Button hover states with glow effects

**Deliverables:**
- Design system documentation
- High-fidelity mockups (desktop, tablet, mobile)
- Component library specifications
- Animation timing references

---

### Phase 3: Frontend Development Agent
**Objective:** Build responsive, interactive UI components

**Tasks:**
1. **Core Structure Setup**
   ```
   /components
     /layout (Header, Footer, Navigation)
     /sections (Hero, About, Skills, Projects, Contact)
     /ui (Button, Card, Badge, Terminal, AnimatedText)
     /effects (MatrixRain, ParticleNetwork, CursorTrail)
   /pages
   /styles
   /lib (utilities, animations)
   /public (assets, fonts)
   ```

2. **Key Component Development**
   
   **Hero Section:**
   - Animated typing effect: "Security Researcher | Cloud Architect | Developer"
   - Glitch text effect on name
   - Animated background (matrix rain or particles)
   - CTA buttons with glow effect
   - Scroll indicator animation

   **Interactive Terminal:**
   - Command-line interface for navigation
   - Auto-complete suggestions
   - Command history with arrow keys
   - Easter eggs (e.g., `help`, `whoami`, `skills --list`)
   - Syntax highlighting

   **Skills Section:**
   - Categorized skill cards (Security, Cloud, Development, Tools)
   - Proficiency bars with animated fills
   - Hover effects revealing years of experience
   - Filter/search functionality
   - AWS certification badges with verification links

   **Projects Showcase:**
   - Grid layout with hover previews
   - Filter by: Security Tools, Cloud Infrastructure, Web Apps, Research
   - Live demo links, GitHub repos, case studies
   - Tech stack tags
   - Image carousels for multi-screenshot projects
   - CVE timeline for vulnerability discoveries

   **About/Experience:**
   - Interactive timeline of career milestones
   - Current role and availability status
   - Downloadable resume (PDF)
   - Social links with animated icons

   **Contact Section:**
   - Form with validation
   - PGP key display/download
   - Email encryption notice
   - Alternative contact methods (LinkedIn, Twitter/X, GitHub)
   - Response time indicator

3. **Advanced Features**
   - **Dark/Light Mode Toggle:**
     - Smooth transition between themes
     - Persist preference in localStorage
     - System preference detection

   - **Performance Optimizations:**
     - Lazy loading for images
     - Code splitting for routes
     - Intersection Observer for scroll animations
     - Debounced scroll handlers

   - **Accessibility:**
     - ARIA labels on all interactive elements
     - Keyboard navigation support
     - Focus indicators
     - Screen reader friendly
     - Reduced motion support (prefers-reduced-motion)

   - **SEO:**
     - Meta tags (Open Graph, Twitter Cards)
     - Semantic HTML
     - Structured data (JSON-LD)
     - Sitemap generation
     - robots.txt

**Deliverables:**
- Fully functional React components
- Responsive layouts (mobile, tablet, desktop)
- Interactive features working end-to-end
- Performance-optimized build

---

### Phase 4: Content Integration Agent
**Objective:** Populate with real content and data

**Tasks:**
1. **Content Preparation**
   - Professional bio and summary
   - Skills inventory with proficiency levels
   - Project descriptions with technical details
   - Blog posts or security writeups
   - Certification list with images
   - Contact information and social links

2. **Asset Optimization**
   - Project screenshots (WebP format)
   - AWS architecture diagrams
   - Profile photo/avatar
   - Company logos
   - Certification badges
   - Favicon and app icons

3. **Dynamic Data Integration**
   - GitHub API integration for repositories
   - Contribution graph from GitHub
   - Blog posts from CMS or markdown files
   - Real-time AWS certification verification (if available)

**Deliverables:**
- Content management system or structured data files
- Optimized image assets
- API integrations configured
- Sample blog posts/writeups

---

### Phase 5: Backend/Infrastructure Agent (Optional)
**Objective:** Set up backend services if needed

**Tasks:**
1. **Contact Form Backend**
   - API endpoint for form submission
   - Email service integration (SendGrid, AWS SES)
   - Spam protection (reCAPTCHA, Turnstile)
   - Form data validation

2. **Analytics & Monitoring**
   - Privacy-focused analytics setup
   - Error tracking (Sentry)
   - Performance monitoring
   - Uptime monitoring

3. **CMS Integration (Optional)**
   - Headless CMS for blog (Sanity, Contentful, or markdown-based)
   - Admin interface for content updates
   - Preview functionality

**Deliverables:**
- Backend API endpoints
- Database schema (if needed)
- CMS configuration
- Monitoring dashboards

---

### Phase 6: Testing & Quality Assurance Agent
**Objective:** Ensure quality, performance, and compatibility

**Tasks:**
1. **Functional Testing**
   - All interactive elements working
   - Form validation and submission
   - Navigation across all pages
   - Terminal commands functional
   - Theme toggle working
   - Responsive behavior on all devices

2. **Performance Testing**
   - Lighthouse score > 90 (all categories)
   - Page load time < 2s
   - First Contentful Paint < 1s
   - Cumulative Layout Shift < 0.1
   - Image optimization verified

3. **Cross-Browser Testing**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Mobile)
   - Fallbacks for unsupported features

4. **Accessibility Audit**
   - WCAG 2.1 AA compliance
   - Keyboard navigation testing
   - Screen reader testing
   - Color contrast verification

5. **Security Review**
   - XSS prevention
   - CSRF protection on forms
   - Content Security Policy headers
   - HTTPS enforcement
   - Dependency vulnerability scan

**Deliverables:**
- Test report with findings
- Bug fixes implemented
- Performance optimization report
- Accessibility compliance certificate

---

### Phase 7: Deployment & Launch Agent
**Objective:** Deploy to production and ensure smooth launch

**Tasks:**
1. **Pre-Deployment**
   - Environment variables configured
   - DNS records set up
   - SSL certificate provisioned
   - CDN configuration (if using)
   - Backup strategy defined

2. **Deployment**
   - Build optimization for production
   - Deploy to hosting platform
   - Configure custom domain
   - Set up redirects (www to non-www, etc.)
   - Enable compression (Brotli/Gzip)

3. **Post-Deployment**
   - Smoke testing in production
   - Analytics verification
   - Submit to search engines
   - Set up monitoring alerts
   - Create deployment documentation

4. **Launch Checklist**
   - [ ] All pages accessible
   - [ ] Forms submitting correctly
   - [ ] Analytics tracking
   - [ ] Social media metadata correct
   - [ ] Performance targets met
   - [ ] Mobile experience smooth
   - [ ] Contact methods working
   - [ ] 404 page configured

**Deliverables:**
- Live production website
- Deployment documentation
- Rollback procedure
- Monitoring setup

---

### Phase 8: Maintenance & Iteration Agent
**Objective:** Ongoing improvements and updates

**Tasks:**
1. **Regular Maintenance**
   - Dependency updates (security patches)
   - Content updates (new projects, blog posts)
   - Analytics review and insights
   - Performance monitoring
   - Uptime checks

2. **Iterative Improvements**
   - A/B testing for CTAs
   - User feedback integration
   - New feature additions
   - SEO optimization based on metrics
   - Content refresh

3. **Community Engagement**
   - Share projects on social media
   - Engage with visitors via contact form
   - Guest blog posts
   - Conference talk embeds

**Deliverables:**
- Monthly maintenance reports
- Feature iteration roadmap
- Updated content calendar

---

## Key Features Checklist

### Must-Have Features
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Dark mode (default) with light mode toggle
- [ ] Interactive hero section with animations
- [ ] Skills section with proficiency indicators
- [ ] Project showcase with filtering
- [ ] About/bio section
- [ ] Contact form
- [ ] Social media links
- [ ] Downloadable resume
- [ ] Fast load times (<2s)

### Premium Features
- [ ] Interactive terminal interface
- [ ] Matrix rain or particle network background
- [ ] Glitch text effects
- [ ] 3D card tilt effects
- [ ] Smooth scroll animations
- [ ] Custom cursor trail
- [ ] GitHub API integration
- [ ] CVE timeline (for security researchers)
- [ ] AWS architecture diagram showcase
- [ ] Code snippet syntax highlighting
- [ ] Blog/writeups section
- [ ] Easter eggs in terminal

### Advanced Features
- [ ] Real-time AWS certification verification
- [ ] HackerOne/Bugcrowd profile integration
- [ ] Security tool demos (sandboxed)
- [ ] Interactive cloud architecture diagrams
- [ ] Conference talk embeds
- [ ] Newsletter signup
- [ ] Visitor analytics dashboard
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)

---

## Design Inspirations

### Color Schemes
1. **Matrix Theme:** Black bg, neon green accents
2. **Cyberpunk:** Dark purple/blue with electric pink accents
3. **Terminal:** Black bg, green/cyan monospace text
4. **AWS Theme:** Orange/blue corporate with dark mode

### Animation Styles
- Typing effects (a la hacker terminals)
- Glitch distortions
- Particle connections
- Smooth fade-ins on scroll
- Glow effects on hover
- 3D transforms (cards, buttons)

### Layout References
- Single-page application with smooth scrolling
- Multi-page with animated transitions
- Terminal-first interface with GUI overlay
- Split-screen layouts for comparison

---

## Success Metrics

### Technical KPIs
- Lighthouse Performance Score: >90
- Time to Interactive: <2.5s
- Mobile usability: 100%
- SEO score: >95
- Accessibility: WCAG AA compliant

### Business KPIs
- Contact form submissions
- Resume downloads
- Session duration
- Project click-through rate
- Social media referrals
- GitHub profile visits

---

## Timeline Estimate

| Phase | Duration | Priority |
|-------|----------|----------|
| Discovery & Planning | 1-2 days | Critical |
| Design | 2-3 days | Critical |
| Frontend Development | 5-7 days | Critical |
| Content Integration | 2-3 days | High |
| Backend/Infrastructure | 2-3 days | Medium |
| Testing & QA | 2-3 days | High |
| Deployment | 1 day | Critical |
| **Total** | **15-21 days** | - |

---

## Technical Stack Summary

**Frontend:**
- React 18+ with Next.js 14+
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons

**Backend (Optional):**
- Next.js API routes or serverless functions
- SendGrid/AWS SES for emails
- Markdown/MDX for blog posts

**Deployment:**
- Vercel (recommended) or AWS Amplify
- Cloudflare for DNS/CDN
- GitHub for version control

**Tools:**
- Figma for design
- VS Code for development
- Lighthouse for performance
- axe DevTools for accessibility

---

## Notes for Implementation

1. **Start with design system** - Define colors, typography, spacing before building components
2. **Mobile-first approach** - Design for mobile, scale up to desktop
3. **Performance budget** - Set limits (e.g., max bundle size, load time) and stick to them
4. **Progressive enhancement** - Core functionality works without JS, enhanced with it
5. **Accessibility first** - Build accessible from the start, not as an afterthought
6. **Version control** - Commit frequently with meaningful messages
7. **Documentation** - Comment complex code, maintain README
8. **Security mindset** - Validate inputs, sanitize outputs, use CSP headers

---

## Future Enhancements

- Interactive CTF challenges on site
- Integration with security platforms (HackerOne, Bugcrowd)
- Live terminal for running safe commands
- Collaborative code editor for demos
- WebGL-powered 3D visualizations
- Voice command navigation (experimental)
- AI chatbot for FAQ
- Gamification (achievements, badges for visitors)

---

**End of AGENTS.md**

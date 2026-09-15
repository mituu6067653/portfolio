# Meet Bhandari Portfolio — Architecture

## 1. Goal
Keep the portfolio technically clean and intentionally simple.

Recommended:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel
- GitHub

No database is required for portfolio content.

## 2. Suggested Structure
```text
app/
  page.tsx
  work/
  about/
  contact/
  layout.tsx
  globals.css

components/
  layout/
  navigation/
  hero/
  projects/
  services/
  process/
  about/
  contact/
  footer/
  ui/

data/
  projects.ts
  services.ts
  skills.ts

public/
  images/
  projects/

lib/
  utils.ts
```

## 3. Component System
Reusable components:
- Navbar
- Button
- Section heading
- Project card
- Project detail
- Service card
- Skill list
- Process step
- Contact form
- Footer

Do not create components for every tiny element.

## 4. Content Architecture
Keep project/service/skill information in structured local data.

Project model:
```ts
{
  slug,
  name,
  category,
  description,
  problem,
  solution,
  features,
  technologies,
  liveUrl,
  githubUrl,
  image,
  featured
}
```

`githubUrl` is optional.

## 5. Rendering
Prefer static/server-rendered content.

Use client components only for genuine interaction.

Do not make the entire site `"use client"`.

## 6. Contact Form
If a form is implemented:

Browser
→ client validation
→ server action/API
→ email/form provider
→ success/error

Never expose provider credentials in browser code.

Server-side validation is mandatory.

## 7. SEO
Use Next.js metadata for:
- Title
- Description
- Open Graph
- Project-specific metadata

Use semantic HTML.

## 8. Performance
Use:
- Optimized images
- Next/Image
- Small client-side footprint
- CSS animations for simple motion
- Lazy loading when useful

Avoid heavy libraries unless necessary.

## 9. Animation
Motion should support hierarchy:
- Section reveal
- Small card hover
- Button feedback
- Smooth scrolling

Respect reduced-motion preferences.

Avoid constant motion and animation on everything.

## 10. Security
- No secrets in repository
- No exposed API keys
- Validate contact input
- Protect public contact endpoint from abuse
- Do not expose private client information

## 11. Accessibility
- Semantic HTML
- Keyboard navigation
- Visible focus
- Form labels
- Alt text
- Good contrast
- Reduced motion
- Correct link/button elements

## 12. Deployment
GitHub → Vercel → Production

Before launch:
- Production build
- All routes
- Project URLs
- Contact flow
- Mobile
- Metadata
- Favicon

## 13. Core Principle
**Simple is intentional.**

If a feature does not improve trust, project discovery, communication, accessibility or performance, it probably does not belong in version 1.

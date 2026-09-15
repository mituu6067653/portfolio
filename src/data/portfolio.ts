export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  image: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
  icon: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "serviceflow",
    name: "ServiceFlow",
    category: "Job Management Platform",
    description: "End-to-end service business management software for handling work orders, technician dispatching, and invoicing.",
    problem: "Field service businesses struggle with lost work orders, unorganized scheduling, and slow payment collection cycles.",
    solution: "Built a centralized dashboard for real-time job dispatching, automated status updates, and digital invoice generation.",
    features: [
      "Real-time Job Dispatch & Scheduling",
      "Technician Status & Activity Tracking",
      "Automated Client Notifications",
      "Digital Invoicing & Payment Links"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    liveUrl: "https://service-job-managemnet.vercel.app/login",
    image: "/images/projects/serviceflow.png",
    featured: true
  },
  {
    slug: "propertyflow-crm",
    name: "PropertyFlow CRM",
    category: "Real-Estate CRM & Portal",
    description: "Lead management and property workflow system for real-estate agencies and security administrators.",
    problem: "Real-estate teams miss opportunities due to unorganized buyer leads, scattered property listings, and manual follow-ups.",
    solution: "Created a modern lead-pipeline CRM with property inventory management and automated lead assignment rules.",
    features: [
      "Visual Lead Pipeline & Status Tracking",
      "Property Inventory & Listing Management",
      "Role-based Access & Security Controls",
      "Activity Logging & Contact Records"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Prisma"],
    liveUrl: "https://land-crm-snowy.vercel.app/dashboard",
    image: "/images/projects/propertyflow.png",
    featured: true
  },
  {
    slug: "manufacturing-system",
    name: "Manufacturing Business System",
    category: "Enterprise Operations Demo",
    description: "All-in-one operations system covering sales orders, production tracking, inventory levels, quality control, and dispatch.",
    problem: "Small-to-mid manufacturing facilities operate on disconnected spreadsheets, causing stockouts and production delays.",
    solution: "Designed a unified enterprise workspace linking sales orders directly to material requirements, quality checks, and dispatch documentation.",
    features: [
      "Sales Order to Production Conversion",
      "Live Inventory & Material Stock Tracking",
      "Quality Inspection Checkpoints",
      "Dispatch Documentation & Invoice Ready Views"
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://manufacturing-system-three.vercel.app/",
    image: "/images/projects/manufacturing.png",
    featured: true
  }
];

export const SERVICES: Service[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    description: "High-performance, editorial, responsive websites built to communicate clear positioning and turn visitors into client inquiries.",
    outcomes: [
      "Lightning-fast load speed",
      "Responsive across all devices",
      "Clear positioning & direct copy",
      "SEO optimized metadata"
    ],
    icon: "globe"
  },
  {
    id: "custom-web-apps",
    title: "Custom Web Applications",
    description: "Tailored dashboards, CRMs, and operational workflow software built to streamline core business tasks.",
    outcomes: [
      "Intuitive workflow design",
      "Secure data handling",
      "Role-based access",
      "Scalable database architecture"
    ],
    icon: "app"
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description: "Modernizing outdated applications and web pages with clean typography, responsive layouts, and improved UX.",
    outcomes: [
      "Clean visual structure",
      "Mobile-first design pass",
      "Modern design system",
      "Elimination of visual clutter"
    ],
    icon: "refresh"
  },
  {
    id: "bug-fixes-improvements",
    title: "Bug Fixes & Improvements",
    description: "Resolving complex full-stack issues, optimizing performance bottlenecks, and adding features to existing codebases.",
    outcomes: [
      "Strict root-cause debugging",
      "Code cleanups & refactoring",
      "Performance optimization",
      "Reliable API integrations"
    ],
    icon: "wrench"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand",
    description: "Clarifying business goals, target audience, and core functional requirements before writing any code."
  },
  {
    step: "02",
    title: "Plan",
    description: "Defining data architecture, key user flows, visual system tokens, and precise milestones."
  },
  {
    step: "03",
    title: "Build",
    description: "Developing clean, performant frontend and backend systems with continuous responsive QA."
  },
  {
    step: "04",
    title: "Launch",
    description: "Deploying to production, auditing speed/accessibility, and ensuring effortless operational handoff."
  }
];

export const TECH_STACK = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Next.js API Routes", "REST APIs"],
  database: ["PostgreSQL", "Prisma ORM"],
  workflow: ["Git", "GitHub", "Vercel", "ESLint", "npm"]
};

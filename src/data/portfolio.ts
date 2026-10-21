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
    category: "Field Service Platform",
    description: "A complete management web app built for service businesses to schedule jobs, track field technicians, and handle digital invoicing.",
    problem: "Most service businesses still rely on paper work orders and scattered WhatsApp chats, leading to lost job details, late technician arrivals, and delayed payments.",
    solution: "Created an all-in-one web dashboard where dispatchers assign jobs in seconds, monitor live technician updates, and send digital invoices straight to clients.",
    features: [
      "Real-time Job Dispatch & Calendar Scheduling",
      "Field Technician Status & Live Activity Tracking",
      "Automated Client SMS & Email Updates",
      "One-Click Digital Invoicing & Payment Links"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    liveUrl: "https://service-job-managemnet.vercel.app/login",
    image: "/images/projects/serviceflow.png",
    featured: true
  },
  {
    slug: "propertyflow-crm",
    name: "PropertyFlow CRM",
    category: "Real Estate CRM & Portal",
    description: "A tailored lead management and property pipeline tool for real estate brokers and agency teams.",
    problem: "Real estate agents frequently lose high-intent buyer inquiries because leads sit forgotten in personal inboxes and messy spreadsheets.",
    solution: "Built a clean Kanban pipeline CRM that automatically routes incoming leads to the right agent, logs customer interactions, and connects buyers to matching properties.",
    features: [
      "Visual Lead Pipeline with Drag-and-Drop Stages",
      "Property Inventory Catalog with Quick Filters",
      "Role-Based Access for Agents & Admins",
      "Client Call Logs & Follow-up Reminders"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Prisma"],
    liveUrl: "https://land-crm-snowy.vercel.app/dashboard",
    image: "/images/projects/propertyflow.png",
    featured: true
  },
  {
    slug: "manufacturing-system",
    name: "Manufacturing Business System",
    category: "Operations & Inventory Portal",
    description: "A full shop-floor operations system tracking customer orders, raw material stock, quality checkpoints, and dispatch slips.",
    problem: "Small manufacturing units often face production delays and stock shortages because sales, inventory, and packaging departments don't share real-time data.",
    solution: "Developed an integrated portal that automatically updates material requirements as orders come in, enforces quality inspection checks, and generates ready-to-print dispatch documents.",
    features: [
      "Direct Conversion of Sales Orders to Production Jobs",
      "Live Stock Tracking with Low-Inventory Alerts",
      "Stage-by-Stage Quality Inspection Checklists",
      "Dispatch Packing Slips & Commercial Invoice Views"
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
    description: "Clean, fast-loading websites built to clearly present your services, build credibility, and convert visitors into real inquiries.",
    outcomes: [
      "Fast load times on both mobile and desktop",
      "Fully responsive layout tailored for all screens",
      "Straightforward copy and intuitive layout",
      "Search-engine-ready structure & meta tags"
    ],
    icon: "globe"
  },
  {
    id: "custom-web-apps",
    title: "Custom Web Applications",
    description: "Tailored dashboards, internal tools, and customer portals built around the exact way your business operates.",
    outcomes: [
      "Simple, easy-to-use user interfaces",
      "Protected authentication & role permissions",
      "Reliable database design that scales cleanly",
      "Seamless integration with third-party APIs"
    ],
    icon: "app"
  },
  {
    id: "website-redesign",
    title: "Website Redesign & Upgrades",
    description: "Giving outdated or slow websites a modern look and feel—improving visual polish, readability, and mobile responsiveness.",
    outcomes: [
      "Modern, polished visual identity",
      "Mobile-friendly navigation and typography",
      "Substantially faster page load times",
      "Clean, maintainable frontend codebase"
    ],
    icon: "refresh"
  },
  {
    id: "bug-fixes-improvements",
    title: "Bug Fixes & Technical Improvements",
    description: "Tracking down stubborn bugs, optimizing sluggish queries, and adding new features to your existing web projects.",
    outcomes: [
      "Direct root-cause fixes without hacky workarounds",
      "Frontend & database speed optimizations",
      "Clean code refactoring for easier maintenance",
      "Reliable API and third-party webhook fixes"
    ],
    icon: "wrench"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand & Scope",
    description: "We talk through what you're trying to build, who will use it, and list out the exact features you need."
  },
  {
    step: "02",
    title: "Plan & Structure",
    description: "I map out the user flows, database models, and page layouts before writing the first line of code."
  },
  {
    step: "03",
    title: "Build & Review",
    description: "I develop the frontend and backend iteratively, sharing live preview links so you can test as we go."
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy to production, verify speed and mobile responsiveness, and I make sure you're confident using it."
  }
];

export const TECH_STACK = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Next.js API Routes", "REST APIs"],
  database: ["PostgreSQL", "Prisma ORM"],
  workflow: ["Git", "GitHub", "Vercel", "ESLint", "npm"]
};

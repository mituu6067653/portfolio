"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/portfolio";
import Link from "next/link";

interface ProjectItem {
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  solution: string;
  liveUrl: string;
}

function SpotlightCard({ project }: { project: ProjectItem }) {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: -1000, y: -1000 });
      }}
      className="relative overflow-hidden rounded-2xl border-2 border-[#CBD5E1] bg-white p-6 sm:p-10 flex flex-col lg:flex-row gap-8 items-start justify-between transition-all duration-300 hover:border-[#2563EB] hover:shadow-xl group"
    >
      {/* Spotlight Radial Beam following cursor */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.08), transparent 70%)`,
        }}
      />

      {/* Subtle border highlight following cursor */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.35), transparent 60%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "2px",
        }}
      />

      <div className="space-y-4 lg:w-7/12 relative z-10">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
          {project.name}
        </h3>
        <p className="text-base text-[#334155] leading-relaxed font-normal">
          {project.description}
        </p>

        <div className="pt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-bold text-[#0F172A] bg-[#F1F5F9] border border-[#CBD5E1] rounded-md transition-colors group-hover:bg-[#EFF6FF] group-hover:border-[#BFDBFE]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-4/12 flex flex-col justify-between h-full pt-4 lg:pt-0 lg:border-l lg:border-[#CBD5E1] lg:pl-8 space-y-6 relative z-10">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
            Key Functionality
          </h4>
          <p className="text-sm text-[#0F172A] font-semibold leading-relaxed">
            {project.solution}
          </p>
        </div>

        <div className="flex items-center gap-3 pt-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-all text-center shadow-xs hover:shadow-md active:scale-98"
          >
            Live Demo ↗
          </a>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-[#0F172A] bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#CBD5E1] rounded-lg transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="py-20 sm:py-28 border-y border-[#CBD5E1] bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
              Portfolio Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-1">
              Featured Web Applications
            </h2>
          </div>
          <p className="text-base text-[#334155] font-medium max-w-sm">
            Functional, deployed full-stack software built for real business workflows.
          </p>
        </div>

        <div className="space-y-10">
          {PROJECTS.map((project) => (
            <SpotlightCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

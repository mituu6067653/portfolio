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
      className="relative overflow-hidden rounded-2xl border-2 border-[#CBD5E1] bg-white p-5 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[#2563EB] hover:shadow-xl group"
    >
      {/* Spotlight Radial Beam following cursor */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 hidden sm:block"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.08), transparent 70%)`,
        }}
      />

      {/* Subtle border highlight following cursor */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-2xl transition-opacity duration-300 hidden sm:block"
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

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-stretch">
        {/* Left Column: Project Overview */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4 lg:pr-8 lg:border-r lg:border-[#CBD5E1]">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
              {project.name}
            </h3>
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          <div className="pt-2 sm:pt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold text-[#0F172A] bg-[#F1F5F9] border border-[#CBD5E1] rounded-md transition-colors group-hover:bg-[#EFF6FF] group-hover:border-[#BFDBFE]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Functionality & Actions */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4 pt-4 lg:pt-0 lg:pl-8 border-t lg:border-t-0 border-[#E2E8F0]">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#64748B] bg-[#F8FAFC] border border-[#CBD5E1] px-2.5 py-0.5 rounded-full">
                Capability
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-[#0F172A]">
              Key Functionality
            </h4>
            <p className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="flex items-center gap-3 pt-2 sm:pt-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-all text-center shadow-xs hover:shadow-md active:scale-98"
            >
              Live Demo ↗
            </a>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center justify-center px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#0F172A] bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#CBD5E1] rounded-lg transition-colors"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="py-12 sm:py-20 lg:py-28 border-y border-[#CBD5E1] bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-16 gap-3 sm:gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
              Portfolio Proof
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-1">
              Featured Web Applications
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#334155] font-medium max-w-sm">
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

import { PROJECTS } from "@/data/portfolio";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      <main className="flex-grow py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/#work"
            className="text-sm font-semibold text-[#2563EB] hover:underline inline-flex items-center gap-1"
          >
            ← Back to Featured Work
          </Link>
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 space-y-8 shadow-xs">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-4">
              {project.name}
            </h1>
            <p className="text-lg text-[#475569] mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#E2E8F0]">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
                Problem Addressed
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-2">
                Solution Implemented
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E2E8F0]">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-4">
              Core Capabilities & Features
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#0F172A]">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="text-[#16A34A] font-bold">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-[#E2E8F0]">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-3">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md text-xs font-medium text-[#475569]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors text-center"
            >
              Open Live Application ↗
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:bg-[#F1F5F9] rounded-lg transition-colors text-center"
            >
              Discuss Similar Project
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

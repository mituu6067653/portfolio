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
      <main className="flex-grow py-8 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <Link
            href="/#work"
            className="text-xs sm:text-sm font-semibold text-[#2563EB] hover:underline inline-flex items-center gap-1"
          >
            ← Back to Featured Work
          </Link>
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-8 space-y-6 sm:space-y-8 shadow-xs">
          <div>
            <span className="text-xs font-semibold text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-full">
              {project.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] mt-3 sm:mt-4">
              {project.name}
            </h1>
            <p className="text-sm sm:text-lg text-[#475569] mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#E2E8F0]">
            <div>
              <h2 className="text-sm font-bold text-[#475569] mb-2">
                The Challenge
              </h2>
              <p className="text-sm text-[#334155] leading-relaxed font-normal">
                {project.problem}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#475569] mb-2">
                How I Solved It
              </h2>
              <p className="text-sm text-[#334155] leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E2E8F0]">
            <h2 className="text-sm font-bold text-[#475569] mb-3">
              Key Features
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#0F172A] font-medium">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="text-[#16A34A] font-bold">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-[#E2E8F0]">
            <h2 className="text-sm font-bold text-[#475569] mb-3">
              Technologies &amp; Tools
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

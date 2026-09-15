import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]"></span>
          Available for selected freelance projects
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
          I build modern web applications &amp; custom software for businesses.
        </h1>

        <p className="text-lg sm:text-xl text-[#334155] leading-relaxed max-w-2xl font-medium">
          Full-Stack Web Developer. I build fast business websites, workflow-driven management platforms, and custom CRMs designed for real operational clarity.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Link
            href="#work"
            className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg shadow-md transition-all text-center"
          >
            View Selected Work
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-[#0F172A] bg-white hover:bg-[#F8FAFC] border-2 border-[#CBD5E1] rounded-lg transition-all text-center shadow-xs"
          >
            Start a Conversation →
          </Link>
        </div>

        <div className="pt-8 border-t border-[#CBD5E1] flex flex-wrap gap-y-3 gap-x-8 text-sm font-semibold text-[#334155]">
          <span>📍 Based in India</span>
          <span>🎓 B.Voc. Software Development</span>
          <span>⚡ Next.js / TypeScript / Node.js</span>
        </div>
      </div>
    </section>
  );
}

export default function TechMarquee() {
  const marqueeItems = [
    { label: "Next.js 16 (App Router)", icon: "⚡" },
    { label: "React & TypeScript", icon: "⚛️" },
    { label: "PostgreSQL & Supabase", icon: "🐘" },
    { label: "Node.js REST & Server Actions", icon: "🟢" },
    { label: "Custom Business CRMs", icon: "💼" },
    { label: "Tailwind CSS & Modern UX", icon: "🎨" },
    { label: "Prisma ORM", icon: "📦" },
    { label: "Full-Stack Web Applications", icon: "🚀" },
    { label: "Vercel & Cloud CI/CD", icon: "☁️" },
    { label: "Enterprise RBAC Security", icon: "🛡️" },
    { label: "Real-time Operations Systems", icon: "📊" }
  ];

  // Duplicate items for continuous seamless loop
  const list = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full overflow-hidden border-y border-[#CBD5E1] bg-white py-4 sm:py-5 shadow-xs">
      {/* Left gradient fade mask */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent" />
      {/* Right gradient fade mask */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent" />

      <div className="animate-marquee flex items-center gap-4 sm:gap-6">
        {list.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F8FAFC] border border-[#CBD5E1] text-xs sm:text-sm font-bold text-[#1E293B] whitespace-nowrap shadow-xs hover:border-[#2563EB] hover:text-[#1D4ED8] hover:bg-[#EFF6FF] transition-all cursor-default"
          >
            <span className="text-sm">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

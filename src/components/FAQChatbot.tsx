"use client";

import { useState, useRef, useEffect } from "react";

interface FAQItem {
  id: string;
  category: "services" | "pricing" | "timeline" | "tech" | "hiring";
  question: string;
  answer: string;
}

const FAQ_CATEGORIES = [
  { id: "all", label: "✨ All Topics" },
  { id: "services", label: "🚀 Services" },
  { id: "pricing", label: "💰 Pricing" },
  { id: "timeline", label: "⏱️ Timeline" },
  { id: "tech", label: "🛠️ Tech Stack" },
  { id: "hiring", label: "🤝 Work With Me" },
] as const;

const FAQ_QUESTIONS: FAQItem[] = [
  {
    id: "services-list",
    category: "services",
    question: "What services do you provide?",
    answer: "⚡ I provide 4 core services:\n\n1. Custom Full-Stack Web Apps & CRMs\n2. High-Performance Business Websites\n3. Website Redesign & Modern UI/UX\n4. Bug Fixes, Optimizations & API Integration"
  },
  {
    id: "services-redesign",
    category: "services",
    question: "Can you redesign or upgrade my existing site?",
    answer: "🎨 Yes, absolutely! I take legacy or slow websites and rebuild them using modern Next.js, responsive layouts, high-contrast typography, and smooth UX."
  },
  {
    id: "pricing-cost",
    category: "pricing",
    question: "What are your project costs & rates?",
    answer: "💰 Transparent Milestone Pricing:\n\n• Business Websites: Fixed budget based on number of pages & scope\n• Custom Web Apps / CRMs: Milestone-based payments tied to deliverables\n• Bug Fixes & Small Tasks: Quick fixed-fee quotes\n\nNo hidden costs. You only pay as milestones are completed!"
  },
  {
    id: "pricing-payment",
    category: "pricing",
    question: "How do milestone payments work?",
    answer: "🔒 Safe & Transparent:\n\n1. Initial deposit (25-30%) to start architecture & design\n2. Progress milestones for frontend & backend completion\n3. Final balance upon your testing & live deployment."
  },
  {
    id: "timeline-duration",
    category: "timeline",
    question: "How long does a project take?",
    answer: "⏱️ Typical Delivery Times:\n\n• Landing Pages & Business Sites: 5–10 business days\n• Full-Stack Web Apps & CRMs: 2–4 weeks\n• Urgent Bug Fixes & Edits: 24–48 hours"
  },
  {
    id: "timeline-urgent",
    category: "timeline",
    question: "Can you handle urgent or fast-turnaround jobs?",
    answer: "⚡ Yes! If you have an urgent deadline or a broken production issue, let me know in the inquiry form and I can prioritize rapid turnaround."
  },
  {
    id: "tech-frameworks",
    category: "tech",
    question: "What tech stack do you build with?",
    answer: "🛠️ Modern & Scalable Production Stack:\n\n• Frontend: Next.js (App Router), React, TypeScript, Tailwind CSS\n• Backend: Node.js, Next API Routes, Server Actions\n• Databases: PostgreSQL, Prisma ORM, Supabase\n• Deployments: Vercel, Cloudflare, GitHub CI/CD"
  },
  {
    id: "tech-custom",
    category: "tech",
    question: "Can you build custom business workflows?",
    answer: "⚙️ 100%! I specialize in custom dashboards, role-based access, inventory tracking, dispatch systems, and internal SaaS tools tailored to your exact business logic."
  },
  {
    id: "hiring-available",
    category: "hiring",
    question: "Are you available for work right now?",
    answer: "🟢 Yes! I am currently accepting new freelance contracts, client builds, and consulting projects."
  },
  {
    id: "hiring-start",
    category: "hiring",
    question: "How do we get started on my project?",
    answer: "🚀 It's super simple:\n\n1. Fill out the contact form below or email me directly.\n2. We discuss your requirements & timelines.\n3. I give you a clear proposal, milestones, and start building immediately!"
  }
];

export default function FAQChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [messages, setMessages] = useState<Array<{ sender: "bot" | "user"; text: string }>>([
    {
      sender: "bot",
      text: "👋 Welcome! I'm Meet's interactive assistant.\n\nChoose any topic or question below to get instant answers in chunks — no typing needed!"
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSelectQuestion = (item: FAQItem) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: item.question },
      { sender: "bot", text: item.answer }
    ]);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: "bot",
        text: "👋 Chat reset. Select any topic below to explore answers:"
      }
    ]);
  };

  const filteredQuestions = activeCategory === "all"
    ? FAQ_QUESTIONS
    : FAQ_QUESTIONS.filter((q) => q.category === activeCategory);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Interactive Modal */}
      {isOpen && (
        <div className="mb-4 w-[92vw] sm:w-[420px] bg-[#0B0F17] border-2 border-[#1E293B] rounded-2xl shadow-2xl flex flex-col h-[560px] overflow-hidden text-[#F8FAFC] animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-[#111827] text-white p-4 flex items-center justify-between border-b border-[#1E293B]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/20 border border-[#3B82F6]/40 flex items-center justify-center font-mono font-bold text-xs text-[#60A5FA]">
                &lt;/&gt;
              </div>
              <div>
                <h3 className="font-mono font-bold text-xs text-[#F8FAFC]">Instant FAQ Assistant</h3>
                <p className="text-[10px] font-mono text-[#22C55E] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse"></span> ONLINE &bull; READY
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                title="Reset conversation"
                className="text-[10px] font-mono text-[#94A3B8] hover:text-[#60A5FA] px-2 py-1 bg-[#1E293B] rounded hover:bg-[#334155] transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#94A3B8] hover:text-white p-1 rounded-lg text-sm font-mono font-bold"
                aria-label="Close Chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0B0F17] font-mono text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-xl leading-relaxed whitespace-pre-line shadow-xs ${
                    msg.sender === "user"
                      ? "bg-[#2563EB] text-white font-semibold rounded-br-none"
                      : "bg-[#111827] text-[#E2E8F0] border border-[#1E293B] rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Category Tabs (Tukdo me organize kiya) */}
          <div className="px-3 py-2 bg-[#0F172A] border-t border-[#1E293B]">
            <p className="text-[10px] font-mono uppercase text-[#64748B] font-bold mb-1.5">
              Select Topic:
            </p>
            <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap px-2.5 py-1 text-[11px] font-mono font-bold rounded-md transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#2563EB] text-white shadow-sm"
                      : "bg-[#1E293B] text-[#94A3B8] hover:text-white hover:bg-[#334155]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Built-in Clickable Questions List (No manual typing!) */}
          <div className="p-3 bg-[#111827] border-t border-[#1E293B] max-h-48 overflow-y-auto space-y-1.5">
            <p className="text-[10px] font-mono uppercase text-[#64748B] font-bold mb-1">
              Tap a Question to View Answer:
            </p>
            <div className="flex flex-col gap-1.5">
              {filteredQuestions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectQuestion(item)}
                  className="w-full text-left px-3 py-2 text-[11px] font-mono text-[#93C5FD] bg-[#0B0F17] hover:bg-[#1E293B] border border-[#1E293B] hover:border-[#3B82F6]/50 rounded-lg transition-all flex items-center justify-between group"
                >
                  <span className="line-clamp-1">{item.question}</span>
                  <span className="text-[#60A5FA] group-hover:translate-x-0.5 transition-transform text-xs font-bold ml-2">
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick CTA to jump directly to Contact Form */}
          <div className="px-3 py-2 bg-[#0B0F17] border-t border-[#1E293B] flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#64748B]">Have a specific project?</span>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-[11px] font-mono font-bold text-[#60A5FA] hover:text-[#93C5FD] hover:underline flex items-center gap-1"
            >
              Fill Contact Form ↓
            </a>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-[#0F172A] hover:bg-[#1E293B] text-white border-2 border-[#3B82F6]/60 rounded-full shadow-2xl transition-all font-mono font-bold text-xs hover:scale-105 active:scale-95"
      >
        <span className="text-base text-[#60A5FA]">&lt;/&gt;</span>
        <span>{isOpen ? "Close Assistant" : "Quick FAQ & Answers"}</span>
      </button>
    </div>
  );
}

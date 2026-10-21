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
      text: "👋 Hi! I'm Meet's interactive portfolio assistant.\n\nChoose any topic or question below to get instant answers without typing!"
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
    <>
      {/* Mobile backdrop overlay to tap outside and dismiss */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 sm:hidden animate-in fade-in duration-200"
        />
      )}

      {/* Interactive Modal */}
      {isOpen && (
        <div className="fixed inset-x-3 bottom-3 top-auto sm:inset-x-auto sm:bottom-20 sm:right-6 sm:left-auto w-auto sm:w-[420px] max-h-[88dvh] sm:max-h-[580px] h-[520px] sm:h-[580px] bg-[#0B0F17]/95 backdrop-blur-xl border border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-100 z-50 transition-all duration-300">
          
          {/* Subtle Top Gradient Accent */}
          <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 shrink-0" />

          {/* Header */}
          <div className="bg-[#0F172A] px-3.5 sm:px-4 py-3 sm:py-3.5 flex items-center justify-between border-b border-slate-800/80 shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0F172A]" />
              </div>
              <div>
                <h3 className="font-semibold text-xs sm:text-sm text-white tracking-tight">Instant FAQ Assistant</h3>
                <p className="text-[10px] sm:text-[11px] text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online &bull; Instant Answers
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-1.5">
              <button
                onClick={handleReset}
                title="Reset conversation"
                className="text-[11px] sm:text-xs text-slate-400 hover:text-white px-2 sm:px-2.5 py-1 sm:py-1.5 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 rounded-lg transition-colors flex items-center gap-1 font-medium"
              >
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Reset</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 sm:p-1.5 hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close Assistant"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Container with custom sleek scrollbar */}
          <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3 bg-[#0B0F17] custom-scrollbar text-xs sm:text-sm min-h-0">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} items-start gap-2 sm:gap-2.5`}
              >
                {msg.sender === "bot" && (
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 text-[11px] sm:text-xs mt-0.5">
                    🤖
                  </div>
                )}
                <div
                  className={`max-w-[85%] p-3 sm:p-3.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed whitespace-pre-line shadow-sm ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-tr-xs"
                      : "bg-[#161F30] text-slate-200 border border-slate-800 rounded-tl-xs"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Category Tabs (No horizontal scrollbar arrows, smooth scrolling) */}
          <div className="px-3 sm:px-3.5 py-2 sm:py-2.5 bg-[#0E1524] border-t border-slate-800/80 shrink-0">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1 sm:mb-1.5">
              Select Topic:
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium rounded-full transition-all shrink-0 ${
                    activeCategory === cat.id
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                      : "bg-[#162033] text-slate-300 hover:text-white hover:bg-slate-700/60 border border-slate-700/40"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Clickable Questions List with sleek chevron icons and custom scrollbar */}
          <div className="p-2.5 sm:p-3 bg-[#0B0F17] border-t border-slate-800/80 max-h-36 sm:max-h-48 overflow-y-auto space-y-1 sm:space-y-1.5 custom-scrollbar shrink-0">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1 px-1">
              Tap a Question to View Answer:
            </div>
            <div className="flex flex-col gap-1 sm:gap-1.5">
              {filteredQuestions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectQuestion(item)}
                  className="w-full text-left px-2.5 sm:px-3 py-2 sm:py-2.5 text-xs text-slate-200 bg-[#121927] hover:bg-[#1A2438] border border-slate-800/90 hover:border-blue-500/50 rounded-xl transition-all duration-150 flex items-center justify-between gap-2.5 group shadow-xs"
                >
                  <span className="line-clamp-2 leading-snug">{item.question}</span>
                  <div className="w-5 h-5 rounded-md bg-slate-800 group-hover:bg-blue-600 text-slate-400 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick CTA to jump directly to Contact Form */}
          <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#0E1524] border-t border-slate-800/80 flex items-center justify-between text-xs shrink-0">
            <span className="text-[11px] sm:text-xs text-slate-400">Have a custom project?</span>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group transition-colors text-xs"
            >
              <span>Contact Form</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-3.5 py-2.5 sm:px-5 sm:py-3 bg-[#0F172A] hover:bg-[#162033] text-white border border-slate-700/80 hover:border-blue-500/60 rounded-full shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 group ${
            isOpen ? "hidden sm:flex" : "flex"
          }`}
          aria-label="Toggle FAQ Assistant"
        >
          <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            {isOpen ? "Close Assistant" : "Quick FAQ"}
          </span>
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600/20 group-hover:bg-blue-600 text-blue-400 group-hover:text-white flex items-center justify-center transition-colors">
            {isOpen ? (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            )}
          </div>
        </button>
      </div>
    </>
  );
}

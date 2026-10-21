"use client";

import { useState, useRef, useEffect } from "react";

interface FAQItem {
  id: string;
  category: "services" | "pricing" | "timeline" | "tech" | "hiring";
  question: string;
  answer: string;
}

const FAQ_CATEGORIES = [
  { id: "all", label: "All Topics" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "timeline", label: "Timeline" },
  { id: "tech", label: "Tech Stack" },
  { id: "hiring", label: "Hiring & Availability" },
] as const;

const FAQ_QUESTIONS: FAQItem[] = [
  {
    id: "services-list",
    category: "services",
    question: "What services do you provide?",
    answer: "I specialize in two main areas:\n\n1. Custom web applications & internal tools (like CRMs, booking portals, and dispatch systems).\n2. Fast, clean business websites for companies that want a strong online presence.\n\nI also take on redesigns of outdated web apps and urgent bug fixes for existing React/Next.js codebases."
  },
  {
    id: "services-redesign",
    category: "services",
    question: "Can you redesign or upgrade my existing site?",
    answer: "Yes. If your current site is sluggish, hard to navigate on mobile, or looks dated, I can rebuild it with clean Next.js and Tailwind CSS while keeping your existing brand assets and content intact."
  },
  {
    id: "pricing-cost",
    category: "pricing",
    question: "What are your project costs & rates?",
    answer: "I quote based on clear scope rather than vague hourly estimates:\n\n• Business Websites: Fixed price based on number of pages and design requirements.\n• Custom Web Apps / Dashboards: Broken down into milestone payments tied to specific deliverables.\n• Bug Fixes & Small Tweaks: Flat fee with guaranteed delivery.\n\nDrop a quick note in the contact form with what you need, and I'll send over an honest estimate."
  },
  {
    id: "pricing-payment",
    category: "pricing",
    question: "How do milestone payments work?",
    answer: "For larger projects, payments are split into clear milestones:\n\n1. A 25–30% initial deposit to begin wireframing and architecture.\n2. Progress payments as frontend and backend features are delivered for your review.\n3. The final balance once everything is tested and deployed live."
  },
  {
    id: "timeline-duration",
    category: "timeline",
    question: "How long does a project take?",
    answer: "It depends on the project scope:\n\n• Standard business website: Usually 1 to 2 weeks.\n• Custom web app or CRM: Typically 3 to 5 weeks depending on feature complexity.\n• Small bug fixes or updates: Usually completed within 24 to 48 hours."
  },
  {
    id: "timeline-urgent",
    category: "timeline",
    question: "Can you handle urgent or fast-turnaround jobs?",
    answer: "Yes. If you have an urgent deadline or a production bug that needs immediate fixing, mention that in your message and I can prioritize it."
  },
  {
    id: "tech-frameworks",
    category: "tech",
    question: "What tech stack do you build with?",
    answer: "My go-to production stack:\n\n• Frontend: Next.js (App Router), React, TypeScript, and Tailwind CSS.\n• Backend: Node.js, Next API routes, and Server Actions.\n• Database: PostgreSQL with Prisma ORM.\n• Hosting: Vercel for fast global edge deployment."
  },
  {
    id: "tech-custom",
    category: "tech",
    question: "Can you build custom business workflows?",
    answer: "Yes, that's actually my main focus. I've built field technician dispatchers, real estate lead pipelines, and factory inventory portals. Whatever custom logic your business runs on, we can map it into an intuitive web interface."
  },
  {
    id: "hiring-available",
    category: "hiring",
    question: "Are you available for work right now?",
    answer: "Yes, I'm currently open for new freelance contracts and client projects. Feel free to reach out via the contact form or email me directly at meetbhandaridev@gmail.com."
  },
  {
    id: "hiring-start",
    category: "hiring",
    question: "How do we get started on my project?",
    answer: "The process is simple:\n\n1. Send me a quick overview through the contact form or email.\n2. We'll clarify the exact features, timelines, and budget.\n3. Once we agree on milestones, I start building and share live staging links as we progress."
  }
];

export default function FAQChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [messages, setMessages] = useState<Array<{ sender: "bot" | "user"; text: string }>>([
    {
      sender: "bot",
      text: "Hi! I put together quick answers to common questions about my pricing, timelines, tech stack, and availability.\n\nTap any question below to read more:"
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
                <h3 className="font-semibold text-xs sm:text-sm text-white tracking-tight">Meet&apos;s Quick FAQ</h3>
                <p className="text-[10px] sm:text-[11px] text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Frequently Asked Questions
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
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold shrink-0 text-[10px] sm:text-xs mt-0.5">
                    MB
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
          className={`flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 bg-white/95 hover:bg-white text-slate-700 hover:text-slate-900 border border-[#CBD5E1] hover:border-[#94A3B8] rounded-full shadow-md transition-all duration-200 hover:shadow-lg active:scale-95 group font-sans ${
            isOpen ? "hidden sm:flex" : "flex"
          }`}
          aria-label={isOpen ? "Close FAQ Assistant" : "Open Quick FAQ Assistant"}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-xs font-semibold tracking-normal text-slate-700 group-hover:text-slate-900">
            {isOpen ? "Close FAQ" : "Quick FAQ"}
          </span>
          <div className="w-5 h-5 rounded-full bg-slate-100 group-hover:bg-blue-50 text-slate-500 group-hover:text-blue-600 flex items-center justify-center transition-colors">
            {isOpen ? (
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            )}
          </div>
        </button>
      </div>
    </>
  );
}

"use client";

import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
}

const FAQ_DATABASE: FAQItem[] = [
  {
    id: "services",
    question: "What services do you provide?",
    answer: "⚡ I offer 4 main services:\n1. Custom Web Apps & CRMs\n2. Responsive Business Websites\n3. Website Redesign & Modernization\n4. Bug Fixes & Tech Support",
    keywords: ["service", "provide", "do", "offer", "build", "work", "make"]
  },
  {
    id: "timeline",
    question: "How long does a project take?",
    answer: "⏱️ Typical Timelines:\n- Business Websites: 1–2 weeks\n- Custom Dashboards/CRMs: 2–4 weeks\n- Bug Fixes: 24–48 hours",
    keywords: ["time", "timeline", "duration", "long", "days", "weeks", "fast", "speed"]
  },
  {
    id: "pricing",
    question: "What are your project costs?",
    answer: "💰 Transparent Milestone Pricing:\nPricing is fixed per scope based on functional requirements. Send an inquiry via the form for an exact quote!",
    keywords: ["price", "cost", "budget", "pricing", "charge", "rate", "quote", "money"]
  },
  {
    id: "tech-stack",
    question: "What tech stack do you use?",
    answer: "🛠️ Developer Stack:\n- Frontend: Next.js, React, TypeScript, Tailwind CSS\n- Backend: Node.js, Next API Routes\n- Database: PostgreSQL, Prisma ORM\n- Hosting: Vercel",
    keywords: ["stack", "technology", "tech", "react", "next", "node", "database", "postgres", "tailwind"]
  },
  {
    id: "hiring",
    question: "Are you available for work?",
    answer: "🟢 Yes! I am currently available for selected freelance projects, contract builds, and web app development.",
    keywords: ["available", "hire", "freelance", "contract", "open", "job", "work with me"]
  },
  {
    id: "projects",
    question: "Can I see live demo projects?",
    answer: "🚀 Deployed Work:\n1. ServiceFlow (Job Dispatch)\n2. PropertyFlow CRM (Real-Estate)\n3. Manufacturing Operations System\nCheck the Portfolio section above for live links!",
    keywords: ["project", "portfolio", "demo", "live", "link", "show", "example", "previous"]
  }
];

export default function FAQChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Array<{ sender: "bot" | "user"; text: string }>>([
    {
      sender: "bot",
      text: "🤖 <dev_bot /> initialized. Ask any custom question about Meet's stack, pricing, timeline, or services!"
    }
  ]);

  const analyzeAndAnswer = (query: string) => {
    const lowerQuery = query.toLowerCase().trim();
    if (!lowerQuery) return;

    // Search for keyword matches in FAQ database
    let bestMatch: FAQItem | null = null;
    let maxMatchCount = 0;

    FAQ_DATABASE.forEach((item) => {
      const matchCount = item.keywords.filter((keyword) => lowerQuery.includes(keyword)).length;
      if (matchCount > maxMatchCount) {
        maxMatchCount = matchCount;
        bestMatch = item;
      }
    });

    let botResponse = "";

    if (bestMatch && maxMatchCount > 0) {
      botResponse = (bestMatch as FAQItem).answer;
    } else {
      botResponse = `🔍 I analyzed "${query}". For specific custom requirements, feel free to submit the contact form above or reach out directly to Meet Bhandari!`;
    }

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: query },
      { sender: "bot", text: botResponse }
    ]);

    setInputText("");
  };

  const handleSubmitCustomQuery = (e: React.FormEvent) => {
    e.preventDefault();
    analyzeAndAnswer(inputText);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Modal */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-[#0B0F17] border-2 border-[#1E293B] rounded-2xl shadow-2xl flex flex-col h-[520px] overflow-hidden text-[#F8FAFC]">
          {/* Header */}
          <div className="bg-[#111827] text-white p-4 flex items-center justify-between border-b border-[#1E293B]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/20 border border-[#3B82F6]/40 flex items-center justify-center font-mono font-bold text-xs text-[#60A5FA]">
                &lt;/&gt;
              </div>
              <div>
                <h3 className="font-mono font-bold text-xs text-[#F8FAFC]">dev_assistant_v1.0</h3>
                <p className="text-[10px] font-mono text-[#22C55E] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse"></span> ONLINE &bull; ANALYZING
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#64748B] hover:text-white p-1 rounded-lg text-sm font-mono font-bold"
              aria-label="Close Chat"
            >
              [X]
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0B0F17] font-mono">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] p-3 rounded-xl text-xs leading-relaxed whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-[#3B82F6] text-white font-bold rounded-br-none"
                      : "bg-[#111827] text-[#CBD5E1] border border-[#1E293B] rounded-bl-none shadow-xs"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Preset Buttons */}
          <div className="px-3 py-2 bg-[#111827] border-t border-[#1E293B] flex gap-1.5 overflow-x-auto no-scrollbar">
            {FAQ_DATABASE.slice(0, 4).map((faq) => (
              <button
                key={faq.id}
                onClick={() => analyzeAndAnswer(faq.question)}
                className="whitespace-nowrap px-2.5 py-1 text-[10px] font-mono text-[#60A5FA] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-md hover:bg-[#3B82F6]/20 transition-colors"
              >
                &gt; {faq.id}
              </button>
            ))}
          </div>

          {/* Custom Query Input */}
          <form onSubmit={handleSubmitCustomQuery} className="p-3 bg-[#111827] border-t border-[#1E293B] flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask custom question (e.g. costs, stack)..."
              className="flex-1 px-3 py-2 bg-[#0B0F17] border border-[#1E293B] rounded-lg text-xs font-mono text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#3B82F6]"
            />
            <button
              type="submit"
              className="px-3.5 py-2 text-xs font-mono font-bold text-[#0B0F17] bg-[#3B82F6] hover:bg-[#60A5FA] rounded-lg transition-colors"
            >
              SEND &gt;
            </button>
          </form>
        </div>
      )}

      {/* Developer Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-[#0F172A] hover:bg-[#1E293B] text-white border-2 border-[#3B82F6]/60 rounded-full shadow-2xl transition-all font-mono font-bold text-xs"
      >
        <span className="text-base text-[#60A5FA]">&lt;/&gt;</span>
        <span>{isOpen ? "Close Terminal" : "Dev Assistant Chat"}</span>
      </button>
    </div>
  );
}

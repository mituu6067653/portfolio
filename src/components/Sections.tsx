import { SERVICES, PROCESS_STEPS, TECH_STACK } from "@/data/portfolio";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "business-websites": (
    <svg className="w-6 h-6 text-[#1D4ED8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  "custom-web-apps": (
    <svg className="w-6 h-6 text-[#1D4ED8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  "website-redesign": (
    <svg className="w-6 h-6 text-[#1D4ED8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  "bug-fixes-improvements": (
    <svg className="w-6 h-6 text-[#1D4ED8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-20 lg:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mb-8 sm:mb-14">
        <span className="text-xs font-semibold text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-full inline-block mb-2">
          Services
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-1">
          Services &amp; How I Can Help
        </h2>
        <p className="mt-2 text-base sm:text-lg text-[#334155] font-medium leading-relaxed">
          From fast business websites to custom web tools built to fix daily operational headaches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="high-contrast-card rounded-xl p-5 sm:p-8 bg-white flex flex-col justify-between"
          >
            <div className="flex-grow flex flex-col">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center mb-4 sm:mb-6 shrink-0">
                {SERVICE_ICONS[service.id] || (
                  <span className="text-[#1D4ED8] font-bold text-lg">⚡</span>
                )}
              </div>
              <div className="min-h-[6.5rem] sm:min-h-[8.5rem] flex flex-col justify-start">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-[#CBD5E1]">
              <h4 className="text-xs font-bold text-[#64748B] mb-2 sm:mb-3">
                What You Get
              </h4>
              <ul className="space-y-2 text-sm sm:text-base font-semibold text-[#0F172A]">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#1D4ED8] shrink-0"></span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="py-12 sm:py-20 lg:py-28 bg-[#F8FAFC] border-y border-[#CBD5E1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-14">
          <span className="text-xs font-semibold text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-full inline-block mb-2">
            My Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-1">
            How We Work Together
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#334155] font-medium leading-relaxed">
            A clear, predictable roadmap from our initial chat all the way to production launch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="p-5 sm:p-7 bg-white border-2 border-[#CBD5E1] rounded-xl relative shadow-xs">
              <span className="text-xs font-bold text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-2.5 py-1 rounded-md inline-block mb-3 sm:mb-4">
                Step {step.step}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-1.5 sm:mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutAndTech() {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* About Info */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6">
          <div>
            <span className="text-xs font-semibold text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-full inline-block mb-2">
              About Me
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-1">
              A Bit About Who I Am
            </h2>
          </div>
          
          <p className="text-sm sm:text-lg text-[#334155] leading-relaxed font-normal">
            I&apos;m a full-stack developer based in India, currently in my 5th semester of B.Voc. in Software Development. I love turning manual, messy business tasks into snappy, reliable web applications.
          </p>
          <p className="text-sm sm:text-lg text-[#334155] leading-relaxed font-normal">
            Over the past couple of years, I&apos;ve built field job dispatchers, real estate CRMs, and manufacturing tracking systems. My focus is always on writing clean code and building user interfaces that team members can pick up on day one without needing a manual.
          </p>
          
          {/* Aligned Callout Box */}
          <div className="p-5 sm:p-6 bg-[#EFF6FF] border border-[#BFDBFE] border-l-4 border-l-[#1D4ED8] rounded-r-xl rounded-l-xs space-y-1.5 sm:space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-[#0F172A]">My Approach</h3>
            <p className="text-xs sm:text-sm text-[#1E3A8A] font-semibold leading-relaxed">
              &ldquo;The best code is simple and readable. I don&apos;t build overly complex architectures when a straightforward, fast solution gets the job done better.&rdquo;
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="lg:col-span-6 high-contrast-card rounded-xl p-6 sm:p-8 bg-white space-y-6 sm:space-y-7">
          <div className="border-b border-[#CBD5E1] pb-3 sm:pb-4 flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
              Skills &amp; Technologies
            </h3>
            <span className="text-xs font-semibold text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-2.5 py-0.5 rounded-full">
              Tools I Use Daily
            </span>
          </div>
          
          <div className="space-y-5 sm:space-y-6 text-sm">
            <div>
              <h4 className="text-xs font-bold text-[#64748B] mb-2.5">
                Frontend Development
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {TECH_STACK.frontend.map((t) => (
                  <span key={t} className="inline-flex items-center whitespace-nowrap px-3 py-1.5 bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#CBD5E1] rounded-md text-xs font-semibold text-[#0F172A] transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#64748B] mb-2.5">
                Backend &amp; API Layer
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {TECH_STACK.backend.map((t) => (
                  <span key={t} className="inline-flex items-center whitespace-nowrap px-3 py-1.5 bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#CBD5E1] rounded-md text-xs font-semibold text-[#0F172A] transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#64748B] mb-2.5">
                Database Architecture
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {TECH_STACK.database.map((t) => (
                  <span key={t} className="inline-flex items-center whitespace-nowrap px-3 py-1.5 bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#CBD5E1] rounded-md text-xs font-semibold text-[#0F172A] transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#64748B] mb-2.5">
                Workflow &amp; Deployment
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {TECH_STACK.workflow.map((t) => (
                  <span key={t} className="inline-flex items-center whitespace-nowrap px-3 py-1.5 bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#CBD5E1] rounded-md text-xs font-semibold text-[#0F172A] transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

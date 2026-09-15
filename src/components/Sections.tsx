import { SERVICES, PROCESS_STEPS, TECH_STACK } from "@/data/portfolio";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mb-14">
        <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
          Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-1">
          Development Services
        </h2>
        <p className="mt-2 text-lg text-[#334155] font-medium leading-relaxed">
          Direct, practical full-stack development focused on business performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="high-contrast-card rounded-xl p-8 bg-white flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] flex items-center justify-center font-bold text-lg mb-6">
                {service.title.charAt(0)}
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{service.title}</h3>
              <p className="text-base text-[#334155] leading-relaxed mb-6 font-normal">{service.description}</p>
            </div>

            <div className="pt-6 border-t border-[#CBD5E1]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
                Expected Outcomes
              </h4>
              <ul className="space-y-2 text-base font-semibold text-[#0F172A]">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#1D4ED8]"></span>
                    {outcome}
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
    <section id="process" className="py-20 sm:py-28 bg-[#F8FAFC] border-y border-[#CBD5E1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
            Development Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-1">
            How I Build Software
          </h2>
          <p className="mt-2 text-lg text-[#334155] font-medium leading-relaxed">
            A reliable 4-step execution process designed for speed and clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="p-7 bg-white border-2 border-[#CBD5E1] rounded-xl relative shadow-xs">
              <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-md inline-block mb-4">
                Step {step.step}
              </span>
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">{step.title}</h3>
              <p className="text-sm text-[#334155] leading-relaxed font-normal">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutAndTech() {
  return (
    <section id="about" className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* About Info */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
              Background &amp; Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-1">
              About Meet Bhandari
            </h2>
          </div>
          
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
            I am a Full-Stack Web Developer pursuing my B.Voc. in Software Development (5th semester) in India. I specialize in building high-performance web applications and operations management systems for business clients.
          </p>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
            My primary goal is to deliver clean, functional code that solves operational problems—from scheduling platforms to real-estate CRMs.
          </p>
          
          <div className="p-6 bg-[#EFF6FF] border-2 border-[#BFDBFE] rounded-xl space-y-2">
            <h4 className="text-base font-bold text-[#0F172A]">Development Philosophy</h4>
            <p className="text-sm text-[#1E3A8A] font-semibold leading-relaxed">
              "Simple is intentional. Every line of code and interface element must serve a clear user goal or business result."
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="lg:col-span-6 high-contrast-card rounded-xl p-8 bg-white space-y-6">
          <h3 className="text-xl font-bold text-[#0F172A] border-b border-[#CBD5E1] pb-4">
            Technical Capabilities
          </h3>
          
          <div className="space-y-6 text-sm">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
                Frontend Development
              </h4>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.frontend.map((t) => (
                  <span key={t} className="px-3.5 py-1.5 bg-[#F1F5F9] border border-[#CBD5E1] rounded-md text-xs font-bold text-[#0F172A]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
                Backend &amp; API Layer
              </h4>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.backend.map((t) => (
                  <span key={t} className="px-3.5 py-1.5 bg-[#F1F5F9] border border-[#CBD5E1] rounded-md text-xs font-bold text-[#0F172A]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
                Database Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.database.map((t) => (
                  <span key={t} className="px-3.5 py-1.5 bg-[#F1F5F9] border border-[#CBD5E1] rounded-md text-xs font-bold text-[#0F172A]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
                Workflow &amp; Deployment
              </h4>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.workflow.map((t) => (
                  <span key={t} className="px-3.5 py-1.5 bg-[#F1F5F9] border border-[#CBD5E1] rounded-md text-xs font-bold text-[#0F172A]">
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

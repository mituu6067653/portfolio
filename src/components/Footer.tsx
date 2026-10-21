import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E2E8F0] py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-bold text-[#0F172A] text-lg">Meet Bhandari</p>
          <p className="text-sm text-[#475569] mt-0.5">Full-Stack Web Developer • Based in India</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-[#475569]">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0F172A] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0F172A] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:meetbhandaridev@gmail.com"
            className="hover:text-[#1D4ED8] transition-colors font-semibold text-[#0F172A] break-all"
          >
            meetbhandaridev@gmail.com
          </a>
          <Link href="#contact" className="hover:text-[#0F172A] transition-colors">
            Contact
          </Link>
        </div>

        <p className="text-xs text-[#94A3B8]">
          © {new Date().getFullYear()} Meet Bhandari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

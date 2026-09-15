"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav-clean border-b border-[#CBD5E1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight text-[#0F172A] hover:text-[#1D4ED8] transition-colors flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#16A34A]"></span>
          <span>Meet Bhandari</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#334155]">
          <Link href="#work" className="hover:text-[#1D4ED8] transition-colors">
            Work
          </Link>
          <Link href="#services" className="hover:text-[#1D4ED8] transition-colors">
            Services
          </Link>
          <Link href="#process" className="hover:text-[#1D4ED8] transition-colors">
            Process
          </Link>
          <Link href="#about" className="hover:text-[#1D4ED8] transition-colors">
            About
          </Link>
          <Link href="#contact" className="hover:text-[#1D4ED8] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors shadow-xs"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#0F172A] hover:bg-[#F1F5F9] focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#CBD5E1] px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <Link
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#0F172A]"
          >
            Work
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#0F172A]"
          >
            Services
          </Link>
          <Link
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#0F172A]"
          >
            Process
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#0F172A]"
          >
            About
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#0F172A]"
          >
            Contact
          </Link>
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-[#1D4ED8] rounded-lg"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Business Website",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/meetbhandaridev@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
          _subject: `🚨 [HIGH PRIORITY CLIENT LEAD] ${formData.name} (${formData.projectType})`,
          _template: "table",
          _captcha: "false"
        })
      });

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        setStatus("success");
        setFormData({ name: "", email: "", projectType: "Business Website", message: "" });
      } else {
        throw new Error(result.message || "Something went wrong while sending the message.");
      }
    } catch (err: unknown) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage("Could not send message automatically. Please try again or email directly to meetbhandaridev@gmail.com");
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 lg:py-28 bg-[#F8FAFC] border-t border-[#CBD5E1]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 space-y-2">
          <span className="text-xs font-semibold text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-full inline-block mb-2">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Have a project in mind? Let's talk.
          </h2>
          <p className="text-sm sm:text-lg text-[#334155] font-medium max-w-lg mx-auto leading-relaxed">
            Fill out the form below to share project details, requirements, or timelines. I'll get back to you with next steps.
          </p>
        </div>

        <div className="high-contrast-card rounded-xl p-5 sm:p-8 lg:p-10 bg-white">
          {status === "success" ? (
            <div className="text-center py-8 sm:py-10 space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#DCFCE7] border-2 border-[#86EFAC] text-[#16A34A] flex items-center justify-center mx-auto text-xl sm:text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">Message Received!</h3>
              <p className="text-sm sm:text-base text-[#334155] font-medium max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. I have received your message and will reply to your email shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-[#1D4ED8] hover:underline"
              >
                Send Another Message →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-[#0F172A] mb-1.5 sm:mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-[#CBD5E1] rounded-lg text-sm sm:text-base text-[#0F172A] font-medium placeholder-[#64748B] focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#0F172A] mb-1.5 sm:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-[#CBD5E1] rounded-lg text-sm sm:text-base text-[#0F172A] font-medium placeholder-[#64748B] focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-xs font-bold text-[#0F172A] mb-1.5 sm:mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-[#CBD5E1] rounded-lg text-sm sm:text-base text-[#0F172A] font-medium focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]"
                >
                  <option value="Business Website">Business Website</option>
                  <option value="Custom Web Application">Custom Web Application / Dashboard</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="Bug Fixes & Improvements">Bug Fixes & Technical Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#0F172A] mb-1.5 sm:mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, features required, or timeline..."
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-[#CBD5E1] rounded-lg text-sm sm:text-base text-[#0F172A] font-medium placeholder-[#64748B] focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]"
                ></textarea>
              </div>

              {status === "error" && (
                <div className="p-3 sm:p-4 bg-red-50 border-2 border-red-200 rounded-lg text-xs sm:text-sm text-red-700">
                  <p className="font-bold">⚠️ Submission failed</p>
                  <p className="mt-1">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full inline-flex items-center justify-center px-5 py-3 sm:py-4 text-sm sm:text-base font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-all disabled:opacity-50 shadow-md cursor-pointer"
              >
                {status === "submitting" ? "SENDING MESSAGE..." : "SEND PROJECT INQUIRY →"}
              </button>

              <div className="text-center pt-2">
                <p className="text-xs sm:text-sm text-[#64748B] font-medium">
                  Prefer direct email?{" "}
                  <a
                    href="mailto:meetbhandaridev@gmail.com"
                    className="text-[#1D4ED8] font-bold hover:underline break-all"
                  >
                    meetbhandaridev@gmail.com
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

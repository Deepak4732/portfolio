"use client";

import { FormEvent, useState } from "react";

const profile = {
  email: "deepak4732kumar@gmail.com",
  github: "https://github.com/Deepak4732",
  linkedin: "https://www.linkedin.com/in/deepak-kumar-22114625b",
};

export default function Contact() {
  const [messageText, setMessageText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    setSubmitted(true);

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      
      {/* Header Section */}
      <div className="mb-16 max-w-2xl">
        <p className="font-mono text-xs tracking-[0.2em] text-emerald-500 uppercase mb-4">
          // CONTACT
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Let&apos;s connect
        </h1>
        <p className="text-base leading-relaxed text-slate-400">
          Have an idea, a question, or feedback on one of my projects? Send me a message — it goes straight to my inbox (database included).
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        
        {/* Left Column: Form */}
        <div className="rounded-2xl border border-white/5 bg-[#161b22]/50 p-6 sm:p-8 shadow-xl backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Name Input */}
            <label className="block">
              <span className="mb-2 block font-mono text-xs text-slate-400">
                name <span className="text-emerald-500">*</span>
              </span>
              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-[#0d1117] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-500/50 focus:bg-[#0d1117]/80"
              />
            </label>

            {/* Email Input */}
            <label className="block">
              <span className="mb-2 block font-mono text-xs text-slate-400">
                email <span className="text-emerald-500">*</span>
              </span>
              <input
                required
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-[#0d1117] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-500/50 focus:bg-[#0d1117]/80"
              />
            </label>

            {/* Message Input */}
            <label className="block">
              <span className="mb-2 block font-mono text-xs text-slate-400">
                message <span className="text-emerald-500">*</span>
              </span>
              <textarea
                required
                name="message"
                rows={6}
                maxLength={2000}
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="What would you like to talk about?"
                className="w-full resize-none rounded-lg border border-white/10 bg-[#0d1117] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-500/50 focus:bg-[#0d1117]/80"
              />
              {/* Character Counter */}
              <div className="mt-2 text-right font-mono text-[10px] text-slate-500">
                {messageText.length}/2000
              </div>
            </label>

            {/* Submit Button */}
            <div className="mt-2 flex items-center gap-4">
              <button
                type="submit"
                className="flex w-fit items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#0d1117] transition hover:bg-emerald-300"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                Send Message
              </button>
              {submitted && (
                <span className="font-mono text-xs text-emerald-400">Opening email client...</span>
              )}
            </div>
            
          </form>
        </div>

        {/* Right Column: Alternative Channels */}
        <div className="h-fit rounded-2xl border border-white/5 bg-[#161b22]/50 p-6 sm:p-8 shadow-xl backdrop-blur-sm">
          <h3 className="mb-2 text-lg font-medium text-white">Prefer another channel?</h3>
          <p className="mb-8 text-sm text-slate-400">You can also reach me directly:</p>

          <div className="flex flex-col gap-3">
            {/* Email Link */}
            <a 
              href={`mailto:${profile.email}`} 
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3.5 text-sm text-slate-300 transition hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-400"
            >
              <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect><polyline points="3 7 12 13 21 7"></polyline></svg>
              {profile.email}
            </a>

            {/* GitHub Link */}
            <a 
              href={profile.github} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3.5 text-sm text-slate-300 transition hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-400"
            >
              <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.2.2S17.9-.2 15 1.7a13.4 13.4 0 0 0-6 0C6.1-.2 4.8.2 4.8.2A5.1 5.1 0 0 0 4.7 4 5.5 5.5 0 0 0 3.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4"></path><path d="M9 18c-4.5 2-5-2-7-2"></path></svg>
              GitHub
            </a>

            {/* LinkedIn Link */}
            <a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3.5 text-sm text-slate-300 transition hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-400"
            >
              <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
          </div>

          {/* Footer Note in Right Column */}
          <div className="mt-8 border-t border-white/5 pt-6 font-mono text-[10px] leading-relaxed text-slate-500">
            messages are validated, spam-checked and stored securely — I read every one.
          </div>
        </div>

      </div>
    </div>
  );
}
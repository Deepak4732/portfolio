"use client";

import Link from "next/link";

export default function Resume() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 sm:px-8 lg:px-10 print:p-0 print:m-0 print:max-w-none print:bg-white">
      
      {/* Header Section (Sirf website par dikhega, PDF me nahi) */}
      <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end print:hidden">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-emerald-500 uppercase mb-4">
            // RESUME
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Resume
          </h1>
          <p className="text-base text-slate-400">
            A clean, honest summary — use the button to save it as a PDF.
          </p>
        </div>
        
        {/* Download / Print Button */}
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-bold text-[#0d1117] transition hover:bg-emerald-400"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Download / Print PDF
        </button>
      </div>

      {/* The Resume Card (Yehi exactly PDF me print hoga) */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 shadow-2xl print:m-0 print:border-none print:bg-white print:p-0 print:shadow-none print:text-black">
        
        {/* Header inside Resume */}
        <div className="border-b border-white/10 print:border-b-2 print:border-gray-800 pb-8 print:pb-4 mb-8 print:mb-4">
          <h2 className="text-3xl font-bold text-white print:text-black mb-2">Deepak Kumar</h2>
          <p className="font-mono text-sm text-emerald-400 print:text-gray-700 mb-6 print:mb-3">
            Student & Aspiring AI/ML Engineer | Data Science/Full-Stack Developer
          </p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-slate-400 print:text-black">
            <a href="mailto:hello@example.com" className="flex items-center gap-2 hover:text-emerald-400 transition print:text-black">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path></svg>
              deepak4732kumar@gmail.com
            </a>
            <a href="https://github.com/Deepak4732" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition print:text-black">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.2.2S17.9-.2 15 1.7a13.4 13.4 0 0 0-6 0C6.1-.2 4.8.2 4.8.2A5.1 5.1 0 0 0 4.7 4 5.5 5.5 0 0 0 3.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4"></path><path d="M9 18c-4.5 2-5-2-7-2"></path></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/deepak-kumar-22114625b" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition print:text-black">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="border-b border-white/10 print:border-b print:border-gray-300 pb-8 print:pb-3 mb-8 print:mb-3">
          <h3 className="font-mono text-xs tracking-[0.2em] text-emerald-500 print:text-gray-900 font-bold uppercase mb-4 print:mb-2">Summary</h3>
          <p className="text-sm leading-relaxed text-slate-300 print:text-black">
            Student and aspiring full-stack developer learning through practical projects. Comfortable building complete web applications — frontend, backend, and database — alongside integrating data science models. Committed to writing cleaner, better-structured code with every project.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="border-b border-white/10 print:border-b print:border-gray-300 pb-8 print:pb-3 mb-8 print:mb-3">
          <h3 className="font-mono text-xs tracking-[0.2em] text-emerald-500 print:text-gray-900 font-bold uppercase mb-4 print:mb-2">Technical Skills</h3>
          <div className="space-y-3 print:space-y-1 text-sm text-slate-300 print:text-black">
            <p><span className="font-semibold text-white print:text-black">Programming:</span> Python, JavaScript, TypeScript, PHP</p>
            <p><span className="font-semibold text-white print:text-black">Frontend:</span> Next.js, React, Tailwind CSS, HTML5, CSS3</p>
            <p><span className="font-semibold text-white print:text-black">Backend & APIs:</span> Node.js, WebRTC, Socket.io, REST APIs</p>
            <p><span className="font-semibold text-white print:text-black">Data & AI:</span> Pandas, NumPy, Hugging Face, Streamlit, Machine Learning</p>
            <p><span className="font-semibold text-white print:text-black">Database & BI:</span> PostgreSQL, MySQL, Power BI, DAX</p>
          </div>
        </div>

        {/* Projects */}
        <div className="border-b border-white/10 print:border-b print:border-gray-300 pb-8 print:pb-3 mb-8 print:mb-3">
          <h3 className="font-mono text-xs tracking-[0.2em] text-emerald-500 print:text-gray-900 font-bold uppercase mb-4 print:mb-2">Projects</h3>
          <ul className="list-disc pl-5 space-y-3 print:space-y-1.5 text-sm text-slate-300 print:text-black marker:text-emerald-500 print:marker:text-black">
            <li>
              <span className="font-semibold text-white print:text-black">Incognito (Real-time App):</span> Built an anonymous video chat platform focusing on real-time communication using Next.js, WebRTC, and Socket.io.
            </li>
            <li>
              <span className="font-semibold text-white print:text-black">E-Commerce Full Stack:</span> Developed a responsive commerce platform with robust PostgreSQL database management and a Node.js backend.
            </li>
            <li>
              <span className="font-semibold text-white print:text-black">Data & AI Applications:</span> Created face detection and text summarization tools using Python, Hugging Face Transformers, and Streamlit.
            </li>
            <li>
              <span className="font-semibold text-white print:text-black">Business Intelligence:</span> Designed interactive Power BI dashboards using advanced DAX measures for datasets like House Price Analysis.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="border-b border-white/10 print:border-b print:border-gray-300 pb-8 print:pb-3 mb-8 print:mb-3">
          <h3 className="font-mono text-xs tracking-[0.2em] text-emerald-500 print:text-gray-900 font-bold uppercase mb-4 print:mb-2">Education</h3>
          <div className="space-y-4 print:space-y-2 text-sm text-slate-300 print:text-black">
            <div>
              <p className="font-semibold text-white print:text-black">Master of Computer Applications (MCA)</p>
              <p className="text-slate-400 print:text-gray-800">IITM Janakpuri, GGSIPU — Currently pursuing studies while self-learning modern web development.</p>
            </div>
            <div>
              <p className="font-semibold text-white print:text-black">Bachelor of Computer Applications (BCA)</p>
              <p className="text-slate-400 print:text-gray-800">CIMAGE College, Patna</p>
            </div>
            <div>
              <p className="font-semibold text-white print:text-black">100-Hour Certification in AI & Machine Learning</p>
              <p className="text-slate-400 print:text-gray-800">Python-focused practical training program</p>
            </div>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="print:pb-2">
          <h3 className="font-mono text-xs tracking-[0.2em] text-emerald-500 print:text-gray-900 font-bold uppercase mb-4 print:mb-2">Currently Learning</h3>
          <p className="text-sm leading-relaxed text-slate-300 print:text-black">
            Advanced Next.js patterns · WebRTC real-time connections · Python data modeling · PostgreSQL optimization · Authentication & security · Git workflows
          </p>
        </div>

      </div>
    </div>
  );
}
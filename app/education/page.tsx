import Link from "next/link";

export default function Education() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      
      {/* Header Section */}
      <div className="mb-16">
        <p className="font-mono text-xs tracking-[0.2em] text-emerald-500 uppercase mb-4">
          // EDUCATION
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Learning Journey
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-slate-400">
          How I got here, and what I&apos;m working on next. Progress over perfection.
        </p>
      </div>

      <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        
        {/* Left Column: Timeline */}
        <div className="relative border-l border-white/10 pl-8 space-y-12">
          
          {/* Item 1: Now */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]">
               <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></div>
            </div>
            <p className="font-mono text-xs text-emerald-400 mb-2">Now</p>
            <h3 className="text-xl font-semibold text-white mb-2">Master of Computer Applications (MCA)</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Currently pursuing my post-graduation at IITM Janakpuri, GGSIPU. Focusing on advanced software engineering, data science, and building scalable full-stack applications.
            </p>
          </div>

          {/* Item 2: Earlier */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500/50 border border-emerald-500"></div>
            <p className="font-mono text-xs text-emerald-500 mb-2">Earlier</p>
            <h3 className="text-xl font-semibold text-white mb-2">100-Hour AI & Machine Learning Training</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Completed an intensive summer training program focused on Python. Learned practical model development, data processing with Pandas/NumPy, and applied artificial intelligence concepts.
            </p>
          </div>

          {/* Item 3: Starting Point */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500/50 border border-emerald-500"></div>
            <p className="font-mono text-xs text-emerald-500 mb-2">Starting point</p>
            <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Graduated from CIMAGE College, Patna. Built a strong foundation in programming logic, relational databases (MySQL), web foundations, and developed initial projects like Bihar Bhrman using PHP.
            </p>
          </div>

        </div>

        {/* Right Column: Currently Learning Card */}
        <div className="h-fit rounded-xl border border-white/5 bg-[#111827]/40 p-6 sm:p-8 backdrop-blur-sm">
          
          <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
            <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
            <h3 className="text-lg font-medium text-white">Currently Learning</h3>
          </div>

          <div className="space-y-6">
            
            {/* Topic 1 */}
            <div className="group flex items-start gap-3">
              <svg className="h-4 w-4 mt-1 text-emerald-500/50 group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
              <div>
                <h4 className="text-sm font-medium text-slate-200 mb-1">Advanced Next.js patterns</h4>
                <p className="text-xs leading-relaxed text-slate-500">Server actions, App router optimization, and managing complex state in full-stack React applications.</p>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="group flex items-start gap-3">
              <svg className="h-4 w-4 mt-1 text-emerald-500/50 group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
              <div>
                <h4 className="text-sm font-medium text-slate-200 mb-1">Real-time WebRTC & Socket.io</h4>
                <p className="text-xs leading-relaxed text-slate-500">Building peer-to-peer video communication and seamless real-time data transfer for interactive web apps.</p>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="group flex items-start gap-3">
              <svg className="h-4 w-4 mt-1 text-emerald-500/50 group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
              <div>
                <h4 className="text-sm font-medium text-slate-200 mb-1">Applied Data Science</h4>
                <p className="text-xs leading-relaxed text-slate-500">Integrating Hugging Face transformers and building interactive data dashboards using Streamlit and Power BI.</p>
              </div>
            </div>

            {/* Topic 4 */}
            <div className="group flex items-start gap-3">
              <svg className="h-4 w-4 mt-1 text-emerald-500/50 group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
              <div>
                <h4 className="text-sm font-medium text-slate-200 mb-1">Database Optimization</h4>
                <p className="text-xs leading-relaxed text-slate-500">Writing efficient queries, indexing, and structuring PostgreSQL databases for robust backend architecture.</p>
              </div>
            </div>

          </div>
          
          <div className="mt-8 border-t border-white/5 pt-4 flex items-center gap-2 font-mono text-[10px] text-slate-600">
             <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
             student · learning in public
          </div>
        </div>

      </div>
    </div>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Deepak Kumar | Full-Stack Developer",
  description: "Portfolio of Deepak Kumar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0d1117] text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
        
        {/* Terminal Style Header */}
        <header className="border-b border-white/5 bg-[#0d1117]/90 backdrop-blur-md sticky top-0 z-50">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
            
            <Link href="/" className="flex items-center gap-3 font-mono text-lg font-semibold text-slate-200 transition hover:text-emerald-400">
              <span className="flex h-7 w-7 items-center justify-center rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm">
                {'>_'}
              </span>
              ~/deepak
            </Link>

            {/* Dynamic Navbar Component */}
            <Navbar />
            
          </div>
        </header>

        <main className="flex-grow w-full relative">
          <div className="relative z-10">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 bg-[#0a0d12] mt-auto">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
            
            <div className="flex flex-col md:flex-row justify-between gap-8 border-b border-white/5 pb-10">
              <div className="max-w-md">
                <div className="flex items-center gap-3 font-mono text-sm font-semibold text-emerald-400 mb-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded border border-emerald-500/30 bg-emerald-500/10 text-xs">
                    {'>_'}
                  </span>
                  ~/deepak
                </div>
                <p className="text-sm leading-relaxed text-slate-400">
                  Student & aspiring full-stack developer. Learning in public, building one project at a time.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <a href="https://github.com/Deepak4732" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#161b22] text-slate-400 transition hover:bg-white/10 hover:text-emerald-400">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.2.2S17.9-.2 15 1.7a13.4 13.4 0 0 0-6 0C6.1-.2 4.8.2 4.8.2A5.1 5.1 0 0 0 4.7 4 5.5 5.5 0 0 0 3.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4"></path><path d="M9 18c-4.5 2-5-2-7-2"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/deepak-kumar-22114625b" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#161b22] text-slate-400 transition hover:bg-white/10 hover:text-emerald-400">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 font-mono text-[10px] sm:text-xs text-slate-600">
              <p>© {new Date().getFullYear()} Deepak · built while learning, improved with every commit</p>
              
              <div className="flex items-center gap-2 hover:text-emerald-400 transition cursor-pointer">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>admin</span>
              </div>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
import Link from "next/link";
import Image from "next/image";

type GitHubRepository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

async function getGitHubRepositories(): Promise<GitHubRepository[]> {
  try {
    const response = await fetch(
      "https://api.github.com/users/Deepak4732/repos?sort=updated&per_page=3",
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) return [];
    return (await response.json()) as GitHubRepository[];
  } catch {
    return [];
  }
}

export default async function Home() {
  const repositories = await getGitHubRepositories();

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      
      {/* 1. HERO SECTION WITH 3D POP-OUT IMAGE */}
      <section className="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-16 px-0 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* Left Column: Text */}
        <div className="order-2 flex flex-col justify-center lg:order-1">
          
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 font-mono text-[10px] sm:text-xs text-emerald-400 w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            open to learning & collaboration
          </div>

          <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-emerald-400">Deepak</span>
          </h1>
          
          <p className="mb-8 font-mono text-lg text-emerald-400 sm:text-xl">
            Aspiring AI/ML Engineer | Data Science | Python | SQL | Power BI | Machine Learning/Full-Stack Developer
          </p>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            I build intelligent web applications using Python, Next.js, and PostgreSQL — learning new technologies by shipping practical data models and improving with every iteration.
          </p>

          <div className="mb-14 flex flex-wrap items-center gap-4">
            <Link href="/projects" className="group flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3.5 font-semibold text-[#0d1117] transition hover:bg-emerald-300">
              View My Projects
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
            <Link href="/resume" className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3.5 font-medium text-slate-300 transition hover:bg-white/10">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Resume
            </Link>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-slate-500">
            <span>find me on</span>
            <div className="h-px w-8 bg-slate-700"></div>
            <a href="https://github.com/Deepak4732" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.2.2S17.9-.2 15 1.7a13.4 13.4 0 0 0-6 0C6.1-.2 4.8.2 4.8.2A5.1 5.1 0 0 0 4.7 4 5.5 5.5 0 0 0 3.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4"></path><path d="M9 18c-4.5 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/deepak-kumar-22114625b" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        {/* Right Column: Extreme 3D Pop-out Image (UPDATED FOR LARGER SIZE) */}
        <div className="order-1 relative flex items-end justify-center w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] mx-auto lg:order-2 mt-12 lg:mt-0">
          
          {/* Background Circle */}
          <div className="absolute inset-0 rounded-full bg-[#111827] border-2 border-emerald-500/20 shadow-[0_0_80px_rgba(16,185,129,0.15)]"></div>
          <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-[60px]"></div>

          {/* Image Wrapper */}
          <div className="absolute bottom-0 w-full h-[125%] rounded-b-full overflow-hidden flex justify-center items-end">
            <img 
              src="/Deepak.png" 
              alt="Deepak Kumar" 
              className="w-[120%] max-w-none h-auto object-contain drop-shadow-2xl" 
            />
          </div>

          {/* Small Terminal Status Card */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:-translate-x-0 sm:-bottom-4 sm:-left-8 z-30 rounded-lg border border-white/10 bg-[#0d1117]/90 backdrop-blur-md px-5 py-3 shadow-2xl whitespace-nowrap">
             <div className="font-mono text-xs sm:text-sm text-slate-400 flex items-center gap-2">
                <span className="text-emerald-400">status:</span> building full stack
             </div>
          </div>

        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-20 border-t border-white/5">
        <div className="rounded-2xl border border-white/5 bg-[#161b22]/30 p-8 sm:p-12">
          <p className="font-mono text-xs tracking-[0.2em] text-emerald-500 uppercase mb-6">
            // ABOUT
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <p className="max-w-2xl text-xl sm:text-2xl font-medium leading-relaxed text-white">
              I&apos;m a student who learns by doing — turning tutorials into real, working applications. Every project teaches me something new about writing cleaner code and building better software.
            </p>
            <Link href="/about" className="flex w-fit items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-emerald-400 transition hover:bg-white/5">
              More About Me 
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. TECH STACK SECTION */}
      <section className="py-20 border-t border-white/5">
        <p className="font-mono text-xs tracking-[0.2em] text-emerald-500 uppercase mb-4">
          // TECH STACK
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Tools I work with
        </h2>
        <p className="mb-12 text-slate-400">
          The technologies I currently use to design, build and ship my projects.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#161b22]/50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-white/5 font-mono text-xs text-emerald-400">py</div>
            <div><p className="text-sm font-medium text-slate-200">Python</p><p className="text-[10px] text-slate-500 font-mono">programming</p></div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#161b22]/50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-white/5 font-mono text-xs text-emerald-400">js</div>
            <div><p className="text-sm font-medium text-slate-200">JavaScript</p><p className="text-[10px] text-slate-500 font-mono">programming</p></div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#161b22]/50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-white/5 font-mono text-xs text-emerald-400">nx</div>
            <div><p className="text-sm font-medium text-slate-200">Next.js</p><p className="text-[10px] text-slate-500 font-mono">frontend</p></div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#161b22]/50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-white/5 font-mono text-xs text-emerald-400">tw</div>
            <div><p className="text-sm font-medium text-slate-200">Tailwind CSS</p><p className="text-[10px] text-slate-500 font-mono">frontend</p></div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#161b22]/50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-white/5 font-mono text-xs text-emerald-400">no</div>
            <div><p className="text-sm font-medium text-slate-200">Node.js</p><p className="text-[10px] text-slate-500 font-mono">backend</p></div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#161b22]/50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-white/5 font-mono text-xs text-emerald-400">pg</div>
            <div><p className="text-sm font-medium text-slate-200">PostgreSQL</p><p className="text-[10px] text-slate-500 font-mono">database</p></div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#161b22]/50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-white/5 font-mono text-xs text-emerald-400">rt</div>
            <div><p className="text-sm font-medium text-slate-200">WebRTC</p><p className="text-[10px] text-slate-500 font-mono">backend</p></div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#161b22]/50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-white/5 font-mono text-xs text-emerald-400">ml</div>
            <div><p className="text-sm font-medium text-slate-200">Machine Learning</p><p className="text-[10px] text-slate-500 font-mono">data</p></div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SECTION */}
      <section className="py-20 border-t border-white/5">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-emerald-500 uppercase mb-4">
              // FEATURED WORK
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
          </div>
          <Link href="/projects" className="hidden sm:flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition">
            All projects <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Incognito Video Chat", desc: "Real-time anonymous communication platform.", tags: ["Next.js", "WebRTC", "Socket.io"], image: "/Incognito.png" },
            { title: "E-Commerce Platform", desc: "Full-stack store with admin panel and database.", tags: ["Node.js", "PostgreSQL", "React"], image: "/ecommerce.png" },
            { title: "AI Summarizer Tool", desc: "Text processing and summarization application.", tags: ["Python", "Hugging Face", "Streamlit"], image: "/AISummarizer.png" }
          ].map((proj, i) => (
            <div key={i} className="flex flex-col rounded-xl border border-white/5 bg-[#161b22]/50 overflow-hidden group hover:border-white/10 transition">
              <div className="h-40 bg-[#111] relative overflow-hidden">
                <Image 
                  src={proj.image} 
                  alt={proj.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-50"></div>
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-1 backdrop-blur-sm z-10">
                  <svg className="h-3 w-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <span className="font-mono text-[10px] text-emerald-400">featured</span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-2">{proj.title}</h3>
                <p className="text-sm text-slate-400 mb-6 flex-grow">{proj.desc}</p>
                <div className="flex gap-3 font-mono text-[10px] text-slate-500 uppercase">
                  {proj.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. IN PROGRESS / LEARNING SECTION */}
      <section className="py-20 border-t border-white/5">
        <p className="font-mono text-xs tracking-[0.2em] text-emerald-500 uppercase mb-4">
          // IN PROGRESS
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Currently Learning
        </h2>
        <p className="mb-12 text-slate-400">
          Topics I&apos;m actively studying and practising right now.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Advanced Next.js patterns", desc: "Server actions, API routes, and App router optimization." },
            { title: "PostgreSQL & Database Design", desc: "Joins, indexing, relationships, and normalization." },
            { title: "Applied Machine Learning", desc: "Building practical models and data visualization dashboards." },
            { title: "WebRTC & Socket.io", desc: "Handling real-time data flow and peer connections." },
            { title: "Git workflows", desc: "Branching, pull requests, and collaborating on GitHub." },
            { title: "Deployment basics", desc: "Getting projects online and keeping them running reliably." }
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-white/5 bg-[#161b22]/50 p-6">
              <div className="flex items-center gap-2 mb-3">
                <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                <h3 className="font-medium text-slate-200 text-sm">{item.title}</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GITHUB ACTIVITY SECTION */}
      <section className="py-20 border-t border-white/5">
        <p className="font-mono text-xs tracking-[0.2em] text-emerald-500 uppercase mb-4">
          // DEVELOPER ACTIVITY
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          GitHub Activity
        </h2>
        <p className="mb-12 text-slate-400">
          A live look at what I&apos;m building — powered by the public GitHub API.
        </p>
        
        {repositories.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-3">
            {repositories.map((repository) => (
              <a
                key={repository.id}
                href={repository.html_url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-white/5 bg-[#161b22]/50 p-5 transition hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-[#161b22]"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="truncate font-semibold text-white group-hover:text-emerald-400">
                    {repository.name}
                  </h3>
                  <svg className="h-4 w-4 shrink-0 text-slate-500 group-hover:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg>
                </div>
                <p className="mb-6 min-h-12 text-sm leading-relaxed text-slate-400">
                  {repository.description || "A public project from my GitHub profile."}
                </p>
                <div className="flex items-center gap-4 font-mono text-[10px] uppercase text-slate-500">
                  {repository.language && <span>{repository.language}</span>}
                  <span>{repository.stargazers_count} stars</span>
                  <span>{new Date(repository.updated_at).toLocaleDateString()}</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/5 bg-[#161b22]/30 p-12 text-center">
            <p className="text-sm text-slate-400">
              GitHub activity is temporarily uailable. Visit my{" "}
              <a href="https://github.com/Deepak4732" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">
                GitHub profile
            </a>{" "}or the <Link href="/projects" className="text-emerald-400 hover:underline">Projects page</Link>.
            </p>
          </div>
        )}
      </section>

      {/* 7. CONTACT CTA SECTION */}
      <section className="py-24 border-t border-white/5">
        <div className="rounded-3xl bg-gradient-to-b from-[#161b22] to-[#0d1117] border border-white/5 p-12 sm:p-20 text-center flex flex-col items-center">
          <svg className="h-8 w-8 text-emerald-400 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3Z"></path></svg>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Have an idea or want to connect?
          </h2>
          <p className="mb-10 text-base text-slate-400 max-w-xl">
            I&apos;m always open to feedback, learning opportunities and interesting conversations.
          </p>
          <Link href="/contact" className="flex items-center gap-2 rounded-lg bg-emerald-400 px-8 py-3.5 font-semibold text-[#0d1117] transition hover:bg-emerald-300">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            Let&apos;s Connect
          </Link>
        </div>
      </section>

    </div>
  );
}
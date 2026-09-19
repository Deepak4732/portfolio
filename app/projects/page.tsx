"use client";

import { useState, useEffect, useMemo } from "react";

// Placeholder image kyunki GitHub API direct images nahi deta
const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";

export default function Projects() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  // YAHAN APNA GITHUB USERNAME DAALO
  const GITHUB_USERNAME = "Deepak4732";

  useEffect(() => {
    async function fetchGitHubRepos() {
      try {
        // GitHub API se live data fetch kar rahe hain (sort by recently updated)
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        
        // Data filter karke state me set karna
        setRepos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repos:", error);
        setLoading(false);
      }
    }

    fetchGitHubRepos();
  }, []);

  // Featured filter logic (Maan lete hain jisme 1 bhi star hai wo featured hai)
  const filteredRepos = useMemo(() => {
    if (filter === "all") return repos;
    return repos.filter((repo) => repo.stargazers_count > 0 || repo.topics?.includes("featured"));
  }, [filter, repos]);

  const featuredCount = repos.filter(repo => repo.stargazers_count > 0 || repo.topics?.includes("featured")).length;

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      
      {/* Header Section matching the image */}
      <div className="mb-12 max-w-2xl">
        <p className="font-mono text-xs tracking-[0.2em] text-emerald-500 uppercase mb-4">
          // PROJECTS
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Things I&apos;ve built
        </h1>
        <p className="text-base leading-relaxed text-slate-400">
          Every project here is loaded live from my GitHub profile using the GitHub REST API. 
          The layout is automatic — just push code and it appears here.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="mb-10 flex gap-3 font-mono text-xs">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-md px-4 py-2 transition ${
            filter === "all"
              ? "border border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
              : "border border-white/5 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-300"
          }`}
        >
          all ({repos.length})
        </button>
        <button
          onClick={() => setFilter("featured")}
          className={`rounded-md px-4 py-2 transition ${
            filter === "featured"
              ? "border border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
              : "border border-white/5 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-300"
          }`}
        >
          featured ({featuredCount})
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="font-mono text-emerald-400 animate-pulse">
            Fetching live repositories from GitHub...
          </div>
        </div>
      )}

      {/* Projects Grid */}
      {!loading && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRepos.map((repo) => (
            <article
              key={repo.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/5 bg-[#0d1117] shadow-xl transition-all hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl"
            >
              {/* Card Top: Image & Badge */}
              <div className="relative h-48 w-full overflow-hidden bg-[#111]">
                {/* Fallback code image since GitHub API doesn't provide thumbnails */}
                <img
                  src={PLACEHOLDER_IMAGE}
                  alt="Project background"
                  className="h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-70"
                />
                
                {/* Featured Badge (Shows if repo has stars) */}
                {(repo.stargazers_count > 0 || repo.topics?.includes("featured")) && (
                  <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 backdrop-blur-md">
                    <svg className="h-3 w-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">Featured</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                  {repo.name}
                </h3>
                
                <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-3 flex-grow">
                  {repo.description || "No description provided. This is a live project directly synced from GitHub."}
                </p>

                {/* Tech Stack / Topics */}
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {/* Primary Language */}
                  {repo.language && (
                    <span className="font-mono text-xs text-slate-500 uppercase">
                      {repo.language}
                    </span>
                  )}
                  {/* Topics (if available) */}
                  {repo.topics?.slice(0, 3).map((topic: string) => (
                    <span key={topic} className="font-mono text-xs text-slate-500 uppercase">
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Card Footer: Code Link */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-emerald-400"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.2.2S17.9-.2 15 1.7a13.4 13.4 0 0 0-6 0C6.1-.2 4.8.2 4.8.2A5.1 5.1 0 0 0 4.7 4 5.5 5.5 0 0 0 3.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4"></path><path d="M9 18c-4.5 2-5-2-7-2"></path></svg>
                    Code
                  </a>
                  
                  {/* Show Live Link if GitHub Pages is enabled */}
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-emerald-400"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* No Repos Fallback */}
      {!loading && filteredRepos.length === 0 && (
        <div className="py-20 text-center font-mono text-slate-500">
          No repositories found matching this filter.
        </div>
      )}
    </div>
  );
}
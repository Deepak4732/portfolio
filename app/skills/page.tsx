const skillCategories = [
  {
    path: "programming/",
    skills: [
      { prefix: "py", name: "Python" },
      { prefix: "js", name: "JavaScript" },
      { prefix: "ts", name: "TypeScript" },
    ],
  },
  {
    path: "ai_ml/",
    skills: [
      { prefix: "ml", name: "Machine Learning" },
      { prefix: "pd", name: "Pandas & NumPy" },
      { prefix: "hf", name: "Hugging Face" },
      { prefix: "st", name: "Streamlit" },
    ],
  },
  {
    path: "frontend/",
    skills: [
      { prefix: "nx", name: "Next.js" },
      { prefix: "re", name: "React" },
      { prefix: "tw", name: "Tailwind CSS" },
      { prefix: "ht", name: "HTML5 / CSS3" },
    ],
  },
  {
    path: "backend/",
    skills: [
      { prefix: "no", name: "Node.js" },
      { prefix: "rt", name: "WebRTC" },
      { prefix: "so", name: "Socket.io" },
      { prefix: "api", name: "REST APIs" },
    ],
  },
  {
    path: "database_&_bi/",
    skills: [
      { prefix: "pg", name: "PostgreSQL" },
      { prefix: "my", name: "MySQL" },
      { prefix: "bi", name: "Power BI" },
      { prefix: "dx", name: "DAX & Data Modeling" },
    ],
  },
  {
    path: "tools/",
    skills: [
      { prefix: "git", name: "Git" },
      { prefix: "gh", name: "GitHub" },
      { prefix: "vs", name: "VS Code" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 sm:px-8 lg:px-10">
      
      {/* Header Section */}
      <div className="mb-16">
        <p className="font-mono text-xs tracking-[0.2em] text-emerald-400 uppercase mb-4">
          // Skills
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          What I work with
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-slate-400">
          An honest snapshot of my current toolkit — combining data science modeling with practical full-stack web development to build complete solutions.
        </p>
      </div>

      {/* Skills Categories Loop */}
      <div className="space-y-12">
        {skillCategories.map((category) => (
          <div key={category.path}>
            {/* Terminal Path Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-sm text-emerald-400">
                {category.path}
              </span>
              <div className="h-px flex-grow bg-white/10"></div>
              <span className="font-mono text-xs text-slate-500">
                {category.skills.length} items
              </span>
            </div>

            {/* Skill Cards Grid */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:bg-white/5 hover:border-white/10"
                >
                  <div className="flex h-7 w-8 items-center justify-center rounded bg-white/5 font-mono text-[10px] text-emerald-400">
                    {skill.prefix}
                  </div>
                  <span className="text-sm font-medium text-slate-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-16 font-mono text-xs text-slate-500">
        <span className="text-emerald-400">note:</span> this list grows as I learn — always improving with every project.
      </div>

    </div>
  );
}
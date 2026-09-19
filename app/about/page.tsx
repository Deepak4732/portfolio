export default function About() {
  const highlights = [
    {
      title: "Data Science & AI",
      description: "Turning raw data into useful intelligence through modeling and applied AI.",
      skills: ["Python", "Pandas", "NumPy", "Hugging Face", "Machine Learning", "Streamlit"],
    },
    {
      title: "Data Visualization & BI",
      description: "Building clear analytical views that help teams understand performance.",
      skills: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    },
    {
      title: "Web Development & Databases",
      description: "Creating reliable full-stack products that bring data models to the browser.",
      skills: ["PostgreSQL", "Next.js", "Node.js", "WebRTC"],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      
      {/* Header Section */}
      <section className="mb-20">
        <p className="font-mono text-xs tracking-[0.2em] text-emerald-500 uppercase mb-4">
          // ABOUT ME
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Curious by nature. Precise by practice.
        </h1>
        <div className="grid gap-8 lg:grid-cols-2 mt-8">
          <p className="text-base leading-relaxed text-slate-300">
            I&apos;m an aspiring Data Scientist and MCA student focused on building useful systems with data, machine learning, and modern web technologies. My work sits at the intersection of Data Science, Machine Learning, and Business Intelligence. 
          </p>
          <p className="text-base leading-relaxed text-slate-400">
            I enjoy finding structure in complex datasets, translating it into clear visual insights, and turning models into full-stack applications that people can actually use.
          </p>
        </div>
      </section>

      {/* Philosophy / Approach Card */}
      <section className="mb-20">
        <div className="rounded-2xl border border-white/5 bg-[#161b22]/40 p-8 sm:p-10 backdrop-blur-sm">
          <p className="font-mono text-xs tracking-[0.2em] text-emerald-500 uppercase mb-4">
            // PHILOSOPHY
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4">How I approach building software</h2>
          <p className="text-sm leading-relaxed text-slate-400 max-w-3xl">
            Every line of code and every dataset tells a story. My goal is to bridge the gap between heavy technical complexity and smooth user experience. Whether it&apos;s training a model or setting up a database schema, clarity and performance are always at the core.
          </p>
        </div>
      </section>

      {/* Core Focus Areas / Capabilities */}
      <section>
        <p className="font-mono text-xs tracking-[0.2em] text-emerald-500 uppercase mb-4">
          // CAPABILITIES
        </p>
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-white">
          Core Focus Areas
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((group, index) => (
            <div 
              key={group.title} 
              className="group rounded-xl border border-white/5 bg-[#161b22]/50 p-6 sm:p-8 transition hover:border-white/10 hover:bg-[#161b22]"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-emerald-400">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{group.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400 mb-8 min-h-[48px]">{group.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="rounded-md border border-white/5 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
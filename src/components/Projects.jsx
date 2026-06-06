const projects = [
  {
    num: "01",
    title: "Prescripto — Doctor Appointment System",
    desc: "Full-stack MERN doctor appointment platform with real-time slot booking, admin dashboard, doctor management, patient records, UPI payment integration, and JWT authentication. Deployed on Vercel + Render.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Cloudinary"],
    demo: "https://doctor-appointment-frontend-git-master-nikhil1121s-projects.vercel.app/",
    github: "https://github.com/Nikhil1121/Doctor_Appointment_Frontend",
    accent: "#2dd4bf",
    glow: "rgba(45,212,191,0.12)",
    image: "https://res.cloudinary.com/ddslcdypq/image/upload/v1780737161/project_prescripto.png",
  },
  {
    num: "02",
    title: "Resume Builder",
    desc: "Generates professional ATS-friendly resumes with PDF export. Built with React, Tailwind CSS, Node.js, and MongoDB with multiple templates.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    demo: "#",
    github: "https://github.com/Nikhil1121",
    accent: "#818cf8",
    glow: "rgba(129,140,248,0.12)",
    image: "https://res.cloudinary.com/ddslcdypq/image/upload/v1780737163/project_resume.png",
  },
  {
    num: "03",
    title: "Amazon Web App Clone",
    desc: "Amazon-style homepage with product cards, cart UI, and search functionality. Improved UI responsiveness by 35% using Flexbox and CSS Grid.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "https://github.com/Nikhil1121",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.12)",
    image: "https://res.cloudinary.com/ddslcdypq/image/upload/v1780737166/project_amazon.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 md:px-16 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(129,140,248,0.07) 0%,transparent 70%)" }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-10 sm:mb-16">
          <p className="font-mono text-teal-400 text-xs uppercase tracking-widest mb-2 sm:mb-3">// my work</p>
          <h2 className="font-black tracking-tight text-primary" style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)" }}>
            Featured <span className="grad-text">Projects</span>
          </h2>
          <p className="text-faint text-sm sm:text-base mt-2 sm:mt-3">Things I've built that I'm proud of</p>
        </div>

        <div className="flex flex-col gap-10 sm:gap-14">
          {projects.map((p, i) => (
            <div key={p.num} className="reveal group">
              <div
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-theme hover:border-theme-md transition-all duration-500 hover:shadow-2xl"
                style={{ boxShadow: `0 0 40px ${p.glow}` }}
              >
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                  {/* Image Side */}
                  <div className="lg:w-[55%] relative overflow-hidden min-h-[200px] sm:min-h-[280px]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      style={{ minHeight: '250px' }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0"
                      style={{
                        background: i % 2 === 0
                          ? `linear-gradient(to right, transparent 60%, var(--bg-card) 100%)`
                          : `linear-gradient(to left, transparent 60%, var(--bg-card) 100%)`
                      }}
                    />
                    {/* Project number watermark */}
                    <div className="absolute bottom-3 left-4 font-black text-6xl sm:text-8xl select-none pointer-events-none"
                      style={{ color: p.accent, opacity: 0.15 }}>
                      {p.num}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-[45%] flex flex-col justify-center p-6 sm:p-8 lg:p-10 bg-card">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs tracking-widest" style={{ color: p.accent }}>PROJECT {p.num}</span>
                      <div className="h-px flex-1 opacity-20" style={{ background: p.accent }} />
                    </div>

                    <h3 className="font-black text-xl sm:text-2xl tracking-tight mb-3 leading-tight"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${p.accent}, var(--text-primary))`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}>
                      {p.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed mb-5">{p.desc}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.tech.map(t => (
                        <span key={t}
                          className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold border"
                          style={{ borderColor: p.accent + "40", color: p.accent, background: p.glow }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 flex-wrap">
                      <a href={p.demo} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-black transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${p.accent}, ${p.accent}cc)` }}>
                        ↗ Visit Project
                      </a>
                      <a href={p.github} target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm border border-theme hover:border-theme-md text-primary transition-all hover:-translate-y-0.5">
                        ⌥ Source Code
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
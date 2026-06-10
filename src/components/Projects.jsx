const projects = [
  {
    num: "01",
    title: "Prescripto — Doctor Appointment System",
    desc: "Full-stack MERN doctor appointment platform with real-time slot booking, admin dashboard, doctor management, patient records, UPI payment integration, and JWT authentication. Deployed on Vercel + Render.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Cloudinary"],
    demo: "https://doctor-appointment-frontend-git-master-nikhil1121s-projects.vercel.app/",
    github: "https://github.com/Nikhil1121/Doctor_Appointment_Frontend",
    accent: "#2dd4bf",
    glow: "rgba(45,212,191,0.15)",
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
    glow: "rgba(129,140,248,0.15)",
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
    glow: "rgba(245,158,11,0.15)",
    image: "https://res.cloudinary.com/ddslcdypq/image/upload/v1780737166/project_amazon.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 md:px-16 bg-primary relative overflow-hidden">
      <style>{`
        .proj-card { transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .proj-card:hover { transform: translateY(-6px); }
        .proj-img-wrap { overflow: hidden; position: relative; }
        .proj-img-wrap img { transition: transform 0.6s ease; }
        .proj-card:hover .proj-img-wrap img { transform: scale(1.04); }
        .proj-num-badge {
          position: absolute;
          bottom: 12px;
          right: 16px;
          font-size: clamp(3.5rem, 10vw, 7rem);
          font-weight: 900;
          line-height: 1;
          user-select: none;
          pointer-events: none;
          letter-spacing: -0.04em;
        }
        .browser-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 10px 10px 0 0;
        }
        .browser-dot { width: 11px; height: 11px; border-radius: 50%; }
        .browser-url {
          flex: 1;
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 6px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          opacity: 0.7;
          font-family: monospace;
        }
        .shine-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
          opacity: 0;
          border-radius: inherit;
        }
        .proj-card:hover .shine-overlay { opacity: 1; }
      `}</style>

      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(129,140,248,0.06) 0%,transparent 70%)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-10 sm:mb-16">
          <p className="font-mono text-teal-400 text-xs uppercase tracking-widest mb-2 sm:mb-3">// my work</p>
          <h2 className="font-black tracking-tight text-primary" style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)" }}>
            Featured <span className="grad-text">Projects</span>
          </h2>
          <p className="text-faint text-sm sm:text-base mt-2 sm:mt-3">Things I've built that I'm proud of</p>
        </div>

        <div className="flex flex-col gap-10 sm:gap-14">
          {projects.map((p, i) => (
            <div key={p.num} className="reveal proj-card"
              style={{
                borderRadius: '20px',
                border: `1px solid ${p.accent}30`,
                overflow: 'hidden',
                boxShadow: `0 4px 32px ${p.glow}`,
                background: 'var(--bg-card)',
              }}>
              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                {/* Image Side */}
                <div className="proj-img-wrap lg:w-[55%]"
                  style={{
                    background: `radial-gradient(ellipse at center, ${p.glow} 0%, transparent 65%)`,
                    minHeight: '280px',
                    position: 'relative',
                  }}>

                  {/* Shine overlay on hover */}
                  <div className="shine-overlay"
                    style={{ background: `linear-gradient(135deg, ${p.accent}08 0%, transparent 60%)` }} />

                  {/* Browser mockup */}
                  <div style={{ padding: '16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="browser-bar"
                      style={{ background: 'rgba(0,0,0,0.35)' }}>
                      <div className="browser-dot" style={{ background: '#ff5f57' }} />
                      <div className="browser-dot" style={{ background: '#febc2e' }} />
                      <div className="browser-dot" style={{ background: '#28c840' }} />
                      <div className="browser-url"
                        style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}>
                        {p.demo !== '#' ? p.demo.replace('https://', '').substring(0, 45) : 'localhost:5173'}
                      </div>
                    </div>
                    <div style={{ flex: 1, overflow: 'hidden', borderRadius: '0 0 10px 10px', minHeight: '200px' }}>
                      <img
                        src={p.image}
                        alt={p.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                      />
                    </div>
                  </div>

                  {/* Project number — clearly visible */}
                  <div className="proj-num-badge"
                    style={{
                      color: p.accent,
                      opacity: 0.25,
                      WebkitTextStroke: `1px ${p.accent}`,
                    }}>
                    {p.num}
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-[45%] flex flex-col justify-center p-6 sm:p-8 lg:p-10"
                  style={{ background: 'var(--bg-card)' }}>

                  <div className="flex items-center gap-3 mb-4">
                    <span style={{
                      fontFamily: 'monospace',
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      color: p.accent,
                      fontWeight: 600,
                    }}>
                      PROJECT {p.num}
                    </span>
                    <div style={{ height: '1px', flex: 1, background: p.accent, opacity: 0.25 }} />
                  </div>

                  <h3 className="font-black tracking-tight mb-3 leading-tight"
                    style={{
                      fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                      backgroundImage: `linear-gradient(90deg, ${p.accent} 0%, var(--text-primary) 60%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                    {p.title}
                  </h3>

                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '20px' }}>
                    {p.desc}
                  </p>

                  {/* Tech stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                    {p.tech.map(t => (
                      <span key={t} style={{
                        fontSize: '11px',
                        padding: '3px 10px',
                        borderRadius: '99px',
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        border: `1px solid ${p.accent}50`,
                        color: p.accent,
                        background: `${p.accent}12`,
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a href={p.demo} target="_blank" rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '9px 20px',
                        borderRadius: '99px',
                        fontWeight: 600,
                        fontSize: '13px',
                        color: '#000',
                        background: p.accent,
                        textDecoration: 'none',
                        transition: 'opacity 0.2s, transform 0.2s',
                      }}
                      onMouseOver={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseOut={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                      ↗ Visit Project
                    </a>
                    <a href={p.github} target="_blank" rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '9px 20px',
                        borderRadius: '99px',
                        fontWeight: 600,
                        fontSize: '13px',
                        color: 'var(--text-primary)',
                        background: 'transparent',
                        border: `1px solid ${p.accent}50`,
                        textDecoration: 'none',
                        transition: 'border-color 0.2s, transform 0.2s',
                      }}
                      onMouseOver={e => { e.currentTarget.style.borderColor = p.accent; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseOut={e => { e.currentTarget.style.borderColor = `${p.accent}50`; e.currentTarget.style.transform = 'translateY(0)'; }}>
                      ⌥ Source Code
                    </a>
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
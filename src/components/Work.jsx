import { useState } from "react";

const experiences = [
  {
    role: "Backend Developer Intern",
    company: "Rablo.in",
    period: "Nov 2024 – Feb 2025",
    points: [
      "Developed a real-time chat system using WebSockets and REST APIs, improving platform communication efficiency.",
      "Refactored legacy codebase, increasing maintainability and reducing bug frequency by 60%.",
      "Optimized database queries, reducing API response time by 30%.",
      "Documented backend modules and API services, enhancing onboarding efficiency.",
    ],
    stack: "Node.js, Express.js, MongoDB, WebSockets, JWT, Postman, Git, GitHub, Jira",
    type: "internship",
  },
  {
    role: "Web Page Designing & Development Program",
    company: "BECIL — Ministry of Electronics & IT, Govt. of India",
    period: "Jul 2024 – Sep 2024",
    points: [
      "Completed an intensive Web Page Designing & Development Program at Bhopal center.",
      "Trained under Capacity Building Program in Key IT Technologies & Employability Enhancement.",
      "Program funded by the Ministry of Electronics and Information Technology, Government of India.",
      "Certificate issued on 07-10-2024 (No: BP/14404/8080).",
    ],
    stack: "HTML, CSS, JavaScript, Web Development",
    type: "certificate",
    certImage: "/certificate.jpg",
  },
];

export default function Work() {
  const [showCert, setShowCert] = useState(false);

  return (
    <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 md:px-16 bg-secondary">
      <div className="max-w-7xl mx-auto">

        <div className="reveal mb-6 sm:mb-8">
          <h2 className="font-black grad-text" style={{ fontSize: "clamp(1.8rem,5vw,3rem)" }}>Work Experience</h2>
          <p className="text-faint text-sm sm:text-base mt-1">Here's a quick rundown of my most recent experiences.</p>
        </div>

        <div className="mt-6 sm:mt-10 flex flex-col gap-0">
          {experiences.map((exp, i) => (
            <div key={i} className="reveal flex gap-4 sm:gap-6" style={{ transitionDelay: `${i * 0.15}s` }}>

              {/* Timeline */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="timeline-dot" />
                {i < experiences.length - 1 && (
                  <div className="w-px flex-1 mt-2"
                    style={{ background: "linear-gradient(to bottom,#2dd4bf44,transparent)", minHeight: "50px" }} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8 sm:pb-12">
                {/* Mobile: stacked, Desktop: side by side */}
                <div className="flex flex-col sm:flex-col lg:flex-row lg:gap-12">

                  {/* Role info */}
                  <div className="lg:w-60 flex-shrink-0 mb-4">
                    <h3 className="font-bold text-base sm:text-lg md:text-xl text-primary leading-snug">{exp.role}</h3>
                    <p className="text-muted text-xs sm:text-sm mt-1">{exp.company}</p>
                    <p className="text-teal-400 font-mono text-xs mt-2">[ {exp.period} ]</p>
                    {exp.type === "certificate" && (
                      <button onClick={() => setShowCert(true)}
                        className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border border-teal-400/40 text-teal-400 hover:bg-teal-400/10 transition-all">
                        📜 View Certificate
                      </button>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 border-t border-theme lg:border-t-0 lg:border-l lg:border-theme pt-4 lg:pt-0 lg:pl-8">
                    <ul className="flex flex-col gap-2 mb-3">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="text-muted text-xs sm:text-sm md:text-base leading-relaxed flex gap-2">
                          <span className="text-teal-400 flex-shrink-0 mt-0.5">—</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-faint text-xs font-mono mt-2">
                      <span className="text-muted">Tech Stack: </span>{exp.stack}
                    </p>
                    <div className="mt-4 border-t border-theme" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-2">
          <a href="https://github.com/Nikhil1121" target="_blank" rel="noreferrer" className="btn-hire text-sm sm:text-base">
            Checkout GitHub &rsaquo;
          </a>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)" }}
          onClick={() => setShowCert(false)}>
          <div className="relative w-full max-w-3xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowCert(false)}
              className="absolute -top-9 right-0 text-white text-xl hover:text-teal-400 transition-colors font-bold">✕</button>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="/certificate.jpg" alt="Certificate" className="w-full h-auto" />
            </div>
            <p className="text-center text-gray-400 text-xs sm:text-sm mt-3 font-mono px-2">
              Web Page Designing & Development Program — BECIL, Govt. of India
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

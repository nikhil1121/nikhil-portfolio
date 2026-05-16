const skillCards = [
  {
    title: "Programming Languages", className: "skill-card-purple",
    icons: [
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    ],
  },
  {
    title: "Web Development", className: "skill-card-gold",
    icons: [
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    ],
  },
  {
    title: "Tools", className: "skill-card-pink",
    icons: [
      { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
  },
  {
    title: "Other", className: "skill-card-teal",
    icons: [
      { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 md:px-16 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Left — text */}
          <div className="w-full lg:flex-1 reveal-left">
            <h2 className="font-black text-2xl sm:text-3xl md:text-4xl mb-5 about-heading-bar text-primary">
              A Bit About Me &amp; My Skills
            </h2>
            <p className="text-muted text-sm sm:text-base md:text-lg leading-loose mb-4" style={{ textAlign: "justify" }}>
              I am a passionate and self-motivated Frontend Developer with a keen interest in Artificial Intelligence.
              I enjoy solving problems through code and building interactive, responsive applications that provide smooth
              and engaging user experiences.
            </p>
            <p className="text-muted text-sm sm:text-base md:text-lg leading-loose" style={{ textAlign: "justify" }}>
              Beyond coding, I actively participate in open-source communities and continuously seek opportunities to grow
              as a developer. My commitment to innovation, teamwork, and continuous learning defines my approach to
              building software that makes an impact.
            </p>
          </div>

          {/* Right — skill cards */}
          <div className="w-full lg:flex-1 grid grid-cols-2 gap-3 sm:gap-5 reveal-right">
            {skillCards.map((card, ci) => (
              <div key={card.title}
                className={`${card.className} skill-card-hover rounded-xl p-4 sm:p-6 reveal-scale delay-${ci + 1}`}>
                <h3 className="text-white font-bold text-xs sm:text-sm mb-3 sm:mb-5 font-mono">{card.title}</h3>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  {card.icons.map((icon) => (
                    <div key={icon.name} className="flex flex-col items-center gap-1 group">
                      <img src={icon.src} alt={icon.name}
                        className="w-8 h-8 sm:w-12 sm:h-12 object-contain icon-bounce"
                        onError={(e) => { e.target.style.display = "none"; }} />
                      <span className="text-white/70 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
                        {icon.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

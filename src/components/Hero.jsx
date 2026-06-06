export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-16 overflow-hidden bg-primary">
      <div className="hero-blob absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[700px] h-[300px] sm:h-[400px] md:h-[500px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-10 sm:opacity-20"
        style={{ backgroundImage: "radial-gradient(rgba(45,212,191,0.3) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto pt-20 sm:pt-24 pb-10 sm:pb-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10">

          {/* Text — bottom on mobile, left on desktop */}
          <div className="flex-1 text-center md:text-left reveal-left w-full">
            <h1 className="font-black leading-tight mb-5 text-primary"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.5rem)" }}>
              Hello! I'm{" "}
              <span className="grad-text">Nikhil Shendre</span>
              , an aspiring AI Engineer passionate about innovation
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-6 justify-center md:justify-start">
              <a href="#contact" className="btn-hire text-sm sm:text-base">Hire Me &rsaquo;</a>
              <a href="/Nikhil-Resume-008.pdf" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-sm sm:text-base transition-colors hover:text-teal-400 text-muted">
                View Resume &rsaquo;
              </a>
            </div>

            <div className="mt-10 sm:mt-16 text-faint text-xl sm:text-2xl tracking-widest select-none">~ ~ ~</div>
          </div>

          {/* Photo — top on mobile, right on desktop */}
          <div className="flex-shrink-0 reveal-right flex justify-center">
            <div className="float-anim relative">
              <div className="absolute -inset-2 rounded-full opacity-40 blur-md"
                style={{ background: "linear-gradient(135deg,#2dd4bf,#818cf8)" }} />
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4"
                style={{ borderColor: "rgba(45,212,191,0.5)" }}>
                <img src="/nikhil_pic.jpeg" alt="Nikhil Shendre"
                  className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const MATH_Q = [
  { q: "What is 3 + 5?",  a: "8"  },
  { q: "What is 10 - 4?", a: "6"  },
  { q: "What is 2 × 6?",  a: "12" },
  { q: "What is 15 ÷ 3?", a: "5"  },
  { q: "What is 7 + 8?",  a: "15" },
];
const getQ = () => MATH_Q[Math.floor(Math.random() * MATH_Q.length)];

const SOCIALS = [
  {
    label: "GitHub", href: "https://github.com/Nikhil1121",
    icon: <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
  },
  {
    label: "LinkedIn", href: "https://www.linkedin.com/in/nikhil-shendre-523218381",
    icon: <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: "Instagram", href: "https://www.instagram.com/nikhil_7454",
    icon: <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  },
  {
    label: "Email", href: "mailto:nikhilshendre008@gmail.com",
    icon: <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
  },
];

export default function Contact() {
  const [captcha] = useState(getQ);
  const [form, setForm]     = useState({ name:"", phone:"", email:"", message:"", captcha:"" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required.";
    if (!form.phone.trim())   e.phone   = "Phone required.";
    else if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = "Enter valid 10-digit mobile.";
    if (!form.email.trim())   e.email   = "Email required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter valid email.";
    if (!form.message.trim()) e.message = "Message required.";
    if (!form.captcha.trim()) e.captcha = "Please answer.";
    else if (form.captcha.trim() !== captcha.a) e.captcha = "Wrong answer!";
    return e;
  };

  const handleChange = (e) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
    setErrors(p => ({ ...p, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus("sending");
    try {
      await addDoc(collection(db, "contacts"), {
        name:      form.name,
        phone:     form.phone,
        email:     form.email,
        message:   form.message,
        timestamp: serverTimestamp(),
        read:      false,
      });
      setStatus("success");
      setForm({ name:"", phone:"", email:"", message:"", captcha:"" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const inp = (field, round = "rounded-full") =>
    `w-full bg-input border ${errors[field] ? "border-red-500/60" : "border-theme"} ${round} px-4 sm:px-6 py-3 sm:py-3.5 text-sm placeholder-faint focus:outline-none focus:border-teal-500/50 input-glow transition-all text-primary`;

  return (
    <section id="contact" className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-16 bg-footer border-t border-theme overflow-hidden">
      <div className="absolute top-10 left-10 sm:left-40 w-48 sm:w-72 h-48 sm:h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(45,212,191,0.10) 0%,transparent 70%)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT */}
          <div className="reveal-left">
            <div className="mb-7 sm:mb-10">
              <p className="text-primary font-black text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">GENERAL</p>
              <div className="flex flex-wrap gap-x-5 sm:gap-x-6 gap-y-2">
                {["Home","About","Projects","Work"].map(l => (
                  <a key={l} href={`#${l.toLowerCase()}`}
                    className="text-muted hover:text-teal-400 text-sm sm:text-base transition-colors">{l}</a>
                ))}
              </div>
            </div>

            <div className="mb-7 sm:mb-10">
              <p className="text-primary font-black text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">SOCIAL</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label}
                    className="social-icon w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-theme bg-card flex items-center justify-center text-muted hover:text-teal-400 hover:border-teal-400/50 hover:bg-teal-400/10">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border border-theme bg-card">
              <p className="text-teal-400 font-mono text-xs uppercase tracking-wider mb-3">// direct contact</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:nikhilshendre008@gmail.com"
                  className="text-muted text-xs sm:text-sm flex items-center gap-2 hover:text-teal-400 transition-colors">
                  <span className="text-teal-400 flex-shrink-0">✉</span>
                  <span className="font-mono break-all">nikhilshendre008@gmail.com</span>
                </a>
                <a href="tel:+916263058281"
                  className="text-muted text-xs sm:text-sm flex items-center gap-2 hover:text-teal-400 transition-colors">
                  <span className="text-teal-400 flex-shrink-0">📞</span>
                  <span className="font-mono">+91 62630-58281</span>
                </a>
                <a href="https://www.instagram.com/nikhil_7454" target="_blank" rel="noreferrer"
                  className="text-muted text-xs sm:text-sm flex items-center gap-2 hover:text-teal-400 transition-colors">
                  <span className="text-teal-400 flex-shrink-0">📸</span>
                  <span className="font-mono">@nikhil_7454</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="reveal-right">
            <h2 className="font-black text-2xl sm:text-3xl md:text-4xl mb-5 sm:mb-7 grad-text">Get In Touch</h2>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center bg-card rounded-2xl border border-theme p-6">
                <div className="w-14 h-14 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-2xl text-teal-400">✓</div>
                <h3 className="text-lg font-bold grad-text">Message Sent!</h3>
                <p className="text-muted text-sm">Thanks! I'll get back to you soon.</p>
                <button onClick={() => setStatus("idle")}
                  className="mt-2 text-xs font-mono text-faint hover:text-teal-400 underline transition-colors">
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 bg-card border border-theme rounded-2xl p-4 sm:p-6 md:p-8" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Enter Your Name" className={inp("name")} />
                    {errors.name && <p className="text-red-400 text-xs mt-1.5 px-2 font-mono">{errors.name}</p>}
                  </div>
                  <div>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" maxLength={10} className={inp("phone")} />
                    {errors.phone && <p className="text-red-400 text-xs mt-1.5 px-2 font-mono">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter Your Email" className={inp("email")} />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5 px-2 font-mono">{errors.email}</p>}
                </div>
                <div>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Enter message" rows={4} className={inp("message","rounded-2xl")} />
                  {errors.message && <p className="text-red-400 text-xs mt-1.5 px-2 font-mono">{errors.message}</p>}
                </div>
                <div className="bg-input border border-theme rounded-xl px-4 sm:px-5 py-3 sm:py-4">
                  <p className="text-teal-400 text-xs font-mono uppercase tracking-wider mb-2">🤖 Not a robot?</p>
                  <p className="text-muted text-sm mb-2">{captcha.q}</p>
                  <input name="captcha" value={form.captcha} onChange={handleChange} placeholder="Your answer..."
                    className={`w-full bg-card border ${errors.captcha?"border-red-500/60":"border-theme"} rounded-full px-4 py-2 text-sm placeholder-faint font-mono focus:outline-none focus:border-teal-500/50 input-glow transition-all text-primary`} />
                  {errors.captcha && <p className="text-red-400 text-xs mt-1.5 font-mono">{errors.captcha}</p>}
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-xs font-mono text-center">⚠ Failed. Email: nikhilshendre008@gmail.com</p>
                )}
                <div className="flex justify-end mt-1">
                  <button type="submit" disabled={status==="sending"}
                    className="px-8 sm:px-10 py-3 font-bold text-sm rounded-full text-white tracking-wide transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95 disabled:opacity-60 w-full sm:w-auto"
                    style={{ background:"linear-gradient(135deg,#6366f1,#818cf8)" }}>
                    {status==="sending" ? "Sending..." : "Contact Me!"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

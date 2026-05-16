import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection, getDocs, orderBy, query,
  doc, updateDoc, deleteDoc, onSnapshot
} from "firebase/firestore";

const ADMIN_PASSWORD = "Nikhil@1234";

export default function AdminPanel() {
  const [authed, setAuthed]     = useState(false);
  const [password, setPassword] = useState("");
  const [pwError, setPwError]   = useState("");
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading]   = useState(false);
  const [filter, setFilter]     = useState("all");
  const [selected, setSelected] = useState(null);

  const login = () => {
    if (password === ADMIN_PASSWORD) { setAuthed(true); setPwError(""); }
    else { setPwError("Wrong password! Try again."); }
  };

  /* Real-time listener — auto update jab bhi naya message aaye */
  useEffect(() => {
    if (!authed) return;
    setLoading(true);
    const q = query(collection(db, "contacts"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setContacts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, [authed]);

  const markRead = async (id) => {
    await updateDoc(doc(db, "contacts", id), { read: true });
    setContacts(prev => prev.map(c => c.id === id ? { ...c, read: true } : c));
    if (selected?.id === id) setSelected(s => ({ ...s, read: true }));
  };

  const deleteMsg = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    await deleteDoc(doc(db, "contacts", id));
    setContacts(prev => prev.filter(c => c.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const openMsg = (c) => {
    setSelected(c);
    if (!c.read) markRead(c.id);
  };

  const filtered = contacts.filter(c =>
    filter === "all" ? true : filter === "unread" ? !c.read : c.read
  );
  const unreadCount = contacts.filter(c => !c.read).length;

  const fmt = (ts) => {
    if (!ts) return "—";
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleString("en-IN", { day:"2-digit", month:"short", year:"numeric", hour:"2-digit", minute:"2-digit" });
  };

  /* ── LOGIN ── */
  if (!authed) return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background:"#0d1117" }}>
      <div className="w-full max-w-sm p-6 sm:p-8 rounded-2xl border border-white/10" style={{ background:"#111827" }}>
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-black"
            style={{ background:"linear-gradient(135deg,#818cf8,#2dd4bf)" }}>N</div>
          <h1 className="text-white font-black text-xl sm:text-2xl">Admin Panel</h1>
          <p className="text-gray-500 text-sm mt-1">Nikhil Shendre — Portfolio</p>
        </div>
        <div className="flex flex-col gap-3">
          <input type="password" value={password}
            onChange={e => { setPassword(e.target.value); setPwError(""); }}
            onKeyDown={e => e.key === "Enter" && login()}
            placeholder="Enter admin password"
            className="w-full bg-[#0d1117] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-teal-500/50" />
          {pwError && <p className="text-red-400 text-xs font-mono">{pwError}</p>}
          <button onClick={login}
            className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background:"linear-gradient(135deg,#6366f1,#818cf8)" }}>
            Login →
          </button>
        </div>
      </div>
    </div>
  );

  /* ── DASHBOARD ── */
  return (
    <div className="min-h-screen" style={{ background:"#0d1117", color:"#e2e8f0", fontFamily:"Inter,sans-serif" }}>

      {/* Header */}
      <div className="border-b border-white/5 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between sticky top-0 z-10"
        style={{ background:"#0a0f1a" }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-black text-sm"
            style={{ background:"linear-gradient(135deg,#818cf8,#2dd4bf)" }}>N</div>
          <div>
            <p className="font-bold text-white text-sm">Admin Panel</p>
            <p className="text-gray-500 text-xs hidden sm:block">Nikhil Shendre Portfolio</p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Live indicator */}
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-mono hidden sm:block">Live</span>
          </div>
          <button onClick={() => { setAuthed(false); setSelected(null); }}
            className="text-xs text-gray-500 hover:text-red-400 transition-colors border border-white/10 px-3 py-1.5 rounded-full">
            Logout
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5">
        {[
          { label:"Total",   value: contacts.length,                  color:"#2dd4bf" },
          { label:"Unread",  value: unreadCount,                      color:"#818cf8" },
          { label:"Read",    value: contacts.length - unreadCount,    color:"#22c55e" },
        ].map(s => (
          <div key={s.label} className="rounded-xl border border-white/5 p-3 sm:p-4" style={{ background:"#111827" }}>
            <p className="text-xl sm:text-2xl font-black" style={{ color:s.color }}>{s.value}</p>
            <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div className="px-4 sm:px-6 pb-3 sm:pb-4 flex gap-2">
        {["all","unread","read"].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-all flex items-center gap-1.5 ${filter===f ? "bg-teal-500/20 text-teal-400 border border-teal-500/40" : "text-gray-500 border border-white/5 hover:border-white/10"}`}>
            {f}
            {f === "unread" && unreadCount > 0 && (
              <span className="bg-indigo-500 text-white rounded-full px-1.5 py-0.5 text-xs font-black leading-none">
                {unreadCount}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="px-4 sm:px-6 pb-10">
        {loading ? (
          <div className="text-center py-20 text-gray-500 text-sm">Loading messages...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500 text-sm">
            {filter === "unread" ? "No unread messages 🎉" : "No messages yet."}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* Message List */}
            <div className="flex flex-col gap-3">
              {filtered.map(c => (
                <div key={c.id} onClick={() => openMsg(c)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all hover:-translate-y-0.5 ${selected?.id===c.id ? "border-teal-500/50 bg-teal-500/5" : c.read ? "border-white/5" : "border-indigo-500/40 bg-indigo-500/5"}`}
                  style={{ background: selected?.id===c.id ? undefined : c.read ? "#111827" : undefined }}>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 min-w-0">
                      {!c.read && <span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />}
                      <p className="font-semibold text-white text-sm truncate">{c.name}</p>
                    </div>
                    <p className="text-gray-600 text-xs flex-shrink-0">{fmt(c.timestamp)}</p>
                  </div>
                  <p className="text-gray-400 text-xs font-mono mb-1 truncate">{c.email} · {c.phone}</p>
                  <p className="text-gray-500 text-xs line-clamp-2">{c.message}</p>
                </div>
              ))}
            </div>

            {/* Message Detail */}
            {selected && (
              <div className="rounded-xl border border-white/8 p-5 sm:p-6 lg:sticky lg:top-20 h-fit"
                style={{ background:"#111827" }}>

                {/* Action buttons */}
                <div className="flex items-center justify-between mb-5 gap-2 flex-wrap">
                  <h3 className="font-bold text-white text-base">{selected.name}</h3>
                  <div className="flex gap-2 flex-wrap">
                    <a href={`mailto:${selected.email}`}
                      className="text-xs px-3 py-1.5 rounded-full font-semibold text-black transition-all hover:opacity-90"
                      style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)" }}>
                      ✉ Reply
                    </a>
                    <a href={`tel:${selected.phone}`}
                      className="text-xs px-3 py-1.5 rounded-full font-semibold text-white border border-green-500/40 hover:bg-green-500/10 transition-all">
                      📞 Call
                    </a>
                    <button onClick={() => deleteMsg(selected.id)}
                      className="text-xs px-3 py-1.5 rounded-full text-red-400 border border-red-400/30 hover:bg-red-400/10 transition-all">
                      🗑
                    </button>
                  </div>
                </div>

                {/* Info rows */}
                <div className="flex flex-col gap-0 mb-5 rounded-xl overflow-hidden border border-white/5">
                  {[
                    { label:"Email",  value:selected.email,  href:`mailto:${selected.email}` },
                    { label:"Phone",  value:selected.phone,  href:`tel:${selected.phone}` },
                    { label:"Time",   value:fmt(selected.timestamp) },
                    { label:"Status", value:selected.read ? "Read ✓" : "Unread", color: selected.read ? "#22c55e" : "#818cf8" },
                  ].map((r, i) => (
                    <div key={r.label}
                      className={`flex gap-3 text-sm px-4 py-3 ${i % 2 === 0 ? "bg-white/2" : ""}`}>
                      <span className="text-gray-500 w-14 flex-shrink-0 text-xs pt-0.5">{r.label}</span>
                      {r.href
                        ? <a href={r.href} className="text-teal-400 hover:underline font-mono text-xs break-all">{r.value}</a>
                        : <span className="font-mono text-xs" style={{ color: r.color || "#e2e8f0" }}>{r.value}</span>
                      }
                    </div>
                  ))}
                </div>

                {/* Message */}
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-mono mb-2">Message</p>
                  <div className="rounded-xl p-4 text-gray-300 text-sm leading-relaxed border border-white/5"
                    style={{ background:"#0d1117" }}>
                    {selected.message}
                  </div>
                </div>

                {/* Quick reply via WhatsApp */}
                <a href={`https://wa.me/91${selected.phone}?text=Hi ${selected.name}, I'm Nikhil Shendre. I saw your message on my portfolio!`}
                  target="_blank" rel="noreferrer"
                  className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm text-white border border-green-500/30 hover:bg-green-500/10 transition-all">
                  💬 Reply on WhatsApp
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

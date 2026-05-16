# 🔥 Firebase Setup — Contact Form + Admin Panel

## Step 1 — Firebase Project banao (FREE)
1. https://console.firebase.google.com → Login with Google
2. "Add Project" → naam do "nikhil-portfolio" → Create

## Step 2 — Web App add karo
1. Project Overview → Web icon (</>)
2. App naam do "portfolio" → Register
3. **Firebase config copy karo** — kuch aisa dikhega:
```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "nikhil-portfolio-xxx.firebaseapp.com",
  projectId: "nikhil-portfolio-xxx",
};
```

## Step 3 — Firestore Database enable karo
1. Left menu → "Firestore Database" → Create Database
2. **Start in TEST MODE** select karo → Next → Enable

## Step 4 — Config update karo
Dono files mein FIREBASE_CONFIG replace karo:
- `src/components/Contact.jsx`
- `src/admin/AdminPanel.jsx`

## Step 5 — Admin password change karo
`src/admin/AdminPanel.jsx` mein line:
```js
const ADMIN_PASSWORD = "nikhil@admin2025"; // apna password set karo
```

## Done! 🎉
- Portfolio: https://nikhil-portfolio.vercel.app
- Admin Panel: https://nikhil-portfolio.vercel.app/admin
  → Login karo apne password se
  → Saare contact messages dikhenge
  → Reply button se directly email karo
  → Call button se phone karo

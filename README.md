# Nikhil Shendre — Portfolio

A dark & minimal React portfolio built with Vite.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── App.jsx               # Root component
├── styles.css            # Global styles & CSS variables
├── main.jsx              # Entry point
└── components/
    ├── Navbar.jsx / .css
    ├── Hero.jsx / .css
    ├── About.jsx / .css
    ├── Skills.jsx / .css
    ├── Projects.jsx / .css
    ├── Contact.jsx / .css
    └── Footer.jsx / .css
```

## ✏️ Customization

- **Projects** → Edit `src/components/Projects.jsx` → update `projects` array
- **Skills** → Edit `src/components/Skills.jsx` → update `skillCategories`
- **Contact links** → Edit `src/components/Contact.jsx` → update `contacts`
- **Colors** → Edit `src/styles.css` → change `--accent` variable

## 🌐 Deployment

Deploy easily on **Vercel** or **Netlify**:
- Connect your GitHub repo
- Build command: `npm run build`
- Output directory: `dist`

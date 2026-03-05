# ✨ Neon Portfolio Template

A stunning, modern portfolio template built for **UI/UX Designers**, **Creative Technologists**, and **Frontend Developers**. Dark-themed, animation-rich, and fully customizable — make it yours in minutes.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🚀 Live Preview

> Coming soon — or deploy your own with one click below!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DevShrimali/neon-template)

---

## 🎨 Features

- **Dark Neon Aesthetic** — Premium dark theme with vibrant accent colors
- **GSAP Animations** — Smooth scroll-triggered animations & micro-interactions
- **Smooth Scrolling** — Powered by Lenis for a buttery-smooth experience
- **Custom Cursor** — Interactive custom cursor that reacts to elements
- **Fully Responsive** — Looks great on mobile, tablet, laptop & desktop
- **Google Fonts** — Playfair Display, DM Sans & JetBrains Mono
- **SEO Optimized** — Proper meta tags, semantic HTML & heading structure
- **Easy to Customize** — Swap colors, text, and images to make it yours

---

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with Turbopack |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS |
| [GSAP 3](https://gsap.com/) | Professional-grade animations |
| [Framer Motion](https://www.framer.com/motion/) | React animation library |
| [Lenis](https://lenis.darkroom.engineering/) | Smooth scroll |
| [Lucide Icons](https://lucide.dev/) | Beautiful open-source icons |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/DevShrimali/neon-template.git
cd neon-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser — you're live! 🎉

---

## ✏️ How to Customize

This template is designed to be **easily personalized**. Here's what to change:

### 🎨 Colors & Theme

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --bg-primary: #08090A;        /* Main background */
  --accent-primary: #C8FF57;    /* Neon green accent — change this! */
  --accent-secondary: #FF5733;  /* Secondary accent */
  --accent-tertiary: #5B8FFF;   /* Tertiary accent */
  --text-primary: #F0EDE8;      /* Main text color */
}
```

### 👤 Personal Info

Update your name, title, location, and bio in:

- `src/components/home/Hero.tsx` — Name, title, tagline
- `src/components/home/About.tsx` — About section
- `src/components/home/Skills.tsx` — Your skills
- `src/components/home/Process.tsx` — Your design process
- `src/components/home/Work.tsx` — Your projects/case studies
- `src/components/home/Journey.tsx` — Your career timeline
- `src/components/home/Contact.tsx` — Contact details

### 📝 SEO & Metadata

Update the site title and description in `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your portfolio description here.",
};
```

### 🖼️ Assets

Replace the files in the `public/` folder with your own images and assets.

---

## 📁 Project Structure

```
neon-template/
├── public/                  # Static assets (images, icons)
├── src/
│   ├── app/
│   │   ├── globals.css      # 🎨 Theme & design tokens
│   │   ├── layout.tsx       # Root layout & fonts
│   │   ├── page.tsx         # Home page
│   │   └── work/
│   │       └── page.tsx     # Work/portfolio page
│   ├── components/
│   │   ├── home/            # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Work.tsx
│   │   │   ├── Journey.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/              # Reusable UI components
│   │       ├── Navbar.tsx
│   │       ├── Footer.tsx
│   │       ├── CustomCursor.tsx
│   │       └── SmoothScroll.tsx
│   └── lib/
│       └── utils.ts         # Utility functions
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click **Deploy** — that's it!

### Other Platforms

```bash
npm run build    # Build for production
npm run start    # Start production server
```

Works with any platform that supports Node.js (Netlify, Railway, Render, etc.)

---

## 🤝 Contributing

Found a bug or want to improve the template? Contributions are welcome!

1. Fork the repository
2. Create your branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Feel free to use it for personal or commercial projects.

---

## ⭐ Support

If you found this template helpful, please give it a **star** on GitHub — it helps others discover it too!

---

<p align="center">
  Made with 🖤 by <a href="https://github.com/DevShrimali">Dev Shrimali</a>
</p>

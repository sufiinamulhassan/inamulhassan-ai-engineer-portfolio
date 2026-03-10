# 🚀 Professional Portfolio Website

A stunning, highly interactive portfolio website built with **React**, **Three.js**, **GSAP**, and **Framer Motion**. This project features a unique interactive character, smooth scrolling, and modern aesthetics.

---

## 🛠️ Tech Stack

- **Core:** React, TypeScript, Vite
- **3D Graphics:** Three.js, @react-three/fiber, @react-three/drei
- **Animations:** GSAP (GreenSock), Framer Motion
- **Styling:** CSS3 (Vanilla)
- **Deployment:** Vercel

---

## 📂 Folder Structure

Understanding the project structure will help you navigate and customize the code effectively.

```text
├── public/                 # Static assets (Favicon, CV, Images)
│   ├── CV.pdf              # Your resume/CV file
│   └── images/             # Images used in the project
├── src/
│   ├── assets/             # Project-specific assets
│   ├── components/         # React components
│   │   ├── Character/      # 3D Character related components
│   │   ├── styles/         # Component-specific CSS files
│   │   ├── utils/          # Helper functions (e.g., text splitting)
│   │   ├── Navbar.tsx      # Navigation Bar
│   │   ├── Landing.tsx     # Hero/Landing Section
│   │   ├── About.tsx       # About Me Section
│   │   ├── TechStack.tsx   # Skills/Tech Stack Grid
│   │   ├── Work.tsx        # Projects Showcase
│   │   └── Contact.tsx     # Contact Form/Links
│   ├── data/
│   │   └── boneData.ts     # Data for the interactive character
│   ├── App.tsx             # Main Application entry
│   ├── main.tsx            # React DOM mounting
│   └── index.css           # Global styles
├── package.json            # Project dependencies and scripts
└── vite.config.ts          # Vite configuration
```

---

## ⚡ Getting Started

Follow these steps to get a local copy up and running.

### 1. Clone the Repository
Open your terminal and run:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```

### 2. Navigate to the Folder
```bash
cd YOUR_REPOSITORY_NAME
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Locally
```bash
npm run dev
```
The site will be available at `http://localhost:5173`.

---

## ✍️ How to Add Your Own Data

To make this portfolio yours, update the following files:

1.  **Resume/CV:** Replace `public/CV.pdf` with your own resume. Keep the filename as `CV.pdf`.
2.  **Branding:** Update `index.html` (for the `<title>` tag) and `public/favicon.ico`.
3.  **Personal Info:** Edit the sections in `src/components/`:
    - `About.tsx`: Your biography and background.
    - `Career.tsx` / `Certifications.tsx`: Your professional history and awards.
    - `Work.tsx`: Your projects (add image URLs and project links).
    - `Contact.tsx`: Your email and social media links.
4.  **Tech Stack:** Update `src/components/TechStack.tsx` with your specific skills and icons.

---

## 🚀 Deployment on Vercel

This project is optimized for deployment on Vercel.

### Step 1: Connect to Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click on the **"+ New Project"** button.
3. Import your GitHub repository.

### Step 2: Configure Settings
Vercel should automatically detect the Vite preset. Ensure:
- **Framework Preset:** `Vite`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### Step 3: Deploy
1. Click **"Deploy"**.
2. Vercel will build and host your site automatically.
3. Every time you `git push`, Vercel will re-deploy the updates!

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---
**Made with ❤️ by [Your Name]**

# 🚀 Portfolio Website Deployment Guide

This project is built with **Vite**, **React**, and **TypeScript**. Follow these simple steps to deploy your portfolio to **Vercel**.

## 1️⃣ Prerequisites
- A [Vercel](https://vercel.com/) account (Free tier).
- Your project uploaded to a **GitHub**, **GitLab**, or **Bitbucket** repository.

---

## 2️⃣ Step-by-Step Deployment

### Step 1: Connect to Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click on the **"+ New Project"** button.
3. Select your repository from the list (you may need to install the Vercel GitHub App if it's your first time).

### Step 2: Configure Project Settings
Vercel automatically detects Vite projects. Ensure the following settings are correct (they usually are by default):
- **Framework Preset:** Vite
- **Root Directory:** `./`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### Step 3: Deployment
1. Click the **"Deploy"** button.
2. Wait for a minute while Vercel builds your site.
3. Once finished, you will see a preview and a **Production URL** (e.g., `your-name.vercel.app`).

---

## 💡 Pro Tips

### 🔄 Automatic Updates
Every time you **push code** to your GitHub repository, Vercel will automatically trigger a new build and update your live website.

### 📄 How to Update Your Resume
If you want to update your resume in the future:
1. Replace the `public/CV.pdf` file with your new version.
2. Ensure the filename stays exactly `CV.pdf`.
3. Push the change to GitHub, and the download link on your site will update automatically!

### ⚙️ Environment Variables
If you ever add backend services (like email forms) that require API keys:
1. Go to your project settings in Vercel.
2. Select **"Environment Variables"**.
3. Add your keys there so they aren't exposed in your code.

---

**Congratulations on your new portfolio! 🎉**

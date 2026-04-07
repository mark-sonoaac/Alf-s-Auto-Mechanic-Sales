SONOAAC — Setup Instructions

This folder contains the full source code for **Alf's Auto Mechanic & Sales** website.
Follow the steps below to get it running on your machine and push it to GitHub.


Step 1 — Install Node.js

1. Go to **https://nodejs.org**
2. Download the **LTS** version (the one labeled "Recommended for most users")
3. Run the installer — click Next through all steps, keep all defaults
4. When done, open a terminal (search "cmd" or "PowerShell" on Windows) and confirm it worked:

```
node -v
npm -v
```

Both commands should print a version number.

---

Step 2 — Install Visual Studio Code

1. Go to **https://code.visualstudio.com**
2. Download and install for your operating system
3. Open VS Code, then open this project folder:
   - Go to **File → Open Folder**
   - Select the folder you copied from the USB drive

Step 3 — Install Project Dependencies

In VS Code, open the built-in terminal:
- Go to **Terminal → New Terminal** (or press `` Ctrl+` ``)

Then run these two commands **in order**:

```
cd frontend
npm install
```

This downloads all the packages the site needs. It only needs to be done once.

---

Step 4 — Run the Site Locally

Still inside the `frontend/` folder in your terminal:

```
npm run dev
```

Then open your browser and go to:

```
http://localhost:3000
```

You should see the Alf's Auto website running locally. Press `Ctrl+C` in the terminal to stop it.

---

Step 5 — Push to GitHub

### If you don't have Git installed:

1. Go to **https://git-scm.com**
2. Download and install Git (keep all defaults)
3. Restart VS Code after installing

### Create a GitHub repository:

1. Go to **https://github.com** and sign in (or create a free account)
2. Click the **+** button → **New repository**
3. Name it (e.g. `alfs-auto-website`), set it to **Private** or **Public**, do **not** check "Add README"
4. Click **Create repository**
5. GitHub will show you a page with setup commands — copy the URL (looks like `https://github.com/yourname/alfs-auto-website.git`)

### Connect and push from your terminal (open in the **project root**, not inside `frontend/`):

```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourname/alfs-auto-website.git
git push -u origin main
```

Replace the URL with your actual GitHub repo URL from Step 5.

---

Step 6 — Deploy to Vercel (optional)

The site is configured to deploy on Vercel automatically.

1. Go to **https://vercel.com** and sign in with your GitHub account
2. Click **Add New → Project**
3. Import your GitHub repository
4. Vercel will detect the settings automatically — just click **Deploy**
5. Your site will be live at a `.vercel.app` URL within a minute

---

## Folder Overview

```
ProjectAutoRepair/
├── frontend/          Main site code — work here
│   ├── src/
│   │   ├── pages/     Each page of the website
│   │   ├── components/  Header, Footer, Navigation, modals
│   │   └── data/      carInventory.js — edit this to update car listings
│   └── public/
│       └── images/    All photos used on the site
├── vercel.json        Deployment config (do not edit)
└── README.md          Project summary
```

## Updating Car Listings

To add, remove, or edit cars on the site, edit this file:

```
frontend/src/data/carInventory.js
```

Each car entry looks like this:

```js
{
  id: 6,
  year: 2021,
  make: 'Toyota',
  model: 'Camry',
  price: 22500,
  mileage: 31000,
  transmission: 'Automatic',
  fuel: 'Gasoline',
  images: [
    'cars-for-sale/your-image-filename.JPG',
  ]
}
```

Add your photo files to `frontend/public/images/cars-for-sale/` and reference them by filename in the `images` array.

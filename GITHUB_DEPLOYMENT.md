# 🚀 GitHub Deployment Guide for Ladder Lessons

This guide will help you deploy the Ladder Lessons platform to your own GitHub repository with automatic GitHub Pages deployment.

## 📋 Prerequisites

- GitHub account
- Git installed on your local machine
- Node.js 18+ and pnpm installed

## 🔧 Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `ladder-lessons`
5. Make it **Public** (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## 📁 Step 2: Upload Project Files

### Option A: Using Git Command Line

1. Download/copy all the project files to your local machine
2. Open terminal/command prompt in the project directory
3. Run these commands (replace `YOUR_USERNAME` with your GitHub username):

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Ladder Lessons platform"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/ladder-lessons.git

# Push to GitHub
git push -u origin main
```

### Option B: Using GitHub Web Interface

1. Download all project files as a ZIP
2. Extract the files
3. Go to your GitHub repository page
4. Click "uploading an existing file"
5. Drag and drop all the project files
6. Commit the changes

## ⚙️ Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The deployment workflow will automatically trigger

## 🔄 Step 4: Configure Repository Settings

### Update package.json
Edit the `package.json` file in the root directory:

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/ladder-lessons.git"
  },
  "homepage": "https://YOUR_USERNAME.github.io/ladder-lessons"
}
```

### Update GitHub Actions Workflow (Optional)
If you want to use a custom domain, edit `.github/workflows/deploy.yml`:

```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  if: github.ref == 'refs/heads/main'
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./frontend/dist
    cname: your-custom-domain.com  # Add your domain here
```

## 🌐 Step 5: Access Your Deployed Site

After the GitHub Actions workflow completes (usually 2-5 minutes):

1. Go to your repository Settings > Pages
2. You'll see: "Your site is published at https://YOUR_USERNAME.github.io/ladder-lessons"
3. Click the link to access your live site!

## 🔧 Local Development

To run the project locally:

```bash
# Install dependencies
cd frontend
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

## 🚀 Automatic Deployment

The project is configured with GitHub Actions for automatic deployment:

- **Trigger**: Every push to the `main` branch
- **Process**: Installs dependencies → Builds the project → Deploys to GitHub Pages
- **Duration**: Usually 2-5 minutes

## 🔍 Troubleshooting

### Deployment Failed
1. Check the "Actions" tab in your GitHub repository
2. Look for error messages in the workflow logs
3. Common issues:
   - Node.js version mismatch
   - Missing dependencies
   - Build errors

### 404 Errors on Routes
The project includes:
- `404.html` for handling client-side routing
- GitHub Pages routing script in `index.html`
- Proper base path configuration in `vite.config.js`

### Custom Domain Setup
1. Add a `CNAME` file to `frontend/public/` with your domain
2. Update the GitHub Actions workflow
3. Configure DNS settings with your domain provider

## 📊 Features Included

✅ **Automatic Deployment**: GitHub Actions workflow  
✅ **Client-Side Routing**: Proper SPA routing for GitHub Pages  
✅ **Production Optimization**: Minified and optimized build  
✅ **Responsive Design**: Works on all devices  
✅ **SEO Friendly**: Proper meta tags and structure  

## 🔐 Environment Variables (For Production)

For a production deployment with real Firebase and Stripe:

1. Go to repository Settings > Secrets and variables > Actions
2. Add these secrets:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_STRIPE_PUBLISHABLE_KEY`

3. Update `frontend/src/lib/firebase.js` to use environment variables:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // ... other config
};
```

## 📞 Support

### Common Commands
```bash
# Check deployment status
git status

# Update your site
git add .
git commit -m "Update content"
git push

# View build logs
# Go to GitHub repository > Actions tab
```

### File Structure
```
ladder-lessons/
├── .github/workflows/deploy.yml    # GitHub Actions deployment
├── frontend/                       # React application
│   ├── src/                       # Source code
│   ├── public/                    # Static assets
│   ├── dist/                      # Build output (auto-generated)
│   └── package.json               # Frontend dependencies
├── package.json                   # Root package file
├── README.md                      # Project documentation
├── GITHUB_DEPLOYMENT.md          # This file
└── .gitignore                     # Git ignore rules
```

## 🎉 Success!

Once deployed, your Ladder Lessons platform will be available at:
**https://YOUR_USERNAME.github.io/ladder-lessons**

The platform includes:
- Interactive phonics games
- Subscription management
- Teacher dashboard
- Zoom-optimized design
- Mobile responsive layout

**Your phonics platform is now live and ready for teachers to use!** 🎓✨


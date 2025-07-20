# Sivarasan Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional portfolio layout
- **Responsive**: Works perfectly on all devices
- **Dark Mode**: Built-in dark/light theme support
- **Fast Performance**: Optimized with Next.js static export
- **SEO Optimized**: Meta tags and structured data
- **Accessible**: WCAG compliant design

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd sivarasan-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**: Push your code to a GitHub repository
2. **Enable GitHub Pages**: 
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` → `/ (root)`
   - Save
3. **Enable GitHub Actions**: The workflow will automatically deploy on push to main

### Manual Deployment

```bash
# Build the project
npm run build

# The static files will be in the `out` directory
# Upload the contents of `out` to your web server
```

## 📁 Project Structure

```
sivarasan-portfolio/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout
│       ├── page.tsx        # Home page
│       └── globals.css     # Global styles
├── public/                 # Static assets
├── .github/workflows/      # GitHub Actions
└── out/                    # Build output
```

## 🎨 Customization

- **Content**: Update `src/app/page.tsx` with your information
- **Styling**: Modify `src/app/globals.css` for custom styles
- **Images**: Replace images in `public/` directory
- **CV**: Update the CV link in the hero section

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Ponnuthurai Sivarasan

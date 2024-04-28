# Single Web Page Boilerplate

A boilerplate to quickly build a single web page with:
- ⚙️ ES6 module
- ⚙️ Webpack with HRM ready
- ⚙️ SCSS
- ⚙️ Automation to deploy to GitHub Pages on every push


## Todos

1. Update `package.json` with your project info.
2. Start your code with `/src/_index.js` **(do not rename this file)**.
3. Manage your site in folder `/dev`.

## Deployment

```bash
# Install
npm i

# Run dev server
npm run dev

# Build production site with default path "/"
npm run build

# Build using GitHub Actions requires a different path
# domain.com or sub.domain.com => use "/"
# domain.com/your-site => use "/your-site"
npm run ghp-build
```
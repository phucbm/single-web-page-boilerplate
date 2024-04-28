#  JavaScript x Webpack (Library Boilerplate)

A starter pack to develop your JS library with:
- ⚙️ ES6 module
- ⚙️ Webpack with HRM ready
- ⚙️ SCSS
- ⚙️ Separated dev and public server

Output formats:
- ✅ UMD file with minified and unminified versions.
- ✅ Module file for publishing to `npm`.

> CSS file will not be included in the production build.

## Todos

1. Update `package.json` with your library names.
2. Library script start with `/src/_index.js`, **do not rename this file**.
3. Create your dev site in folder `/dev`.

## Deployment

```shell the packages
# Install
npm i

# Run dev server
npm run dev

# Generate UMD and module version
npm run prod

# Build production site (e.g. for Netlify host)
npm run build
```

---

Libraries that used this boilerplate:

- [Easy Tab & Accordion (ETA)](https://github.com/viivue/easy-tab-accordion)
- [Easy Popup](https://github.com/viivue/easy-popup)
- [Easy Select](https://github.com/viivue/easy-select)

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jtoaha/iogt-pwa/frontend/.cache/dev-404-page.js")),
  "component---src-pages-home-index-tsx": preferDefault(require("/Users/jtoaha/iogt-pwa/frontend/src/pages/home/index.tsx")),
  "component---src-pages-index-ts": preferDefault(require("/Users/jtoaha/iogt-pwa/frontend/src/pages/index.ts")),
  "component---src-pages-notfound-index-tsx": preferDefault(require("/Users/jtoaha/iogt-pwa/frontend/src/pages/notfound/index.tsx")),
  "component---src-pages-profile-index-tsx": preferDefault(require("/Users/jtoaha/iogt-pwa/frontend/src/pages/profile/index.tsx")),
  "component---src-pages-sections-index-tsx": preferDefault(require("/Users/jtoaha/iogt-pwa/frontend/src/pages/sections/index.tsx"))
}


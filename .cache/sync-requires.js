const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/danielkang/Desktop/portfolio/src/pages/index.js"))),
  "component---src-pages-reading-js": hot(preferDefault(require("/Users/danielkang/Desktop/portfolio/src/pages/reading.js")))
}


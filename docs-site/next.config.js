const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,
  defaultShowCopyCode: true
})

module.exports = withNextra({
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
})

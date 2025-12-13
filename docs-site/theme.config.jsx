export default {
  logo: <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>📚 Continuous Docs</span>,
  project: {
    link: 'https://github.com/YOUR_USERNAME/continuous-docs-generator'
  },
  docsRepositoryBase: 'https://github.com/YOUR_USERNAME/continuous-docs-generator/tree/main/docs-site',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Continuous Documentation Generator'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Continuous Documentation Generator" />
      <meta property="og:description" content="Automated documentation powered by AI" />
    </>
  ),
  primaryHue: 200,
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/YOUR_USERNAME" target="_blank">
          Continuous Docs Generator
        </a>
      </span>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    backToTop: true
  }
}

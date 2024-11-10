import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx'
  // ... your Nextra config
})

export default withNextra({
  // ... your Next.js config
})

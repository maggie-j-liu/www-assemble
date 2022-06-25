const { redirect } = require('next/dist/server/api-utils')

const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
  async redirects() {
    return [
      {
        source: '/register',
        permanent: true,
        destination: 'https://www-assemble-register.hackclub.dev/',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/hackers-assemble.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=3600',
          }
        ],
      },
    ]
  },
})

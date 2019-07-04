module.exports = {
  siteConfig: {
    title: 'Tailsaw'
  },
  theme: './tailsaw',
  permalinks: {
    post: '/blog/:slug',
    page: '/:slug'
  },
  themeConfig: {
    nav: [
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Example',
        link: '/example/'
      },
      {
        text: 'Tags',
        link: '/tags/'
      }
    ]
  },
  plugins: [
    {
      resolve: 'saber-plugin-query-posts',
      options: {
        paginationOptions: {
          perPage: 2
        }
      }
    },
    {
      resolve: 'saber-plugin-prismjs'
    },
    {
      resolve: 'saber-plugin-critical'
    }
  ]
}

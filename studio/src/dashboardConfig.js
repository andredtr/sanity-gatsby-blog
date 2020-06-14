export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee6102256089a559512d769',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-oahvimzv',
                  apiId: 'b0c5c9a2-6c4a-45a7-b7a9-58c5b055c4af'
                },
                {
                  buildHookId: '5ee61022f938ded246281366',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-iqqqy1dr',
                  apiId: '2aca9392-9a7d-4117-93e4-2a69fe0f9af7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/and-dutra/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-iqqqy1dr.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '62208b0d5f9b8d99e2cf426e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-uizttmf1',
                  apiId: 'f7e9dffe-e165-4ea1-887f-c098b42fd5d3'
                },
                {
                  buildHookId: '62208b0e54682096c754cc26',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-sh2h9giv',
                  apiId: 'e8b49f93-bb6c-4039-ace7-f3ac11babb51'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KVdan/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-sh2h9giv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ebad2cba471e101b9291063',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xpazzvhg',
                  apiId: '4c3f88b9-6651-4503-a651-8482ee0c83e7'
                },
                {
                  buildHookId: '5ebad2ccf5943f0218e4c8c3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3jnjj7r5',
                  apiId: 'bdb3882d-a1de-4421-9dfc-e0c2fca35e86'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nhuebecker/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3jnjj7r5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

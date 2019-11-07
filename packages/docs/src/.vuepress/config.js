module.exports = {

  themeConfig: {
    editLinks: true,

    docsDir: 'packages/docs/src',

    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'BitBucket',
        link: 'https://bitbucket.org',
      },
      {
        text: 'Contribute',
        link: '/Contribution/',
      },
    ],
    sidebar: [
      '/',
      '/Git/',
      {
        'title': 'Javascript',
        'children': [
          '/JavaScript/ES5/',
          '/JavaScript/ES6/',
        ],
      },
      {
        'title': 'SFB2C',
        'children': [
          '/SFB2C/commerce-api/',
          '/SFB2C/site-genesis/',
          '/SFB2C/SFRA/',
          '/SFB2C/ocapi/',
        ],
      },
      {
        'title': 'Style',
        'children': [
          '/Style/BEM/',
          '/Style/Legacy/',
          '/Style/SASS/',
        ],
      },
      '/Regexp/',
      '/Contribution/',
    ],

  },

  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      // set `platform` rather than `api`
      platform: 'bitbucket',
      // all other options of Vssue are allowed
      owner: '<owner>',
      repo: '<repo_name>',
      clientId: '<clientId>',
      prefix: '',
    },
  },

  title: 'Itelios Code',

  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          2: {
            test: /[\\/]node_modules[\\/](vue-i18n|vue-class-component|nprogress|@vuepress)[\\/]/,
            name: 'vendor.2',
            chunks: 'all',
          },
          1: {
            test: /[\\/]node_modules[\\/](vue|vue-router)[\\/]/,
            name: 'vendor.1',
            chunks: 'all',
          },
          0: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.0',
            chunks: 'all',
          },
        },
      })
    }
  },
}

function sidebarDemo (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'bitbucket',
        'gitee',
        'github',
        'gitlab',
      ],
    },
  ]
}

function sidebarGuide (titleGuide, titleOAuthApp) {
  return [
    {
      title: titleGuide,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'supported-platforms',
        'styles',
        'vuepress',
        'nuxt',
        'developer',
      ],
    },
    {
      title: titleOAuthApp,
      collapsable: false,
      children: [
        'github',
        'gitlab',
        'bitbucket',
        'gitee',
      ],
    },
  ]
}

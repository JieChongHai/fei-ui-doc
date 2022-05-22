module.exports = ctx => ({
  title: 'Fei-UI',
  description: 'Just playing around',
  // https://github.com/vuejs/vuepress/issues/1365#issuecomment-468165671
  base: ctx.isProd ? '/fei-ui-doc/' : '/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Github', link: 'https://github.com/JieChongHai/fei-ui' },
    ],
    sidebar: [
      '/',
      '/components/card',
    ]
  }
})
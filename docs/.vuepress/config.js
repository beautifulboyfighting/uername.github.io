module.exports = {
  title: '前端基础知识',
  description: 'html,css,js以及框架基础知识',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.gif',
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.gif',
    lastUpdated: '最后更新时间',
    displayAllHeaders: true,
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '分类',
        items: [
          {
            text: '文章',
            link: '/pages/article.md',
          },
          {
            text: '笔记',
            link: '/pages/note.md',
          },
        ],
      },
      {
        text: '关于',
        link: '/pages/about.md',
      },
      {
        text: '百度',
        link: 'https://www.baidu.com/',
      },
    ],
    sidebar: [
      {
        title: '基本介绍',
        children: ['/pages/about'],
        initialOpenGroupIndex: 1 // 可选的, 默认值是 0
      },
      {
        title: '前端基础',
        children: ['/pages/basic/html_foundation', '/pages/basic/css_foundation', '/pages/basic/js_foundation',],
        initialOpenGroupIndex: 1 // 可选的, 默认值是 0
      },
      {
        title: 'vue框架基础',
        children: ['/pages/frame/vue_foundation'],
        initialOpenGroupIndex: 1 // 可选的, 默认值是 0
      },
      {
        title: 'react框架基础',
        children: ['pages/frame/react_foundation'],
        initialOpenGroupIndex: 1 // 可选的, 默认值是 0
      }
    ],

  },
}
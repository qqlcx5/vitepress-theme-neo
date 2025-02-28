import { defineConfig } from 'vitepress'
import { getSidebar } from './utils/sidebar'

export default defineConfig({
  title: "NEO",
  description: "A NEO-style Theme",
  lastUpdated: false, // Disable Git-based last updated
  themeConfig: {
    logo: 'https://r2-site.feyoudao.cn/logo.png',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '分类',
        items: [
          { text: '得到', link: '/categories/dedao/README' },
          { text: '前端', link: '/categories/frontend/vue3-guide' },
          { text: '后端', link: '/categories/backend/node-basics' },
          { text: '工具', link: '/categories/tools/git-basics' }
        ]
      },
      { text: '标签', link: '/categories/frontend/vue3-guide' }, // Temporarily point to an existing page
      { text: '归档', link: '/categories/frontend/vue3-guide' }  // Temporarily point to an existing page
    ],
    sidebar: getSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/qqlcx5' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
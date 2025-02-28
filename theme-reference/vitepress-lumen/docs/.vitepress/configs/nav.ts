import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '<iconify-icon icon="fa6-solid:bolt" style="margin-right:0.25em;color:#63E6BE;"></iconify-icon>快速开始',
    link: '/guide/getting-started'
  },
  {
    text: '<iconify-icon icon="fa6-solid:gears" style="margin-right:0.25em;color:#3498db;"></iconify-icon>配置',
    link: '/guide/theme'
  },
  {
    text: '<iconify-icon icon="fa6-solid:bug" style="margin-right:0.25em;color:#FF4500;" alt="bug"></iconify-icon>提交反馈',
    link: 'https://github.com/Theo-Messi/lumen/issues'
  },
  {
    text: '<iconify-icon icon="fa6-solid:clipboard-list" style="margin-right:0.25em;color:#FF6347;" alt="clipboard"></iconify-icon>变更日志',
    link: `https://github.com/Theo-Messi/lumen/releases`
  }
]

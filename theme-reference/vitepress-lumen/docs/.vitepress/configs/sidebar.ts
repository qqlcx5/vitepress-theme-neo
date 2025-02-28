import type { DefaultTheme } from 'vitepress'

type SidebarItem = DefaultTheme.SidebarItem

export const sidebar: DefaultTheme.SidebarMulti = {
  '/guide/': { base: '/guide/', items: guide() }
}

export function guide(): SidebarItem[] {
  return [
    {
      // text: '快速开始',
      items: [
        {
          text: '<iconify-icon icon="fa6-solid:bolt" style="margin-right:0.25em;color:#63E6BE;"></iconify-icon>快速开始',
          link: 'getting-started'
        }
      ]
    },
    {
      text: '<iconify-icon icon="fa6-solid:gears" style="margin-right:0.25em;color:#3498db;"></iconify-icon>配置',
      items: [
        {
          text: '<iconify-icon icon="mdi:palette" style="margin-right:0.25em;color:#f39c12;"></iconify-icon>导入主题',
          link: 'theme'
        },
        {
          text: '<iconify-icon icon="mdi:bullhorn" style="margin-right:0.25em;color:#e74c3c;"></iconify-icon>首页公告栏',
          link: 'announcement'
        },
        {
          text: '<iconify-icon icon="mdi:format-underline" style="margin-right:0.25em;color:#3498db;"></iconify-icon>首页下划线',
          link: 'homeunderline'
        },
        {
          text: '<iconify-icon icon="mdi:cog" style="margin-right:0.25em;color:#2ecc71;"></iconify-icon>页脚配置',
          link: 'homefooter'
        },
        {
          text: '<iconify-icon icon="mdi:view-list" style="margin-right:0.25em;color:#9b59b6;"></iconify-icon>侧边栏链接',
          link: 'docasidelogo'
        },
        {
          text: '<iconify-icon icon="mdi:video" style="margin-right:0.25em;color:#e67e22;"></iconify-icon>视频组件',
          link: 'docvideolink'
        },
        {
          text: '<iconify-icon icon="mdi:credit-card" style="margin-right:0.25em;color:#1abc9c;"></iconify-icon>链接卡片',
          link: 'linkcard'
        },
        {
          text: '<iconify-icon icon="fa6-solid:share-nodes" style="margin-right:0.25em;color:#3498db;"></iconify-icon>页面分享按钮',
          link: 'sharebutton'
        },
        {
          text: '<iconify-icon icon="mdi:image-filter" style="margin-right:0.25em;color:#2ecc71;"></iconify-icon>图片描述',
          link: 'image-description'
        },
        {
          text: '<iconify-icon icon="mdi:comment-text-multiple" style="margin-right:0.25em;color:#3498db;"></iconify-icon>Twikoo 评论',
          link: 'doctwikoo'
        },
        {
          text: '<iconify-icon icon="mdi:chart-box" style="margin-right:0.25em;color:#3498db;"></iconify-icon>站点统计',
          link: 'analytics'
        }
      ]
    }
  ]
}

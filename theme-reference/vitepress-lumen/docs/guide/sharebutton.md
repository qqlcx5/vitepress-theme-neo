---
title: 页面分享按钮
---

## 引入组件

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme' // [!code ++]

import { h } from 'vue' // [!code ++]

import { ShareButton } from '@theojs/lumen'// [!code ++]

export default {
  extends: DefaultTheme,
  Layout() { // [!code ++]
    return h(DefaultTheme.Layout, null, { // [!code ++]
      'aside-outline-before': () => h(ShareButton) // [!code ++]
    }) // [!code ++]
  } // [!code ++]
  ...
}
```

## 自定义按钮文本

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

import { h } from 'vue' // [!code ++]

import { ShareButton } from '@theojs/lumen' // [!code ++]

export default {
  extends: DefaultTheme,
  Layout() { // [!code ++]
    return h(DefaultTheme.Layout, null, { // [!code ++]
      'aside-outline-before': () => // [!code ++]
        h(ShareButton, { // [!code ++]
          buttonIcon: 'fa6-solid:share-nodes', // 自定义图标 // [!code ++]
          buttonText: '分享此页面', // 自定义按钮文本 // [!code ++]
          copiedIcon: 'mdi:thumbs-up', // 自定义复制成功后的图标 // [!code ++]
          copiedText: '链接已复制！' // 自定义复制成功后的文本 // [!code ++]
        }) // [!code ++]
    }) // [!code ++]
  } // [!code ++]
  ...
}
```

## 参数说明

|    参数名    |   类型   |                                   默认值                                   | 描述                                                                                                                                                   |
| :----------: | :------: | :------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buttonIcon` | `string` | `solar:share-bold` : <iconify-icon icon="solar:share-bold"></iconify-icon> | 按钮图标的类名，支持<Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" />。             |
| `buttonText` | `string` |                                `分享此页面`                                | 按钮显示的文本。                                                                                                                                       |
| `copiedIcon` | `string` |    `mdi:thumbs-up` : <iconify-icon icon="mdi:thumbs-up"></iconify-icon>    | 复制成功后显示的图标的类名，支持<Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" />。 |
| `copiedText` | `string` |                               `链接已复制!`                                | 复制成功后显示的文本。                                                                                                                                 |

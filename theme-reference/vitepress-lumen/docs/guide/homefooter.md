---
title: 页脚配置
---

![桌面端效果图](https://i.theojs.cn/docs/202411071146149.webp)

![移动端效果图](https://i.theojs.cn/docs/202411071155536.webp =300x)

## 创建数据

在`.vitepress`目录下新建`data/footerData.ts`文件，并添加以下内容：

```ts [.vitepress/data/footerData.ts]
import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: { icp: '备案号', police: '公网安备号', showIcon: true },
  author: { name: 'Theo', link: 'https://' },
  group: [
    {
      title: '外部链接',
      icon: 'bx:link', // `iconify`图标
      color: 'rgba(255, 87, 51, 1)',
      links: [
        { name: '示例1', link: 'https://', icon: 'solar:book-bold' },
        { name: '示例2', link: 'https://' }
      ]
    },
    {
      title: '内部链接',
      icon: 'bx:link',
      color: 'rgba(255, 87, 51, 1)',
      links: [
        { name: '示例1', icon: 'solar:book-bold', link: '/docs' },
        { name: '示例2', link: '/page' }
      ]
    }
  ]
}
```

## 引入组件

::: tip
`.. /data/footerData` 可替换为存放数据的路径
:::

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

import { h } from 'vue' // [!code ++]

import { HomeFooter } from '@theojs/lumen' // [!code ++]

import { Footer_Data } from '../data/footerData' // [!code ++]

export default {
  extends: DefaultTheme,
  Layout() { // [!code ++]
    return h(DefaultTheme.Layout, null, { // [!code ++]
      'layout-bottom': () => h(HomeFooter, { Footer_Data }) // [!code ++]
    }) // [!code ++]
  } // [!code ++]
  ...
}
```

## 数据接口说明

### `FooterData` 接口

`FooterData` 是所有组件的顶层接口，包含了以下几个字段：

|   字段   |   类型   | 描述                                               |
| :------: | :------: | -------------------------------------------------- |
| `group`  | `Array`  | <Badge text="可选" /> 链接分组数组，包含多个分组。 |
| `beian`  | `Object` | <Badge text="可选" /> 备案信息。                   |
| `author` | `Object` | <Badge text="可选" /> 作者信息。                   |

### `Group` 接口

`Group` 接口定义了一个链接分组，包括分组的图标、标题及其下的多个链接。

|  字段   |   类型   | 描述                                                                                                                                                         |
| :-----: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `icon`  | `string` | <Badge text="可选" /> 分组图标名称，支持<Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" /> |
| `color` | `string` | <Badge text="可选" /> 图标样式。                                                                                                                             |
| `title` | `string` | 分组的标题。                                                                                                                                                 |
| `links` | `Array`  | 该分组包含的链接数组，每个链接是一个 `Link` 对象。                                                                                                           |

### `Link` 接口

`Link` 接口用于描述具体的链接信息，包括链接的图标、样式、名称、地址及其打开方式。

|  字段   |   类型   | 描述                                                                                                                                                         |
| :-----: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `icon`  | `string` | <Badge text="可选" /> 链接图标名称，支持<Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" /> |
| `color` | `string` | <Badge text="可选" /> 图标样式。                                                                                                                             |
| `name`  | `string` | 链接的名称。                                                                                                                                                 |
| `link`  | `string` | 链接的地址。                                                                                                                                                 |

### `Beian` 接口

`Beian` 接口用于表示备案信息，包括 ICP 备案号、公安备案号以及是否显示备案图标。

|     字段     |   类型    | 描述                                                                                                                                                     |
| :----------: | :-------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    `icp`     | `string`  | <Badge text="可选" /> ICP 备案号。                                                                                                                       |
|  `icpIcon`   | `string`  | <Badge text="可选" /> ICP 图标，默认为 `fluent:globe-shield-48-filled` : <iconify-icon icon="fluent:globe-shield-48-filled" ></iconify-icon>             |
|   `police`   | `string`  | <Badge text="可选" /> 公安备案号。                                                                                                                       |
| `policeIcon` | `string`  | <Badge text="可选" /> 公安备案图标，默认为 `fluent:shield-checkmark-48-filled` : <iconify-icon icon="fluent:shield-checkmark-48-filled" ></iconify-icon> |
|  `showIcon`  | `boolean` | <Badge text="可选" /> 是否显示备案图标，默认 `false`。                                                                                                   |

### `Author` 接口

`Author` 接口表示作者信息，包括作者姓名和链接。

|  字段  |   类型   | 描述                               |
| :----: | :------: | ---------------------------------- |
| `name` | `string` | <Badge text="可选" /> 作者的姓名。 |
| `link` | `string` | <Badge text="可选" /> 作者的链接。 |

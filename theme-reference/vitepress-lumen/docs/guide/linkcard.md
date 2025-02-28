---
title: 链接卡片
---

## 引入组件

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'

import { DocBox, DocBoxCube, DocLinks, DocPill } from '@theojs/lumen' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => { // [!code ++]
    app.component('Box', DocBox) // [!code ++]
    app.component('Pill', DocPill) // [!code ++]
    app.component('Links', DocLinks) // [!code ++]
    app.component('BoxCube', DocBoxCube) // [!code ++]
  } // [!code ++]
  ...
}
```

## Box

**输入**

<<< ./example/Box.vue

**输出**

<!--@include: ./example/Box.vue-->

### 参数说明

|  字段   |                     类型                      | 描述                                                                                                                                                                                                        |
| :-----: | :-------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`  |                   `string`                    | DocBox 名称。                                                                                                                                                                                               |
| `link`  |                   `string`                    | DocBox 链接。                                                                                                                                                                                               |
|  `tag`  |                   `string`                    | <Badge text="可选" /> DocBox 标签。                                                                                                                                                                         |
| `color` | `string` \| `{ light: string; dark: string }` | <Badge text="可选" /> 图标的颜色。 也可以是包含 `light` 和 `dark` 属性的对象                                                                                                                                |
| `icon`  | `string` \| `{ light: string; dark: string }` | <Badge text="可选" /> 图标名称，支持<Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" />可为单一图标名称或包含 `light` 和 `dark` 模式的对象 |
| `image` | `string` \| `{ light: string; dark: string }` | <Badge text="可选" /> 图片地址或包含 `light` 和 `dark` 模式的对象。                                                                                                                                         |

## Pill

**输入**

<<< ./example/Pill.vue{vue-html}

**输出**

<!--@include: ./example/Pill.vue-->

### 参数说明

|  字段   |                     类型                      | 描述                                                                                                                                                                                                        |
| :-----: | :-------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`  |                   `string`                    | Pill 名称。                                                                                                                                                                                                 |
| `link`  |                   `string`                    | <Badge text="可选" />Pill 链接。                                                                                                                                                                            |
| `color` | `string` \| `{ light: string; dark: string }` | <Badge text="可选" /> 图标的颜色。也可以是包含 `light` 和 `dark` 属性的对象                                                                                                                                 |
| `icon`  | `string` \| `{ light: string; dark: string }` | <Badge text="可选" /> 图标名称，支持<Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" />可为单一图标名称或包含 `light` 和 `dark` 模式的对象 |
| `image` | `string` \| `{ light: string; dark: string }` | <Badge text="可选" /> 图片地址或包含 `light` 和 `dark` 模式的对象。                                                                                                                                         |

## Links

**输入**

<<< ./example/Links.vue

**输出**

<!--@include: ./example/Links.vue-->

### 参数说明

|  字段   |                     类型                      | 描述                                                                                                                                                                                                        |
| :-----: | :-------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`  |                   `string`                    | DocLinks 名称。                                                                                                                                                                                             |
| `desc`  |                   `string`                    | <Badge text="可选" /> DocLinks 描述信息。                                                                                                                                                                   |
| `link`  |                   `string`                    | DocLinks 链接。                                                                                                                                                                                             |
| `color` | `string` \| `{ light: string; dark: string }` | <Badge text="可选" /> 图标的颜色。也可以是包含 `light` 和 `dark` 属性的对象                                                                                                                                 |
| `icon`  | `string` \| `{ light: string; dark: string }` | <Badge text="可选" /> 图标名称，支持<Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" />可为单一图标名称或包含 `light` 和 `dark` 模式的对象 |
| `image` | `string` \| `{ light: string; dark: string }` | <Badge text="可选" /> 支持单一图片地址或包含 `light` 和 `dark` 两种模式的对象。                                                                                                                             |

## BoxCube

**输入**

<<< ./example/BoxCube.vue

**输出**

<!--@include: ./example/BoxCube.vue-->

## 参数说明

|  字段   |                     类型                      | 描述                                                                                                                                                                                                        |
| :-----: | :-------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`  |                   `string`                    | BoxCube 名称。                                                                                                                                                                                              |
| `link`  |                   `string`                    | BoxCube 链接。                                                                                                                                                                                              |
| `desc`  |                   `string`                    | <Badge text="可选" /> BoxCube 描述。                                                                                                                                                                        |
|  `tag`  |                   `string`                    | <Badge text="可选" /> BoxCube 标签。                                                                                                                                                                        |
| `color` | `string` \| `{ light: string; dark: string }` | <Badge text="可选" /> 图标的颜色。也可以是包含 `light` 和 `dark` 属性的对象                                                                                                                                 |
| `icon`  | `string` \| `{ light: string; dark: string }` | <Badge text="可选" /> 图标名称，支持<Pill name="iconify 图标" link="https://icon-sets.iconify.design/" icon="line-md:iconify2-static" color="#1769AA" />可为单一图标名称或包含 `light` 和 `dark` 模式的对象 |
| `image` | `string` \| `{ light: string; dark: string }` | <Badge text="可选" /> 支持单一图片地址或包含 `light` 和 `dark` 模式的对象。                                                                                                                                 |

---
title: 图片描述
---

![效果图](/Logo.webp)

## 安装 @mdit/plugin-figure 插件

::: code-group

```sh [pnpm]
pnpm add -D @mdit/plugin-figure
```

```sh [npm]
npm install -D @mdit/plugin-figure

```

```sh [yarn]
yarn add -D @mdit/plugin-figure
```

:::

## 配置插件选项

```ts [.vitepress/config.mts]
import { defineConfig } from 'vitepress'

import { figure } from '@mdit/plugin-figure' // [!code ++]

export default defineConfig({
  markdown: { // [!code ++]
    config: (md) => { // [!code ++]
      md.use(figure, { figcaption: 'alt', copyAttrs: '^class$', lazy: true }) // [!code ++]
    } // [!code ++]
  } // [!code ++]
  ...
})
```

## 导入主题

::: code-group

```ts [所有主题]
// theme/index.ts
import '@theojs/lumen/theme'
```

```ts [单独导入]
// theme/index.ts
import '@theojs/lumen/pic'
```

:::

### 也可以单独添加样式

<<< @/../src/theme/picture.css

## 使用

```md
![效果图](/Logo.webp)

![浅色模式{.light-only}](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU)

![深色模式{.dark-only}](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU)

![深色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

![浅色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)
```

![效果图](/Logo.webp)

![浅色模式{.light-only}](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU)

![深色模式{.dark-only}](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU)

![深色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

![浅色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)

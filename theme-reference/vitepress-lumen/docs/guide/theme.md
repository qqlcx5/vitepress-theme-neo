---
title: 主题配置文件
---

::: code-group

```ts [所有主题]
// theme/index.ts
import '@theojs/lumen/theme'
```

```ts [部分主题]
// theme/index.ts
/* 徽章样式 */
import '@theojs/lumen/badge'
/* 按钮 */
import '@theojs/lumen/button'
/* 配色 */
import '@theojs/lumen/colors'
/* 文档样式 */
import '@theojs/lumen/doc'
/* 容器样式 */
import '@theojs/lumen/doc-blocks'
/* 首页样式 */
import '@theojs/lumen/home'
/* 首页按钮 */
import '@theojs/lumen/home-blocks'
/* 图标 */
import '@theojs/lumen/icon'
/* 图片样式 */
import '@theojs/lumen/pic'
```

:::

## 图标支持

:::details 使用 `iconify-icon` 时报错 `[Vue warn]: Failed to resolve component: iconify-icon`

```ts [.vitepress/config.mts]
import { defineConfig } from 'vitepress'

export default defineConfig({
  vue: { // [!code ++]
    template: { // [!code ++]
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' } // [!code ++]
    } // [!code ++]
  } // [!code ++]
  ...
})
```

:::

```md
<iconify-icon icon="simple-icons:fontawesome"></iconify-icon>
<iconify-icon icon="line-md:iconify2-static"></iconify-icon>
<iconify-icon icon="cil:locomotive" height="36"></iconify-icon>
<iconify-icon icon="cil:paper-plane" width="36"></iconify-icon>
<iconify-icon icon="cil:truck" style="font-size: 18px" height="2em"></iconify-icon>
```

<Pill name="使用方法查看: https://iconify.design/docs/iconify-icon/" link="https://iconify.design/docs/iconify-icon/" icon="line-md:iconify2-static" color="#1769AA" />

## 自定义组件 CSS

可以通过覆盖根级别的 CSS 变量来自定义默认主题的 CSS：

```ts
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

import '@theojs/lumen/theme'
import './var.css' // [!code ++]

export default DefaultTheme
..
```

```css
/* .vitepress/theme/var.css */
:root {
  --Announcement-bg: var(--vp-button-alt-bg);
  --Announcement-bg-hover: var(--vp-c-brand-soft);
}
```

查看<Pill name="默认组件 CSS 变量" link="https://github.com/Theo-Messi/lumen/blob/main/src/theme/components-var.css" icon="unjs:theme-colors" />内容来获取可以被覆盖的变量。

## 示例

### 容器

**输入**

```md
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

::: info
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: tip
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: warning
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: danger
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: details
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::
```

**输出**

> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

::: info
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: tip
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: warning
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: danger
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: details
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

### 自定义容器

**输入**

````md
::: danger STOP
[这是一个链接](https://doc.theojs.cn/)
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
````

**输出**
::: danger STOP
[这是一个链接](https://doc.theojs.cn/)
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::

### GitHub 风格容器

**输入**

```md
> [!NOTE]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!TIP]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!IMPORTANT]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!WARNING]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!CAUTION]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字
```

**输出**

> [!NOTE]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!TIP]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!IMPORTANT]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!WARNING]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!CAUTION]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

### 徽章

```vue
<Badge type="info" text="default" />
<Badge type="tip" text="^1.9.0" />
<Badge type="warning" text="beta" />
<Badge type="danger" text="caution" />
<Badge type="info">custom element</Badge>
```

<Badge type="info" text="default" />
<Badge type="tip" text="^1.9.0" />
<Badge type="warning" text="beta" />
<Badge type="danger" text="caution" />
<Badge type="info">custom element</Badge>

### 图片浅色与深色模式

**输入**
::: code-group

```md [深浅模式图片]
<!-- 浅色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU){.light-only}

<!-- 深色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU){.dark-only}

<!-- 深色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

<!-- 浅色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)
```

```md [带描述的深浅模式图片]
![浅色模式{.light-only}](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU)

![深色模式{.dark-only}](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU)

![深色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

![浅色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)
```

:::
**输出**

<!-- 浅色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU){.light-only}

<!-- 深色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU){.dark-only}

<!-- 深色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

<!-- 浅色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)

![浅色模式{.light-only}](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU)

![深色模式{.dark-only}](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU)

![深色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

![浅色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)

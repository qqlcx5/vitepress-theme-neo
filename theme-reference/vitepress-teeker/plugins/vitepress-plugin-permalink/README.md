# vitepress-plugin-permalink

这是一个适用于 `vitepress` 的 Vite 插件，在 `vitepress` 启动后读取 markdown 文档 `frontmatter` 的 `permalink`。

## ✨ Feature

- 🚀🚀 支持给 markdown 文档设置唯一的访问 **永久链接**，不再因为 markdown 文档路径移动而导致访问地址发生变化
- 🚀 读取 markdown 文档 `frontmatter` 的 `permalink`，挂载到 `themeConfig.permalinks`
- 🚀 提供 `usePermalinks` hooks 函数拓展 `router` 方法，支持 `router.push(href)` 跳转到永久链接或实际的文件路径
- 🚀 支持 locales 多语言，自动给 **永久链接** 添加语言前缀，不同语言的永久链接不会重复
- 🚀 支持 rewrite 路由重写，最终得到的文档路径是 rewrite 路由重写后的路径
- 🚀 **永久链接** 支持导航栏激活高亮

## 🕯️ Install

安装 `vitepress-plugin-permalink` 插件

```bash
# 推荐使用 pnpm
pnpm i vitepress-plugin-permalink
# or yarn
yarn add vitepress-plugin-permalink
# or npm
npm install vitepress-plugin-permalink
```

添加 `vitepress-plugin-permalink` 插件到 `.vitepress/config.ts`

```typescript
import Permalink from "vitepress-plugin-permalink";

export default defineConfig({
  vite: {
    plugins: [Permalink(/* options */)],
  },
});
```

> 说明：该插件仅限项目启动时生效，已改动或新添加的 markdown 需要重启项目才能生效。

插件默认忽略 `["node_modules", "dist", ".vitepress", "public"]` 目录下的文件，且只扫描 markdown 文档。

## 🛠️ Options

| name       | description                           | type       | default                        |
| ---------- | ------------------------------------- | ---------- | ------------------------------ |
| ignoreList | 忽略的文件/文件夹列表，支持正则表达式 | `string[]` | `[]`                           |
| path       | 指定扫描的根目录                      | `string`   | `vitepress` 的 `srcDir` 配置项 |

## ❗ Warning

插件的 `usePermalinks` 函数使用了 `router.onAfterRouteChange` 方法，如果你也需要使用该方法，请按照下面格式进行拓展：

```typescript
import { useRouter } from "vitepress";

const router = useRouter();

const initRoute = () => {
  const selfOnAfterRouteChange = router.onAfterRouteChange;
  // 路由切换后的回调
  router.onAfterRouteChange = (href: string) => {
    // 调用可能已有的函数
    selfOnAfterRouteChange?.(href);

    // 调用自己的函数
    myFunction();
  };
};

const myFunction = () => {
  /* */
};
```

## 📖 Usage

在 `.vitepress/theme/index.ts` 引入 `usePermalinks` 函数来初始化 permalinks 功能：

```typescript
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import usePermalinks from "vitepress-plugin-permalink/src/usePermalinks";

export default {
  extends: DefaultTheme,
  Layout() {
    // 开启监听 permalink
    usePermalinks().startWatch();

    return h(DefaultTheme.Layout, null, {});
  },
};
```

假设项目的目录结构如下：

```text
.
├─ docs                # 项目根目录
│  ├─ guide
│  │  └─ api.md
```

`api.md` 内容如下：

```yaml
---
permalink: /guide-api
---
```

- 访问 `/guide/api.html` 可以进入文档页面，这是 vitepress 的自带功能。**如果文件路径发生改变，访问链接也随着改变**
- 访问 `/guide-api` 可以进入文档页面，这是插件的实现功能。**不会随着文件路径变化而改变**

永久链接是唯一的，如果出现两个一样的永久链接，则后面的永久链接覆盖前面的，但不影响 vitepress 自带访问路径。

如果永久链接不生效，代表 `usePermalinks().startWatch()` 并没有被执行，请在注册 vitepress 或者任意主题前加载该函数，如何注册请看 ([扩展默认主题 | VitePress](https://vitepress.dev/zh/guide/extending-default-theme#layout-slots))

## 📘 TypeScript

### 🛠️ Options

```typescript
export interface PermalinkOption {
  /**
   * 忽略的文件/文件夹列表，支持正则表达式
   *
   * @default []
   */
  ignoreList?: Array<RegExp | string>;
  /**
   * 文章所在的目录，基于 package.json 所在目录，开头不需要有 /
   * @default 'vitepress 的 srcDir 配置项'
   */
  path?: string;
}
```

## 🉑 License

[MIT](../../LICENSE) License © 2025 [Teeker](https://github.com/Kele-Bingtang)

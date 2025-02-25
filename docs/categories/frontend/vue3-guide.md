# Vue 3 完全指南

<ArticleInfo
  date="2024-03-20"
  category="前端"
  :tags="['Vue', 'JavaScript', '教程']"
/>

## Vue 3 的新特性

Vue 3 带来了许多令人兴奋的新特性，让我们一起来探索吧！

### Composition API

Composition API 是 Vue 3 最重要的新特性之一，它提供了一种更灵活的方式来组织组件逻辑。

### 更好的 TypeScript 支持

Vue 3 是用 TypeScript 重写的，为 TypeScript 用户提供了更好的开发体验。

## 示例代码

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">Count: {{ count }}</button>
</template>
```
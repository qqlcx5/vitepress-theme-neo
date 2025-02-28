<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

interface Post {
  url: string
  frontmatter: {
    title: string
    tags?: string[]
    date?: string
  }
}

const { theme } = useData()

// 计算所有标签及其对应的文章
const tagMap = computed(() => {
  const map = new Map<string, Post[]>()

  theme.value.posts?.forEach((post: Post) => {
    const tags = post.frontmatter.tags || []
    tags.forEach(tag => {
      if (!map.has(tag)) {
        map.set(tag, [])
      }
      map.get(tag)?.push(post)
    })
  })

  // 将 Map 转换为数组并按标签名称排序
  return new Map([...map.entries()].sort())
})
</script>

<template>
  <div class="tags-page">
    <h1>标签</h1>

    <div class="tags-cloud">
      <router-link
        v-for="[tag, posts] in tagMap"
        :key="tag"
        :to="`#${tag}`"
        class="tag-item"
      >
        {{ tag }} ({{ posts.length }})
      </router-link>
    </div>

    <div class="tag-sections">
      <div
        v-for="[tag, posts] in tagMap"
        :key="tag"
        :id="tag"
        class="tag-section"
      >
        <h2 class="tag-title"># {{ tag }}</h2>
        <ul class="post-list">
          <li v-for="post in posts" :key="post.url">
            <router-link :to="post.url">{{ post.frontmatter.title }}</router-link>
            <span v-if="post.frontmatter.date" class="post-date">
              {{ new Date(post.frontmatter.date).toLocaleDateString() }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tags-page {
  padding: 1rem;
}

.tags-cloud {
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.tag-item {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  transition: all 0.3s;
}

.tag-item:hover {
  background-color: var(--vp-c-brand);
  color: white;
}

.tag-section {
  margin: 2rem 0;
}

.tag-title {
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
}

.post-list {
  list-style: none;
  padding: 0;
}

.post-list li {
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-date {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>
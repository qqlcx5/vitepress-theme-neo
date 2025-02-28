<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import { useData } from 'vitepress'

const props = defineProps<{
  date?: string
  category?: string
  tags?: string[]
}>()

const formattedDate = computed(() => {
  return props.date ? dayjs(props.date).format('YYYY-MM-DD') : ''
})
const dataPage = useData()
console.log(dataPage.frontmatter.value, 'frontmatter');
console.log(dataPage.page.value, 'page');
console.log(dataPage.site.value, 'site');
console.log(dataPage.theme.value, 'theme');
</script>

<template>
  <div>
    <div class="article-info">
        <span v-if="date" class="date text-red-500">
          📅 {{ formattedDate }}
      </span>
      <span v-if="category" class="category">
        📁 {{ category }}
      </span>
      <span v-if="tags && tags.length" class="tags">
        🏷️ {{ tags.join(', ') }}
      </span>
    </div>
    <div class="text-xs">
      page {{ dataPage.page }}
    </div>
   </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'

const props = defineProps<{
  date?: string
  category?: string
  tags?: string[]
}>()

const formattedDate = computed(() => {
  return props.date ? dayjs(props.date).format('YYYY-MM-DD') : ''
})
</script>

<template>
  <div class="article-info">
    <div class="text-red-500">这段文字应该是红色的</div>
    <span v-if="date" class="date p-20 text-sm bg-[#333] font-bold underline">
      📅 {{ formattedDate }}
    </span>
    <span v-if="category" class="category">
      📁 {{ category }}
    </span>
    <span v-if="tags && tags.length" class="tags">
      🏷️ {{ tags.join(', ') }}
    </span>
  </div>
</template>
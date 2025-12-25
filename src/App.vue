<script setup lang="ts">
import { useHead } from '@vueuse/head'
import BaseLayout from './layout/BaseLayout.vue'

const headDefault = {
  title: '大内密谈封面浏览器',
  meta: [
    { name: 'description', content: '快速浏览《大内密谈》的往期精美封面' },
    { name: 'keywords', content: 'Podcast, Chinese, Music' },
  ],
}

useHead(
  process.env.NODE_ENV === 'production'
    ? { ...headDefault }
    : { ...headDefault },
)
</script>

<template>
  <BaseLayout>
    <router-view />
  </BaseLayout>
</template>

<style scoped>
</style>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <thead :class="cn('[&_tr]:border-b [&_tr]:border-[#e2e2e2] bg-[#fafafa]', props.class)">
    <slot />
  </thead>
</template>


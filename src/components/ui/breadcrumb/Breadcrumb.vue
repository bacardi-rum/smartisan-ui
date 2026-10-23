<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <nav aria-label="breadcrumb" :class="cn('flex items-center text-[13px]', props.class)">
    <slot />
  </nav>
</template>


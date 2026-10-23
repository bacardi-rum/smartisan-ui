<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('mt-auto border-t border-[#e2e2e2] bg-white p-3 shadow-[0_-2px_4px_rgba(0,0,0,0.04)]', props.class)">
    <slot />
  </div>
</template>


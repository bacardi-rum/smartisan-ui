<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('flex h-14 items-center border-b border-[#e2e2e2] bg-white px-4 shadow-[0_2px_4px_rgba(0,0,0,0.04)]', props.class)">
    <slot />
  </div>
</template>


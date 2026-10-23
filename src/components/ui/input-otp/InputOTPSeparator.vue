<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('flex items-center px-1 text-[#b2b2b2]', props.class)">
    <svg viewBox="0 0 24 24" fill="none" class="size-4 stroke-current stroke-2">
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  </div>
</template>


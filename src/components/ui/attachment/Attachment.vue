<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  title?: string
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('flex flex-col gap-2 rounded-[10px] border border-[#e2e2e2] bg-[#fafafa] p-3 shadow-sm', props.class)">
    <div v-if="title || $slots.header" class="flex items-center gap-1.5 text-[12px] font-bold text-[#7f7f7f] px-1">
      <svg viewBox="0 0 24 24" fill="none" class="size-4 stroke-current stroke-2">
        <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
      </svg>
      <span>{{ title || '附件' }}</span>
    </div>
    <div class="flex flex-col gap-2">
      <slot />
    </div>
  </div>
</template>


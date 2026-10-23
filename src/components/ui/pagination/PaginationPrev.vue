<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { PaginationPrev, type PaginationPrevProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends PaginationPrevProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <PaginationPrev
    v-bind="props"
    :class="cn(
      'inline-flex size-8 items-center justify-center rounded-[4px] border border-[#d3d3d3] bg-white text-[#636363] hover:bg-[#fafafa] disabled:pointer-events-none disabled:opacity-40 cursor-pointer select-none transition-colors',
      props.class
    )"
  >
    <slot>
      <svg viewBox="0 0 24 24" fill="none" class="size-4 stroke-current stroke-2">
        <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </slot>
  </PaginationPrev>
</template>


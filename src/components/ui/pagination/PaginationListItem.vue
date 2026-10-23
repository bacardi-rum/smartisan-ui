<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { PaginationListItem, type PaginationListItemProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends PaginationListItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <PaginationListItem
    v-bind="props"
    :class="cn(
      'inline-flex size-8 items-center justify-center rounded-[4px] border border-[#d3d3d3] bg-white text-[13px] font-bold text-[#636363] transition-all cursor-pointer hover:bg-[#fafafa] disabled:pointer-events-none disabled:opacity-50 select-none outline-none focus-visible:ring-1 focus-visible:ring-[#93b2f7]',
      'data-[selected]:border-[#3f68e2] data-[selected]:bg-gradient-to-b data-[selected]:from-[#5b87eb] data-[selected]:to-[#5883eb] data-[selected]:text-white data-[selected]:shadow-[0_2px_4px_rgba(0,0,0,0.12)]',
      props.class
    )"
  >
    <slot />
  </PaginationListItem>
</template>


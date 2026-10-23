<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  ScrollAreaScrollbar,
  type ScrollAreaScrollbarProps,
  ScrollAreaThumb,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends ScrollAreaScrollbarProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'vertical',
})
</script>

<template>
  <ScrollAreaScrollbar
    v-bind="props"
    :class="cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
      props.class
    )"
  >
    <ScrollAreaThumb class="relative flex-1 rounded-full bg-[#d0d0d0] hover:bg-[#b8b8b8] transition-colors" />
  </ScrollAreaScrollbar>
</template>


<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  vertical?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  vertical: false,
})
</script>

<template>
  <div
    :class="cn(
      'inline-flex items-center isolate overflow-hidden rounded-[8px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_4px_2.1px_rgba(0,0,0,0.07)]',
      vertical ? 'flex-col' : 'flex-row',
      '[&>button]:rounded-none [&>button]:border-0 [&>button]:shadow-none [&>button]:bg-transparent [&>button]:text-[#636363] [&>button]:h-[48px] [&>button]:px-4 [&>button]:active:bg-[#dfdfdf]',
      !vertical && '[&>button+button]:border-l [&>button+button]:border-[#f2f2f2]',
      vertical && '[&>button+button]:border-t [&>button+button]:border-[#f2f2f2]',
      props.class
    )"
  >
    <slot />
  </div>
</template>


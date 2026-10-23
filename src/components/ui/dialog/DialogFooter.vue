<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div
    :class="cn(
      'flex h-[54px] w-full border-t border-[#e8e8e8] bg-[#f7f7f7] shadow-[0_4px_2.1px_rgba(0,0,0,0.07)]',
      '[&>button]:flex-1 [&>button]:h-full [&>button]:items-center [&>button]:justify-center [&>button]:text-center [&>button]:font-bold [&>button]:text-[14px] [&>button]:text-[#636363] [&>button]:border-none [&>button]:shadow-none [&>button]:rounded-none [&>button]:bg-transparent [&>button]:transition-none [&>button]:active:bg-[#dfdfdf]',
      '[&>button+button]:border-l [&>button+button]:border-[#f2f2f2]',
      '[&>button[data-primary]]:text-[#5e80d0] [&>button.s-primary]:text-[#5e80d0]',
      props.class
    )"
  >
    <slot />
  </div>
</template>


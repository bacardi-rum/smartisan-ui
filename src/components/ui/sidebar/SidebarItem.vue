<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  active?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
})
</script>

<template>
  <button
    type="button"
    :class="cn(
      'flex h-11 w-full items-center gap-3 rounded-[6px] px-3 text-[14px] font-semibold text-[#636363] transition-colors hover:bg-white active:bg-[#f0f0f0] outline-none cursor-pointer text-left',
      active && 'bg-white text-[#5079d9] border border-[#e2e2e2] shadow-[0_2px_4px_rgba(0,0,0,0.04)]',
      props.class
    )"
  >
    <slot />
  </button>
</template>


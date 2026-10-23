<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  flush?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  flush: false,
})
</script>

<template>
  <div
    :class="cn(
      'bg-white text-[#333333] border border-[#e2e2e2] shadow-[0_10px_16px_rgba(0,0,0,0.04)]',
      flush ? 'rounded-none border-x-0 shadow-none' : 'rounded-[10px] overflow-hidden',
      props.class
    )"
  >
    <slot />
  </div>
</template>


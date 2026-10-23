<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <kbd
    :class="cn(
      'inline-flex items-center justify-center min-w-[20px] h-[22px] px-1.5 font-mono text-[11px] font-semibold text-[#636363] bg-gradient-to-b from-white to-[#f7f7f7] border border-[#d8d8d8] rounded-[4px] shadow-[0_2px_0_#d0d0d0] select-none',
      props.class
    )"
  >
    <slot />
  </kbd>
</template>


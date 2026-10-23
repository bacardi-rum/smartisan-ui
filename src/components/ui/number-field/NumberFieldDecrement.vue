<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { NumberFieldDecrement } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <NumberFieldDecrement
    :class="cn(
      'flex h-[38px] w-9 items-center justify-center border-r border-[#f2f2f2] bg-[#fafafa] text-[#7f7f7f] hover:bg-[#f2f2f2] active:bg-[#e8e8e8] disabled:opacity-40 cursor-pointer select-none transition-colors',
      props.class
    )"
  >
    <slot>
      <svg viewBox="0 0 24 24" fill="none" class="size-4 stroke-current stroke-2">
        <path d="M5 12h14" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </slot>
  </NumberFieldDecrement>
</template>


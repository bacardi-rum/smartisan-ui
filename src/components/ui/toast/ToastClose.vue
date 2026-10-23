<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ToastClose, type ToastCloseProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends ToastCloseProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ToastClose
    v-bind="props"
    :class="cn('rounded-full p-1 text-[#ad8a67]/70 hover:text-[#ad8a67] active:scale-95 transition-all cursor-pointer outline-none select-none', props.class)"
  >
    <svg viewBox="0 0 24 24" fill="none" class="size-4 stroke-current stroke-2">
      <path d="M18 6L6 18M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </ToastClose>
</template>

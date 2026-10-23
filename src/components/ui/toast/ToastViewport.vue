<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ToastViewport, type ToastViewportProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends ToastViewportProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ToastViewport
    v-bind="props"
    :class="cn(
      'fixed bottom-12 left-1/2 z-[100] flex -translate-x-1/2 flex-col gap-2 p-4 max-w-[420px] w-full items-center pointer-events-none',
      props.class
    )"
  />
</template>


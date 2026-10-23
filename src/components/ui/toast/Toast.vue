<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ToastRoot, type ToastRootEmits, type ToastRootProps, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends ToastRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<ToastRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ToastRoot
    v-bind="forwarded"
    :class="cn(
      'pointer-events-auto relative flex items-center justify-between gap-3 overflow-hidden rounded-[6px] border border-[#d2b89c] bg-gradient-to-b from-[#fcf6e6] to-[#fcf3dc] px-4 py-3 text-[14px] font-bold text-[#ad8a67] shadow-[0_4px_16px_rgba(0,0,0,0.10)] select-none data-[state=open]:animate-toast-in data-[state=closed]:animate-toast-out',
      props.class
    )"
  >
    <slot />
  </ToastRoot>
</template>

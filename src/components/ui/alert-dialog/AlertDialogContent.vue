<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  AlertDialogContent,
  type AlertDialogContentEmits,
  type AlertDialogContentProps,
  AlertDialogOverlay,
  AlertDialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends AlertDialogContentProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<AlertDialogContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <AlertDialogPortal>
    <AlertDialogOverlay
      class="fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200"
    />
    <AlertDialogContent
      v-bind="forwarded"
      :class="cn(
        'fixed left-1/2 top-1/2 z-50 w-[368px] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[12px] bg-white border border-[#e2e2e2] shadow-[0_12px_24px_rgba(0,0,0,0.18)] outline-none data-[state=open]:animate-dialog-in data-[state=closed]:animate-dialog-out',
        props.class
      )"
    >
      <slot />
    </AlertDialogContent>
  </AlertDialogPortal>
</template>

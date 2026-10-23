<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends DialogContentProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<DialogContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200"
    />
    <DialogContent
      v-bind="forwarded"
      :class="cn(
        'fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-[20px] border-t border-[#e2e2e2] bg-[#efefef] shadow-[0_10px_24px_rgba(0,0,0,0.18)] outline-none data-[state=open]:animate-sheet-in data-[state=closed]:animate-sheet-out',
        props.class
      )"
    >
      <div class="mx-auto mt-2 h-1.5 w-[36px] rounded-full bg-[#d0d0d0]" />
      <slot />
    </DialogContent>
  </DialogPortal>
</template>

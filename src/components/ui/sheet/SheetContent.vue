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
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const sheetVariants = cva(
  'fixed z-50 bg-[#efefef] shadow-[0_10px_24px_rgba(0,0,0,0.18)] outline-none',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b border-[#e2e2e2] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top duration-300',
        bottom: 'inset-x-0 bottom-0 rounded-t-[20px] border-t border-[#e2e2e2] data-[state=open]:animate-sheet-in data-[state=closed]:animate-sheet-out',
        left: 'inset-y-0 left-0 h-full w-3/4 max-w-sm border-r border-[#e2e2e2] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left duration-300',
        right: 'inset-y-0 right-0 h-full w-3/4 max-w-sm border-l border-[#e2e2e2] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300',
      },
    },
    defaultVariants: {
      side: 'bottom',
    },
  }
)

type SheetVariants = VariantProps<typeof sheetVariants>

interface Props extends DialogContentProps {
  side?: SheetVariants['side']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
})
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
      :class="cn(sheetVariants({ side }), props.class)"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>

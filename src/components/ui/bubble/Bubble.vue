<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const bubbleVariants = cva(
  'relative inline-block max-w-[85%] rounded-[12px] border px-4 py-3 text-[14px] leading-relaxed shadow-[0_4px_8px_rgba(0,0,0,0.06)]',
  {
    variants: {
      variant: {
        yellow: 'bg-gradient-to-b from-[#fcf6e6] to-[#fcf3dc] border-[#d2b89c] text-[#ad8a67]',
        blue: 'bg-gradient-to-b from-[#e7edfd] to-[#dbe6fd] border-[#93b2f7] text-[#3355aa]',
        white: 'bg-gradient-to-b from-white to-[#fafafa] border-[#e2e2e2] text-[#333333]',
        red: 'bg-gradient-to-b from-[#ffe7e5] to-[#fcdfdc] border-[#eb7f77] text-[#cc3e39]',
        dark: 'bg-gradient-to-b from-[#333538] to-[#252628] border-[#1d1e20] text-white/90',
      },
      align: {
        left: 'self-start rounded-tl-[2px]',
        right: 'self-end rounded-tr-[2px]',
      },
    },
    defaultVariants: {
      variant: 'yellow',
      align: 'left',
    },
  }
)

type BubbleVariants = VariantProps<typeof bubbleVariants>

interface Props {
  variant?: BubbleVariants['variant']
  align?: BubbleVariants['align']
  timestamp?: string
  author?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'yellow',
  align: 'left',
})
</script>

<template>
  <div :class="cn('flex flex-col gap-1', align === 'right' ? 'items-end' : 'items-start')">
    <div v-if="author || timestamp" class="flex items-center gap-2 px-1 text-[11px] font-semibold text-[#9d9d9d]">
      <span v-if="author">{{ author }}</span>
      <span v-if="timestamp">{{ timestamp }}</span>
    </div>
    <div :class="cn(bubbleVariants({ variant, align }), props.class)">
      <slot />
    </div>
  </div>
</template>


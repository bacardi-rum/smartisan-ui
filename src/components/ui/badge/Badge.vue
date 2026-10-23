<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  's-badge inline-flex items-center justify-center font-semibold rounded-full border transition-colors select-none',
  {
    variants: {
      variant: {
        default: 'bg-[#fafafa] border-[#cecece] text-[#646464] !text-[#646464]',
        secondary: 'bg-[#f0f0f0] border-[#dadada] text-[#646464] !text-[#646464]',
        blue: 'bg-white border-[#93b2f7] text-[#6393ff] !text-[#6393ff]',
        yellow: 'bg-[#fff5d9] border-[#ccb08c] text-[#cd9143] !text-[#cd9143]',
        red: 'bg-[#ffe7e5] border-[#eb7f77] text-[#cc3e39] !text-[#cc3e39]',
        destructive: 'bg-[#e5645a] border-[#da463e] text-white !text-white',
        outline: 'bg-transparent border-[#d3d3d3] text-[#7f7f7f] !text-[#7f7f7f]',
      },
      size: {
        default: 'h-[24px] px-2.5 text-[12px]',
        sm: 'h-[18px] px-1.5 text-[10px]',
        lg: 'h-[30px] px-4 text-[13px]',
        dot: 'size-2 p-0 border-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

type BadgeVariants = VariantProps<typeof badgeVariants>

interface Props {
  variant?: BadgeVariants['variant']
  size?: BadgeVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
})
</script>

<template>
  <span :class="cn(badgeVariants({ variant, size }), props.class)" data-badge>
    <slot />
  </span>
</template>

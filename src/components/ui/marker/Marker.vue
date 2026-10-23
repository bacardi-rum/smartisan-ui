<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const markerVariants = cva(
  'inline-block px-1.5 py-0.5 rounded-[2px] font-medium transition-all select-text',
  {
    variants: {
      color: {
        yellow: 'bg-[#fff580]/70 text-[#5c4a00] decoration-[#ffe600]/80',
        green: 'bg-[#c5f58c]/70 text-[#285208] decoration-[#9fe84b]/80',
        pink: 'bg-[#ffafbd]/70 text-[#6d1323] decoration-[#ff7b93]/80',
        blue: 'bg-[#b6d4fe]/70 text-[#143d7a] decoration-[#85b7fe]/80',
        orange: 'bg-[#ffd384]/70 text-[#6b4100] decoration-[#ffba3b]/80',
      },
      variant: {
        highlight: '',
        underline: 'bg-transparent underline decoration-2 underline-offset-4',
        box: 'border border-current/20 shadow-sm',
      },
    },
    defaultVariants: {
      color: 'yellow',
      variant: 'highlight',
    },
  }
)

type MarkerVariants = VariantProps<typeof markerVariants>

interface Props {
  color?: MarkerVariants['color']
  variant?: MarkerVariants['variant']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  color: 'yellow',
  variant: 'highlight',
})
</script>

<template>
  <mark :class="cn(markerVariants({ color, variant }), props.class)">
    <slot />
  </mark>
</template>


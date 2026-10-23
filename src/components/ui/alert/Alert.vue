<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-[8px] border p-4 shadow-[0_2px_6px_rgba(0,0,0,0.04)] [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-[#fafafa] text-[#333333] border-[#cecece]',
        info: 'bg-[#f0f5ff] text-[#333333] border-[#93b2f7] [&>svg]:text-[#5079d9]',
        warning: 'bg-[#fff9eb] text-[#333333] border-[#ccb08c] [&>svg]:text-[#cd9143]',
        destructive: 'bg-[#fff1f0] text-[#333333] border-[#eb7f77] [&>svg]:text-[#cc3e39]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

type AlertVariants = VariantProps<typeof alertVariants>

interface Props {
  variant?: AlertVariants['variant']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})
</script>

<template>
  <div :class="cn(alertVariants({ variant }), props.class)" role="alert">
    <slot />
  </div>
</template>


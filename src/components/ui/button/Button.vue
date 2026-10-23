<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { buttonVariants, type ButtonVariants } from './buttonVariants'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  block?: boolean
  class?: HTMLAttributes['class']
  disabled?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'default',
  size: 'default',
  block: false,
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :disabled="disabled || loading"
    :class="cn(buttonVariants({ variant, size, block }), props.class)"
  >
    <template v-if="variant === 'round'">
      <span
        :class="cn(
          'absolute rounded-full bg-gradient-to-b from-white to-[#fcfcfc] border border-[#eeeeee] flex items-center justify-center transition-all',
          size === 'round-sm'
            ? 'inset-[2.33px] shadow-[0_4px_4px_rgba(0,0,0,0.12)]'
            : 'inset-[6px] shadow-[0_5px_16.6px_rgba(0,0,0,0.21)]'
        )"
      >
        <slot />
      </span>
    </template>
    <template v-else>
      <slot />
    </template>
  </Primitive>
</template>


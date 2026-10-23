<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'lead' | 'muted'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'p',
})
</script>

<template>
  <h1 v-if="variant === 'h1'" :class="cn('text-[36px] sm:text-[44px] font-bold text-[#333333] tracking-tight leading-tight', props.class)">
    <slot />
  </h1>
  <h2 v-else-if="variant === 'h2'" :class="cn('text-[24px] sm:text-[28px] font-bold text-[#444444] tracking-tight leading-snug', props.class)">
    <slot />
  </h2>
  <h3 v-else-if="variant === 'h3'" :class="cn('text-[18px] sm:text-[20px] font-bold text-[#636363] tracking-normal', props.class)">
    <slot />
  </h3>
  <h4 v-else-if="variant === 'h4'" :class="cn('text-[16px] font-bold text-[#636363]', props.class)">
    <slot />
  </h4>
  <p v-else-if="variant === 'lead'" :class="cn('text-[16px] sm:text-[18px] text-[#7f7f7f] leading-relaxed', props.class)">
    <slot />
  </p>
  <p v-else-if="variant === 'muted'" :class="cn('text-[12px] sm:text-[13px] text-[#9d9d9d] leading-normal', props.class)">
    <slot />
  </p>
  <p v-else :class="cn('text-[15px] leading-relaxed text-[#333333]', props.class)">
    <slot />
  </p>
</template>


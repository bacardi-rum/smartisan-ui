<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AvatarRoot, type AvatarRootProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends AvatarRootProps {
  class?: HTMLAttributes['class']
  shape?: 'circle' | 'square'
  size?: 'sm' | 'default' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  shape: 'circle',
  size: 'default',
})
</script>

<template>
  <AvatarRoot
    :class="cn(
      'relative flex shrink-0 overflow-hidden border border-[#e2e2e2] bg-[#f5f5f5] shadow-[0_2px_4px_rgba(0,0,0,0.06)]',
      shape === 'circle' ? 'rounded-full' : 'rounded-[8px]',
      size === 'sm' && 'size-8',
      size === 'default' && 'size-10',
      size === 'lg' && 'size-14',
      props.class
    )"
  >
    <slot />
  </AvatarRoot>
</template>


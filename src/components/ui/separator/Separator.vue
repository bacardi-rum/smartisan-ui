<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Separator as RekaSeparator, type SeparatorProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends SeparatorProps {
  class?: HTMLAttributes['class']
  short?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
  short: false,
})
</script>

<template>
  <RekaSeparator
    :orientation="orientation"
    :decorative="decorative"
    :as="as"
    :as-child="asChild"
    :class="cn(
      'shrink-0 bg-[#f2f2f2]',
      orientation === 'horizontal' && 'h-[0.8px] w-full',
      orientation === 'vertical' && !short && 'h-full min-h-[54px] w-[1px]',
      orientation === 'vertical' && short && 'h-[12px] w-[0.8px] bg-[#eeeeee]',
      props.class
    )"
  />
</template>


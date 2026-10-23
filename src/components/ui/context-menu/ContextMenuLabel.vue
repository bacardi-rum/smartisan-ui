<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ContextMenuLabel, type ContextMenuLabelProps, useForwardProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends ContextMenuLabelProps {
  class?: HTMLAttributes['class']
  inset?: boolean
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <ContextMenuLabel
    v-bind="forwarded"
    :class="cn('px-3 py-1.5 text-[12px] font-bold text-[#9d9d9d]', inset && 'pl-8', props.class)"
  >
    <slot />
  </ContextMenuLabel>
</template>


<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ContextMenuItem, type ContextMenuItemProps, useForwardProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends ContextMenuItemProps {
  class?: HTMLAttributes['class']
  inset?: boolean
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <ContextMenuItem
    v-bind="forwarded"
    :class="cn(
      'relative flex h-[40px] cursor-pointer select-none items-center gap-2 rounded-[4px] px-3 text-[14px] font-medium text-[#636363] outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-[#f2f2f2] data-[highlighted]:text-[#333333] active:bg-[#e8e8e8]',
      inset && 'pl-8',
      props.class
    )"
  >
    <slot />
  </ContextMenuItem>
</template>


<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  ToggleGroupItem,
  type ToggleGroupItemProps,
  useForwardProps,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends ToggleGroupItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <ToggleGroupItem
    v-bind="forwarded"
    :class="cn(
      'inline-flex h-[32px] items-center justify-center px-4 text-[13px] font-bold text-[#636363] transition-all cursor-pointer border-r border-[#f2f2f2] last:border-r-0 hover:bg-[#fafafa] disabled:pointer-events-none disabled:opacity-50 select-none outline-none focus-visible:ring-1 focus-visible:ring-[#93b2f7]',
      'data-[state=on]:bg-gradient-to-b data-[state=on]:from-[#4878f0] data-[state=on]:to-[#6997f4] data-[state=on]:text-white data-[state=on]:shadow-[inset_0_1px_2px_rgba(0,0,0,0.12)] data-[state=on]:border-r-transparent',
      props.class
    )"
  >
    <slot />
  </ToggleGroupItem>
</template>


<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends TabsTriggerProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <TabsTrigger
    v-bind="forwarded"
    :class="cn(
      'inline-flex h-full items-center justify-center px-4 text-[13px] font-bold text-[#636363] transition-all cursor-pointer border-r border-[#f2f2f2] last:border-r-0 hover:bg-[#fafafa] disabled:pointer-events-none disabled:opacity-50 select-none outline-none focus-visible:ring-1 focus-visible:ring-[#93b2f7]',
      'data-[state=active]:bg-[#b2b2b2] data-[state=active]:text-white data-[state=active]:shadow-[inset_0_4px_10px_rgba(0,0,0,0.12),inset_0_0_0_0.4px_#a7a7a7] data-[state=active]:border-r-transparent',
      props.class
    )"
  >
    <slot />
  </TabsTrigger>
</template>


<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { StepperIndicator, type StepperIndicatorProps, useForwardProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends StepperIndicatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <StepperIndicator
    v-bind="forwarded"
    :class="cn(
      'flex size-8 shrink-0 items-center justify-center rounded-full border border-[#d3d3d3] bg-gradient-to-b from-white to-[#f5f5f5] font-mono text-[13px] font-bold text-[#636363] shadow-[0_1px_2px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all group-data-[state=active]:border-[#3f68e2] group-data-[state=active]:bg-gradient-to-b group-data-[state=active]:from-[#5b87eb] group-data-[state=active]:to-[#4b77db] group-data-[state=active]:text-white group-data-[state=active]:shadow-[0_2px_4px_rgba(80,121,217,0.3)] group-data-[state=completed]:border-[#79ad31] group-data-[state=completed]:bg-gradient-to-b group-data-[state=completed]:from-[#88bd3b] group-data-[state=completed]:to-[#79ad31] group-data-[state=completed]:text-white',
      props.class
    )"
  >
    <slot />
  </StepperIndicator>
</template>



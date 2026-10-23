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
      'flex size-8 items-center justify-center rounded-full border border-[#d3d3d3] bg-white font-mono text-[13px] font-bold text-[#636363] shadow-sm transition-colors group-data-[state=active]:border-[#3f68e2] group-data-[state=active]:bg-[#5b87eb] group-data-[state=active]:text-white group-data-[state=completed]:border-[#79ad31] group-data-[state=completed]:bg-[#79ad31] group-data-[state=completed]:text-white',
      props.class
    )"
  >
    <slot />
  </StepperIndicator>
</template>


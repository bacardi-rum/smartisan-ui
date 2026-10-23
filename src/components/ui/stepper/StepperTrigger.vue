<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { StepperTrigger, type StepperTriggerProps, useForwardProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends StepperTriggerProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <StepperTrigger
    v-bind="forwarded"
    :class="cn(
      'flex size-8 items-center justify-center rounded-full border border-[#d3d3d3] bg-white font-mono text-[13px] font-bold text-[#636363] shadow-sm outline-none transition-colors group-data-[state=active]:border-[#3f68e2] group-data-[state=active]:bg-gradient-to-b group-data-[state=active]:from-[#5b87eb] group-data-[state=active]:to-[#5883eb] group-data-[state=active]:text-white group-data-[state=completed]:border-[#79ad31] group-data-[state=completed]:bg-[#79ad31] group-data-[state=completed]:text-white',
      props.class
    )"
  >
    <slot />
  </StepperTrigger>
</template>


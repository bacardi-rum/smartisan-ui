<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { StepperSeparator, type StepperSeparatorProps, useForwardProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends StepperSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <StepperSeparator
    v-bind="forwarded"
    :class="cn(
      'h-[2px] flex-1 min-w-[20px] bg-[#e6e6e6] shadow-[inset_0_1px_1px_rgba(0,0,0,0.06)] rounded-full transition-colors group-data-[state=completed]:bg-[#79ad31] mx-2',
      props.class
    )"
  />
</template>


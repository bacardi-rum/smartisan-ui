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
      'flex items-center gap-2.5 rounded-[6px] p-1.5 focus:outline-none cursor-pointer transition-opacity hover:opacity-90',
      props.class
    )"
  >
    <slot />
  </StepperTrigger>
</template>



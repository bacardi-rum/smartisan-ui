<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import {
  injectStepperItemContext,
  injectStepperRootContext,
  type StepperSeparatorProps,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ StepperSeparatorProps {
  class?: HTMLAttributes['class']
  step?: number
}

const props = defineProps<Props>()

const rootContext = injectStepperRootContext(null)
const itemContext = injectStepperItemContext(null)

const state = computed(() => {
  if (itemContext?.state?.value) {
    return itemContext.state.value
  }
  if (props.step !== undefined && rootContext?.modelValue?.value !== undefined) {
    if (rootContext.modelValue.value > props.step) return 'completed'
    if (rootContext.modelValue.value === props.step) return 'active'
    return 'inactive'
  }
  return 'inactive'
})

const orientation = computed(() => props.orientation ?? rootContext?.orientation?.value ?? 'horizontal')
</script>

<template>
  <div
    role="separator"
    :data-state="state"
    :data-orientation="orientation"
    :class="cn(
      'h-[1px] flex-1 bg-[#e2e2e2] transition-colors group-data-[state=completed]:bg-[#79ad31] data-[state=completed]:bg-[#79ad31]',
      props.class
    )"
  />
</template>

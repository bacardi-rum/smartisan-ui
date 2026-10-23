<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { StepperRoot, type StepperRootEmits, type StepperRootProps, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends StepperRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<StepperRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <StepperRoot
    v-bind="forwarded"
    :class="cn('flex w-full items-center justify-between gap-2 select-none', props.class)"
  >
    <slot />
  </StepperRoot>
</template>


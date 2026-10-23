<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { StepperDescription, type StepperDescriptionProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends StepperDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <StepperDescription
    v-bind="props"
    :class="cn('text-[11px] text-[#9d9d9d] whitespace-nowrap', props.class)"
  >
    <slot />
  </StepperDescription>
</template>



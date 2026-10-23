<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { StepperTitle, type StepperTitleProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends StepperTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <StepperTitle
    v-bind="props"
    :class="cn('text-[14px] font-bold text-[#636363] group-data-[state=active]:text-[#5b87eb]', props.class)"
  >
    <slot />
  </StepperTitle>
</template>


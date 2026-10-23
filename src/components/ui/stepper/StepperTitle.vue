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
    :class="cn('text-[13px] font-medium text-[#333333] whitespace-nowrap group-data-[state=active]:font-bold group-data-[state=active]:text-[#5079d9]', props.class)"
  >
    <slot />
  </StepperTitle>
</template>



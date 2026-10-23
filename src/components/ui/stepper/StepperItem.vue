<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { StepperItem, type StepperItemProps, useForwardProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends StepperItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <StepperItem
    v-bind="forwarded"
    :class="cn('group flex items-center gap-3 flex-1 last:flex-none cursor-pointer', props.class)"
  >
    <slot />
  </StepperItem>
</template>



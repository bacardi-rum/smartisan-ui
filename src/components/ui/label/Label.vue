<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Label as RekaLabel, type LabelProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends LabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <RekaLabel
    v-bind="props"
    :class="cn('text-[14px] font-semibold text-[#636363] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none', props.class)"
  >
    <slot />
  </RekaLabel>
</template>


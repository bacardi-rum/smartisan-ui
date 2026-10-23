<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  NumberFieldRoot,
  type NumberFieldRootEmits,
  type NumberFieldRootProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends NumberFieldRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<NumberFieldRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <NumberFieldRoot
    v-bind="forwarded"
    :class="cn('relative flex items-center overflow-hidden rounded-[6px] border border-[#e2e2e2] bg-white shadow-[inset_0_4px_4px_rgba(0,0,0,0.04)]', props.class)"
  >
    <slot />
  </NumberFieldRoot>
</template>


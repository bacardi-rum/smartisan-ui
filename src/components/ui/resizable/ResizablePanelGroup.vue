<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  SplitterGroup,
  type SplitterGroupEmits,
  type SplitterGroupProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends SplitterGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<SplitterGroupEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SplitterGroup
    v-bind="forwarded"
    :class="cn(
      'flex size-full data-[panel-group-direction=vertical]:flex-col overflow-hidden rounded-[8px] border border-[#e2e2e2] bg-white shadow-sm',
      props.class
    )"
  >
    <slot />
  </SplitterGroup>
</template>



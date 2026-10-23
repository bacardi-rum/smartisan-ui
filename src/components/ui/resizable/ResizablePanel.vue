<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  SplitterPanel,
  type SplitterPanelEmits,
  type SplitterPanelProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends SplitterPanelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<SplitterPanelEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SplitterPanel
    v-bind="forwarded"
    :class="cn('overflow-auto p-4 select-none', props.class)"
  >
    <slot />
  </SplitterPanel>
</template>



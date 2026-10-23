<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  ToggleGroupRoot,
  type ToggleGroupRootEmits,
  type ToggleGroupRootProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends ToggleGroupRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<ToggleGroupRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ToggleGroupRoot
    v-bind="forwarded"
    :class="cn(
      'inline-flex items-center overflow-hidden rounded-[6px] border border-[#e2e2e2] bg-white p-0 shadow-sm select-none',
      props.class
    )"
  >
    <slot />
  </ToggleGroupRoot>
</template>


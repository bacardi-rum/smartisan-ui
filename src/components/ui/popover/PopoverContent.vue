<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  PopoverContent,
  type PopoverContentEmits,
  type PopoverContentProps,
  PopoverPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends PopoverContentProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 6,
})
const emits = defineEmits<PopoverContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <PopoverPortal>
    <PopoverContent
      v-bind="forwarded"
      :class="cn(
        'z-50 w-72 rounded-[8px] border border-[#e2e2e2] bg-white p-4 text-[#333333] shadow-[0_6px_16px_rgba(0,0,0,0.08)] outline-none data-[state=open]:animate-popup-in data-[state=closed]:animate-popup-out',
        props.class
      )"
    >
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>

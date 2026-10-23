<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Toggle, type ToggleEmits, type ToggleProps, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends ToggleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<ToggleEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <Toggle
    v-bind="forwarded"
    :class="cn(
      'inline-flex items-center justify-center rounded-[4px] border border-[#d3d3d3] bg-white px-3 py-1.5 text-[14px] font-bold text-[#636363] transition-all cursor-pointer hover:bg-[#fafafa] disabled:pointer-events-none disabled:opacity-50 select-none outline-none focus-visible:ring-1 focus-visible:ring-[#93b2f7]',
      'data-[state=on]:bg-gradient-to-b data-[state=on]:from-[#5b87eb] data-[state=on]:to-[#5883eb] data-[state=on]:border-[#3f68e2] data-[state=on]:text-white data-[state=on]:shadow-[0_2px_4px_rgba(0,0,0,0.12)]',
      props.class
    )"
  >
    <slot />
  </Toggle>
</template>


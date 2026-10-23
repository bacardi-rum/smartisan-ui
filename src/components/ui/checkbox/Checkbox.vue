<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  CheckboxIndicator,
  CheckboxRoot,
  type CheckboxRootEmits,
  type CheckboxRootProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends CheckboxRootProps {
  class?: HTMLAttributes['class']
  variant?: 'blue' | 'red'
  shape?: 'circle' | 'square'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'blue',
  shape: 'circle',
})

const emits = defineEmits<CheckboxRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="cn(
      'peer flex size-[22px] shrink-0 items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93b2f7] disabled:cursor-not-allowed disabled:opacity-40 select-none cursor-pointer',
      shape === 'circle' ? 'rounded-full' : 'rounded-[4px]',
      'border-[1.2px] border-[#c9c9c9] bg-white shadow-[inset_0_1px_1px_rgba(0,0,0,0.04)]',
      variant === 'blue' && 'data-[state=checked]:border-[#4f7ff0] data-[state=checked]:bg-gradient-to-b data-[state=checked]:from-[#6b97ff] data-[state=checked]:to-[#5a87f5] data-[state=checked]:shadow-[0_1px_1.5px_rgba(40,80,200,0.25)]',
      variant === 'red' && 'data-[state=checked]:border-[#d24a40] data-[state=checked]:bg-gradient-to-b data-[state=checked]:from-[#ec6a60] data-[state=checked]:to-[#e5584e] data-[state=checked]:shadow-[0_1px_1.5px_rgba(200,60,50,0.25)]',
      props.class
    )"
  >
    <CheckboxIndicator class="flex items-center justify-center text-white">
      <svg viewBox="0 0 24 24" fill="none" class="size-3.5 stroke-white stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
        <path d="M5 12l5 5L20 7" />
      </svg>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>


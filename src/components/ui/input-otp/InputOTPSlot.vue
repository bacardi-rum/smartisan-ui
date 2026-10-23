<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { PinInputInput, type PinInputInputProps, useForwardProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends PinInputInputProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <PinInputInput
    v-bind="forwarded"
    :class="cn(
      'relative flex size-11 items-center justify-center border-y border-r border-[#e2e2e2] first:border-l first:rounded-l-[6px] last:rounded-r-[6px] bg-white text-center font-mono text-[16px] font-bold text-[#333333] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] outline-none transition-all focus:z-10 focus:border-[#93b2f7] focus:ring-1 focus:ring-[#93b2f7]',
      props.class
    )"
  />
</template>


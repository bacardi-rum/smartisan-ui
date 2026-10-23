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
      'relative flex size-12 items-center justify-center rounded-[6px] border border-[#e2e2e2] bg-white text-center font-mono text-[18px] font-bold text-[#333333] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] outline-none transition-all focus:border-[#93b2f7] focus:ring-2 focus:ring-[#93b2f7] disabled:cursor-not-allowed disabled:opacity-50 select-none',
      props.class
    )"
  />
</template>


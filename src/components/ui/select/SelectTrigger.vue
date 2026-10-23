<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends SelectTriggerProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <SelectTrigger
    v-bind="forwarded"
    :class="cn(
      'flex h-[38px] w-full items-center justify-between rounded-[6px] border border-[#e2e2e2] bg-white px-3 py-1.5 text-[14px] text-[#333333] shadow-[inset_0_4px_4px_rgba(0,0,0,0.04)] outline-none transition-all placeholder:text-[#d9d9d9] focus:border-[#93b2f7] focus:ring-1 focus:ring-[#93b2f7] disabled:cursor-not-allowed disabled:opacity-50 select-none cursor-pointer',
      props.class
    )"
  >
    <slot />
    <SelectIcon as-child>
      <svg viewBox="0 0 24 24" fill="none" class="size-4 stroke-[#b2b2b2] stroke-2">
        <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </SelectIcon>
  </SelectTrigger>
</template>


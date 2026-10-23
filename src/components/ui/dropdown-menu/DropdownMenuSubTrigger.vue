<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { DropdownMenuSubTrigger, type DropdownMenuSubTriggerProps, useForwardProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends DropdownMenuSubTriggerProps {
  class?: HTMLAttributes['class']
  inset?: boolean
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwarded"
    :class="cn(
      'flex h-[40px] cursor-pointer select-none items-center justify-between rounded-[4px] px-3 text-[14px] font-medium text-[#636363] outline-none data-[state=open]:bg-[#f2f2f2] data-[highlighted]:bg-[#f2f2f2]',
      inset && 'pl-8',
      props.class
    )"
  >
    <slot />
    <svg viewBox="0 0 24 24" fill="none" class="ml-auto size-4 stroke-[#b2b2b2] stroke-2">
      <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </DropdownMenuSubTrigger>
</template>


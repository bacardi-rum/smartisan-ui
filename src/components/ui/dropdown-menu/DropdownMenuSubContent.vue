<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  DropdownMenuPortal,
  DropdownMenuSubContent,
  type DropdownMenuSubContentEmits,
  type DropdownMenuSubContentProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends DropdownMenuSubContentProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<DropdownMenuSubContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuSubContent
      v-bind="forwarded"
      :class="cn(
        'z-50 min-w-[180px] overflow-hidden rounded-[6px] border border-[#e2e2e2] bg-white p-1 text-[#333333] shadow-[0_8px_20px_rgba(0,0,0,0.10)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 select-none outline-none',
        props.class
      )"
    >
      <slot />
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</template>


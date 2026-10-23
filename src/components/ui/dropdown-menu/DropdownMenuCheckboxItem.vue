<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  DropdownMenuCheckboxItem,
  type DropdownMenuCheckboxItemEmits,
  type DropdownMenuCheckboxItemProps,
  DropdownMenuItemIndicator,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends DropdownMenuCheckboxItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<DropdownMenuCheckboxItemEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuCheckboxItem
    v-bind="forwarded"
    :class="cn(
      'relative flex h-[40px] cursor-pointer select-none items-center rounded-[4px] py-1.5 pl-8 pr-3 text-[14px] font-medium text-[#636363] outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-[#f2f2f2] data-[highlighted]:text-[#333333]',
      props.class
    )"
  >
    <span class="absolute left-2.5 flex size-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <svg viewBox="0 0 24 24" fill="none" class="size-3.5 stroke-[#5079d9] stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
          <path d="M5 12l5 5L20 7" />
        </svg>
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuCheckboxItem>
</template>


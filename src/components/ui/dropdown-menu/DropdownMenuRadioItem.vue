<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  DropdownMenuItemIndicator,
  DropdownMenuRadioItem,
  type DropdownMenuRadioItemEmits,
  type DropdownMenuRadioItemProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends DropdownMenuRadioItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<DropdownMenuRadioItemEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuRadioItem
    v-bind="forwarded"
    :class="cn(
      'relative flex h-[40px] cursor-pointer select-none items-center rounded-[4px] py-1.5 pl-8 pr-3 text-[14px] font-medium text-[#636363] outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-[#f2f2f2] data-[highlighted]:text-[#333333]',
      props.class
    )"
  >
    <span class="absolute left-2.5 flex size-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <span class="size-2 rounded-full bg-[#5079d9]" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>


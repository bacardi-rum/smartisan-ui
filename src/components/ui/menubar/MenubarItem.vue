<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { MenubarItem, type MenubarItemProps, useForwardProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends MenubarItemProps {
  class?: HTMLAttributes['class']
  inset?: boolean
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <MenubarItem
    v-bind="forwarded"
    :class="cn(
      'relative flex h-[36px] cursor-pointer select-none items-center rounded-[4px] px-3 text-[13px] font-medium text-[#636363] outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-[#f2f2f2] data-[highlighted]:text-[#333333]',
      inset && 'pl-8',
      props.class
    )"
  >
    <slot />
  </MenubarItem>
</template>


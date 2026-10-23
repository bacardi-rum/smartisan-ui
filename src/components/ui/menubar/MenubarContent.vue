<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  MenubarContent,
  type MenubarContentProps,
  MenubarPortal,
  useForwardProps,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends MenubarContentProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  align: 'start',
  alignOffset: -4,
  sideOffset: 6,
})
const forwarded = useForwardProps(props)
</script>

<template>
  <MenubarPortal>
    <MenubarContent
      v-bind="forwarded"
      :class="cn(
        'z-50 min-w-[180px] overflow-hidden rounded-[6px] border border-[#e2e2e2] bg-white p-1 text-[#333333] shadow-[0_8px_20px_rgba(0,0,0,0.10)] data-[state=open]:animate-popup-in data-[state=closed]:animate-popup-out select-none outline-none',
        props.class
      )"
    >
      <slot />
    </MenubarContent>
  </MenubarPortal>
</template>

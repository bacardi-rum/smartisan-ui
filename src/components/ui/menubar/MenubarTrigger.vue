<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { MenubarTrigger, type MenubarTriggerProps, useForwardProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends MenubarTriggerProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <MenubarTrigger
    v-bind="forwarded"
    :class="cn(
      'flex cursor-pointer select-none items-center rounded-[4px] px-3 py-1 text-[13px] font-semibold text-[#636363] outline-none transition-colors hover:bg-[#f2f2f2] data-[state=open]:bg-[#ebebeb] data-[state=open]:text-[#333333]',
      props.class
    )"
  >
    <slot />
  </MenubarTrigger>
</template>


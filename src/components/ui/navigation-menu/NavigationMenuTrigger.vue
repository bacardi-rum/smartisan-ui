<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  NavigationMenuTrigger,
  type NavigationMenuTriggerProps,
  useForwardProps,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends NavigationMenuTriggerProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forwarded"
    :class="cn(
      'group inline-flex h-9 w-max items-center justify-center rounded-[4px] px-3 py-1.5 text-[14px] font-semibold text-[#636363] transition-colors hover:bg-[#fafafa] hover:text-[#333333] focus:bg-[#f2f2f2] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-[#f2f2f2] data-[state=open]:text-[#333333]',
      props.class
    )"
  >
    <slot />
    <svg
      viewBox="0 0 24 24"
      fill="none"
      class="relative top-[1px] ml-1 size-3.5 stroke-[#b2b2b2] stroke-2 transition duration-200 group-data-[state=open]:rotate-180"
    >
      <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </NavigationMenuTrigger>
</template>


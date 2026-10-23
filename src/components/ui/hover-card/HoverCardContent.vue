<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  HoverCardContent,
  type HoverCardContentProps,
  HoverCardPortal,
  useForwardProps,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends HoverCardContentProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 6,
})
const forwarded = useForwardProps(props)
</script>

<template>
  <HoverCardPortal>
    <HoverCardContent
      v-bind="forwarded"
      :class="cn(
        'z-50 w-64 rounded-[8px] border border-[#e2e2e2] bg-white p-4 text-[#333333] shadow-[0_8px_20px_rgba(0,0,0,0.10)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 outline-none',
        props.class
      )"
    >
      <slot />
    </HoverCardContent>
  </HoverCardPortal>
</template>


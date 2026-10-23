<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  ContextMenuContent,
  type ContextMenuContentEmits,
  type ContextMenuContentProps,
  ContextMenuPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends ContextMenuContentProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<ContextMenuContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ContextMenuPortal>
    <ContextMenuContent
      v-bind="forwarded"
      :class="cn(
        'z-50 min-w-[200px] overflow-hidden rounded-[6px] border border-[#e2e2e2] bg-white p-1 text-[#333333] shadow-[0_8px_20px_rgba(0,0,0,0.10)] data-[state=open]:animate-popup-in data-[state=closed]:animate-popup-out select-none outline-none',
        props.class
      )"
    >
      <slot />
    </ContextMenuContent>
  </ContextMenuPortal>
</template>

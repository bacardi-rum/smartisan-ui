<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  NavigationMenuRoot,
  type NavigationMenuRootEmits,
  type NavigationMenuRootProps,
  NavigationMenuViewport,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends NavigationMenuRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<NavigationMenuRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuRoot
    v-bind="forwarded"
    :class="cn('relative z-30 flex max-w-max flex-1 items-center justify-center', props.class)"
  >
    <slot />
    <div class="absolute left-0 top-full flex justify-center">
      <NavigationMenuViewport
        class="origin-top-center relative mt-2 h-[var(--reka-navigation-menu-viewport-height)] w-[var(--reka-navigation-menu-viewport-width)] min-w-[320px] overflow-hidden rounded-[8px] border border-[#d8d8d8] bg-white text-[#333333] shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition-all data-[state=open]:animate-popup-in data-[state=closed]:animate-popup-out"
      />
    </div>
  </NavigationMenuRoot>
</template>

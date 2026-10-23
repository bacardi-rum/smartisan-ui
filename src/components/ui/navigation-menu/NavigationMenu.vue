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
    :class="cn('relative z-10 flex max-w-max flex-1 items-center justify-center', props.class)"
  >
    <slot />
    <div class="absolute left-0 top-full flex justify-center">
      <NavigationMenuViewport
        class="origin-top-center relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-[8px] border border-[#e2e2e2] bg-white text-[#333333] shadow-[0_8px_20px_rgba(0,0,0,0.10)] transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 md:w-[var(--reka-navigation-menu-viewport-width)]"
      />
    </div>
  </NavigationMenuRoot>
</template>


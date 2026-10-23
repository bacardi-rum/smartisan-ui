<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  NavigationMenuLink,
  type NavigationMenuLinkEmits,
  type NavigationMenuLinkProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends NavigationMenuLinkProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<NavigationMenuLinkEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuLink
    v-bind="forwarded"
    :class="cn('block select-none rounded-[4px] p-2.5 text-[14px] font-medium leading-none no-underline outline-none transition-colors hover:bg-[#f2f2f2] hover:text-[#333333]', props.class)"
  >
    <slot />
  </NavigationMenuLink>
</template>


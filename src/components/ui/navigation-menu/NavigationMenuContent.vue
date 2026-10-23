<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  NavigationMenuContent,
  type NavigationMenuContentEmits,
  type NavigationMenuContentProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends NavigationMenuContentProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<NavigationMenuContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuContent
    v-bind="forwarded"
    :class="cn(
      'left-0 top-0 w-max min-w-max p-3 md:absolute',
      props.class
    )"
  >
    <slot />
  </NavigationMenuContent>
</template>

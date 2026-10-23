<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { NavigationMenuList, type NavigationMenuListProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends NavigationMenuListProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <NavigationMenuList
    v-bind="props"
    :class="cn('group flex flex-1 list-none items-center justify-center gap-1 select-none', props.class)"
  >
    <slot />
  </NavigationMenuList>
</template>


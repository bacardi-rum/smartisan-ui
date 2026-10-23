<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { TabsList, type TabsListProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends TabsListProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <TabsList
    v-bind="props"
    :class="cn(
      'inline-flex h-[32px] items-center overflow-hidden rounded-[6px] border border-[#e2e2e2] bg-white p-0 shadow-sm select-none',
      props.class
    )"
  >
    <slot />
  </TabsList>
</template>


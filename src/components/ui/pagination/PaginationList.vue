<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { PaginationList, type PaginationListProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends PaginationListProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <PaginationList
    v-bind="props"
    :class="cn('flex items-center gap-1 select-none', props.class)"
  >
    <slot />
  </PaginationList>
</template>


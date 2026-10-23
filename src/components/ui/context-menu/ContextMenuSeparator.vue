<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ContextMenuSeparator, type ContextMenuSeparatorProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends ContextMenuSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ContextMenuSeparator
    v-bind="props"
    :class="cn('-mx-1 my-1 h-[0.8px] bg-[#f2f2f2]', props.class)"
  />
</template>


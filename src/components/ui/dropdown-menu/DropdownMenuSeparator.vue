<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { DropdownMenuSeparator, type DropdownMenuSeparatorProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends DropdownMenuSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DropdownMenuSeparator
    v-bind="props"
    :class="cn('-mx-1 my-1 h-[0.8px] bg-[#f2f2f2]', props.class)"
  />
</template>


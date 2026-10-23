<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('max-h-[300px] overflow-y-auto overflow-x-hidden p-1', props.class)">
    <slot />
  </div>
</template>


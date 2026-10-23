<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div data-s-swipe :class="cn('s-swipe', props.class)">
    <div class="s-swipe__actions">
      <slot name="actions" />
    </div>
    <div class="s-list-item w-full flex items-center justify-between">
      <slot />
    </div>
  </div>
</template>


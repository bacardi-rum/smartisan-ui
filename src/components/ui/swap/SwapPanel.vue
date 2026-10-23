<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  id?: string
  hidden?: boolean
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div :id="id" :hidden="hidden" :class="cn('s-swap__panel', props.class)">
    <slot />
  </div>
</template>


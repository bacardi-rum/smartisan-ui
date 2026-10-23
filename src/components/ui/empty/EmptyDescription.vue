<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <p :class="cn('mt-1.5 text-[12px] text-[#c8c8c8] max-w-sm', props.class)">
    <slot />
  </p>
</template>


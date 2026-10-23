<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <h3 :class="cn('text-[16px] font-bold text-[#636363] leading-tight tracking-tight', props.class)">
    <slot />
  </h3>
</template>


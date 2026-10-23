<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <h5 :class="cn('mb-1 font-bold text-[14px] leading-none tracking-tight text-[#636363]', props.class)">
    <slot />
  </h5>
</template>


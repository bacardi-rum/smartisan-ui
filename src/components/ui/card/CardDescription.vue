<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <p :class="cn('text-[13px] text-[#7f7f7f] leading-normal', props.class)">
    <slot />
  </p>
</template>


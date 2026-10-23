<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <h4 :class="cn('text-[16px] font-bold text-[#bababa]', props.class)">
    <slot />
  </h4>
</template>


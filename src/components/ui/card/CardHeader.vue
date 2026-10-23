<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('flex flex-col gap-1.5 p-4 sm:p-5 border-b border-[#f2f2f2] bg-[#fafafa]', props.class)">
    <slot />
  </div>
</template>


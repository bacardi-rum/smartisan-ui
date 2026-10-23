<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ol :class="cn('flex flex-wrap items-center gap-1.5 break-words text-[#7f7f7f]', props.class)">
    <slot />
  </ol>
</template>


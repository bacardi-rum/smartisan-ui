<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <form :class="cn('flex flex-col gap-4 w-full', props.class)">
    <slot />
  </form>
</template>


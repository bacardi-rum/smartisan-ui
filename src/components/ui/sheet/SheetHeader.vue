<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div
    :class="cn(
      'relative flex h-[48px] items-center justify-between border-b border-[#e2e2e2] bg-gradient-to-b from-white to-[#fafafa] px-4 rounded-t-[20px] select-none',
      props.class
    )"
  >
    <slot />
  </div>
</template>


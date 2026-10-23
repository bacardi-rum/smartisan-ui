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
      'flex h-full w-full flex-col overflow-hidden rounded-[10px] border border-[#e2e2e2] bg-white text-[#333333] shadow-[0_10px_16px_rgba(0,0,0,0.06)]',
      props.class
    )"
  >
    <slot />
  </div>
</template>


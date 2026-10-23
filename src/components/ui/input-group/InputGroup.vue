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
      'flex w-full items-center overflow-hidden rounded-[6px] border border-[#e2e2e2] bg-white shadow-[inset_0_4px_4px_rgba(0,0,0,0.04)] focus-within:border-[#93b2f7] focus-within:ring-1 focus-within:ring-[#93b2f7]',
      props.class
    )"
  >
    <slot />
  </div>
</template>


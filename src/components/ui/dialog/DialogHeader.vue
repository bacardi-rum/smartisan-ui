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
      'flex h-[48px] items-center justify-center border-b border-[#ededed] bg-[#fafafa] px-4 text-center select-none',
      props.class
    )"
  >
    <slot />
  </div>
</template>


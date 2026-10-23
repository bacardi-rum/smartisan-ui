<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  value?: string
  disabled?: boolean
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'select', val?: string): void
}>()
</script>

<template>
  <div
    :class="cn(
      'relative flex h-[44px] cursor-pointer select-none items-center gap-2 rounded-[4px] px-3 text-[14px] font-medium text-[#636363] outline-none transition-colors hover:bg-[#f2f2f2] hover:text-[#333333] active:bg-[#e8e8e8]',
      disabled && 'pointer-events-none opacity-50',
      props.class
    )"
    @click="() => !disabled && emit('select', value)"
  >
    <slot />
  </div>
</template>


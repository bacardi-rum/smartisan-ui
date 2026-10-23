<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  disabled?: boolean
}

const props = defineProps<Props>()
const model = defineModel<string | number>()
</script>

<template>
  <div class="relative w-full">
    <select
      v-model="model"
      :disabled="disabled"
      :class="cn(
        'flex h-[38px] w-full appearance-none rounded-[6px] border border-[#e2e2e2] bg-white px-3 pr-8 py-1.5 text-[14px] text-[#333333] shadow-[inset_0_4px_4px_rgba(0,0,0,0.04)] outline-none transition-all focus:border-[#93b2f7] focus:ring-1 focus:ring-[#93b2f7] disabled:cursor-not-allowed disabled:opacity-50 select-none cursor-pointer',
        props.class
      )"
    >
      <slot />
    </select>
    <div class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#b2b2b2]">
      <svg viewBox="0 0 24 24" fill="none" class="size-4 stroke-current stroke-2">
        <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
</template>


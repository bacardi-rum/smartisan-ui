<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  selected?: boolean
  label?: string
  description?: string
  disabled?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  selected: false,
  disabled: false,
})

const emit = defineEmits<{
  (e: 'select'): void
}>()
</script>

<template>
  <div
    :class="cn(
      'flex items-center gap-3 rounded-[8px] border p-3.5 transition-all cursor-pointer select-none',
      selected
        ? 'border-[#3f68e2] bg-[#f0f5ff] shadow-[0_2px_6px_rgba(63,104,226,0.12)]'
        : 'border-[#e2e2e2] bg-white hover:bg-[#fafafa] active:bg-[#f2f2f2]',
      disabled && 'pointer-events-none opacity-40',
      props.class
    )"
    @click="() => !disabled && emit('select')"
  >
    <!-- Indicator Circle -->
    <div
      :class="cn(
        'flex size-5 shrink-0 items-center justify-center rounded-full border transition-all',
        selected
          ? 'border-[#3f68e2] bg-gradient-to-b from-[#5b87eb] to-[#5883eb] text-white shadow-sm'
          : 'border-[#c9c9c9] bg-white'
      )"
    >
      <svg v-if="selected" viewBox="0 0 24 24" fill="none" class="size-3 stroke-white stroke-[3] stroke-linecap-round stroke-linejoin-round">
        <path d="M5 12l5 5L20 7" />
      </svg>
    </div>

    <!-- Content -->
    <div class="flex flex-col min-w-0">
      <span :class="cn('text-[14px] font-semibold', selected ? 'text-[#3355aa]' : 'text-[#333333]')">
        <slot>{{ label }}</slot>
      </span>
      <span v-if="description" class="text-[12px] text-[#7f7f7f]">{{ description }}</span>
    </div>
  </div>
</template>


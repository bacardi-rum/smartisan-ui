<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  placeholder?: string
  disabled?: boolean
  rows?: number
}

const props = withDefaults(defineProps<Props>(), {
  rows: 4,
})

const model = defineModel<string>()
</script>

<template>
  <textarea
    v-model="model"
    :rows="rows"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="cn(
      'flex min-h-[80px] w-full rounded-[6px] border border-[#e2e2e2] bg-white p-3 text-[14px] text-[#333333] shadow-[inset_0_4px_4px_rgba(0,0,0,0.04)] outline-none transition-all placeholder:text-[#d9d9d9] focus:border-[#93b2f7] focus:ring-1 focus:ring-[#93b2f7] disabled:cursor-not-allowed disabled:opacity-50 resize-y',
      props.class
    )"
  />
</template>


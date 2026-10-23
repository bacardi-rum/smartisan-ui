<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  type?: string
  placeholder?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})

const model = defineModel<string | number>()
</script>

<template>
  <input
    v-model="model"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="cn(
      'flex h-[38px] w-full rounded-[6px] border border-[#e2e2e2] bg-white px-3 py-1.5 text-[14px] text-[#333333] shadow-[inset_0_4px_4px_rgba(0,0,0,0.04)] outline-none transition-all placeholder:text-[#d9d9d9] focus:border-[#93b2f7] focus:ring-1 focus:ring-[#93b2f7] disabled:cursor-not-allowed disabled:opacity-50',
      props.class
    )"
  />
</template>


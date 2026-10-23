<script setup lang="ts">
import { onMounted, ref, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  title?: string
}

const props = defineProps<Props>()
const pickerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (pickerRef.value && typeof (window as any).Smartisan !== 'undefined') {
    (window as any).Smartisan.init(pickerRef.value)
  }
})
</script>

<template>
  <div ref="pickerRef" :class="cn('s-picker w-full rounded-[10px] overflow-hidden border border-[#e2e2e2] bg-white shadow-sm', props.class)">
    <div v-if="title || $slots.header" class="s-sheet__header flex items-center justify-between px-4 py-2 border-b border-[#e2e2e2] bg-[#f8f8f8]">
      <slot name="header">
        <span class="text-[14px] font-bold text-[#636363]">{{ title }}</span>
      </slot>
    </div>
    <div class="s-picker__body">
      <div class="s-picker__well">
        <div class="s-picker__band" />
        <slot />
      </div>
    </div>
  </div>
</template>


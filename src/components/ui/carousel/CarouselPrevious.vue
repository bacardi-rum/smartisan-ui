<script setup lang="ts">
import { inject, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const carousel = inject<any>('carousel')
</script>

<template>
  <button
    type="button"
    :class="cn(
      'absolute left-3 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full bg-white/90 border border-[#e2e2e2] text-[#636363] shadow-[0_4px_8px_rgba(0,0,0,0.12)] hover:bg-white active:scale-95 transition-all outline-none cursor-pointer select-none',
      props.class
    )"
    @click="carousel?.prev()"
  >
    <svg viewBox="0 0 24 24" fill="none" class="size-4 stroke-current stroke-2">
      <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</template>


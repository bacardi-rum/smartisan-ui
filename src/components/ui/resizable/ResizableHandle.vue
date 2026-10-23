<script setup lang="ts">
import { inject, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  withHandle?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  withHandle: true,
})

const resizable = inject<any>('resizable')
</script>

<template>
  <div
    :class="cn(
      'relative flex items-center justify-center bg-[#f2f2f2] transition-colors hover:bg-[#93b2f7] select-none',
      resizable?.direction === 'vertical'
        ? 'h-[2px] w-full cursor-row-resize'
        : 'w-[2px] h-full cursor-col-resize',
      props.class
    )"
  >
    <div
      v-if="withHandle"
      class="z-10 flex size-4 items-center justify-center rounded-full border border-[#d3d3d3] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.12)] text-[#929292]"
    >
      <svg viewBox="0 0 24 24" fill="none" class="size-2.5 fill-current">
        <circle cx="9" cy="12" r="1.5" />
        <circle cx="15" cy="12" r="1.5" />
      </svg>
    </div>
  </div>
</template>


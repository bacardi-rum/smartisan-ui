<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  size?: number | string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
})
</script>

<template>
  <div
    :class="cn('inline-flex items-center justify-center animate-spin text-[#5b87eb]', props.class)"
    :style="{ width: typeof size === 'number' ? `${size}px` : size, height: typeof size === 'number' ? `${size}px` : size }"
    role="status"
    aria-label="Loading"
  >
    <svg viewBox="0 0 24 24" fill="none" class="size-full">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="#e2e2e2"
        stroke-width="2.5"
      />
      <path
        d="M12 2C6.47715 2 2 6.47715 2 12"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>


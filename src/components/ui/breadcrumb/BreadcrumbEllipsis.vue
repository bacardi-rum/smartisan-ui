<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <span
    role="presentation"
    aria-hidden="true"
    :class="cn('flex size-7 items-center justify-center text-[#9d9d9d]', props.class)"
  >
    <svg viewBox="0 0 24 24" fill="none" class="size-4 fill-current">
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="6" cy="12" r="1.5" />
      <circle cx="18" cy="12" r="1.5" />
    </svg>
    <span class="sr-only">More</span>
  </span>
</template>


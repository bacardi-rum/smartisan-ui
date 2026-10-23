<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  heading?: string
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('overflow-hidden p-1 text-[#333333]', props.class)">
    <div v-if="heading" class="px-3 py-1.5 text-[12px] font-bold text-[#9d9d9d]">
      {{ heading }}
    </div>
    <slot />
  </div>
</template>


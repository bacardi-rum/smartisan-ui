<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  title?: string
  description?: string
  step?: string | number
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('flex flex-col gap-4 rounded-[10px] border border-[#e2e2e2] bg-white p-5 shadow-[0_10px_16px_rgba(0,0,0,0.04)] select-none', props.class)">
    <div v-if="title || step || description" class="flex flex-col gap-1 border-b border-[#f2f2f2] pb-3">
      <div class="flex items-center gap-2">
        <span v-if="step" class="inline-flex size-5 items-center justify-center rounded-full bg-[#5079d9] text-[11px] font-bold text-white">
          {{ step }}
        </span>
        <h4 v-if="title" class="text-[16px] font-bold text-[#333333]">{{ title }}</h4>
      </div>
      <p v-if="description" class="text-[13px] text-[#7f7f7f]">{{ description }}</p>
    </div>

    <div class="flex flex-col gap-2.5">
      <slot />
    </div>
  </div>
</template>


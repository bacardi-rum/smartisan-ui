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
  <div class="overflow-hidden">
    <div
      :class="cn('flex transition-transform duration-300 ease-[cubic-bezier(0.37,0,0.63,1)]', props.class)"
      :style="{ transform: `translateX(-${(carousel?.currentIndex.value || 0) * 100}%)` }"
    >
      <slot />
    </div>
  </div>
</template>


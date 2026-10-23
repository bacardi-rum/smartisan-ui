<script setup lang="ts">
import { provide, ref, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  direction?: 'horizontal' | 'vertical'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'horizontal',
})

const splitPos = ref(50) // percentage

provide('resizable', {
  direction: props.direction,
  splitPos,
})
</script>

<template>
  <div
    :class="cn(
      'flex size-full overflow-hidden rounded-[8px] border border-[#e2e2e2] bg-white',
      direction === 'vertical' ? 'flex-col' : 'flex-row',
      props.class
    )"
  >
    <slot />
  </div>
</template>


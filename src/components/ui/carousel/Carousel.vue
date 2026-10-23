<script setup lang="ts">
import { provide, ref, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  total?: number
}

const props = withDefaults(defineProps<Props>(), {
  total: 3,
})

const currentIndex = ref(0)

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = props.total - 1
  }
}

function next() {
  if (currentIndex.value < props.total - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

provide('carousel', {
  currentIndex,
  total: props.total,
  prev,
  next,
})
</script>

<template>
  <div :class="cn('relative w-full overflow-hidden rounded-[10px] select-none', props.class)">
    <slot :current-index="currentIndex" :prev="prev" :next="next" />
  </div>
</template>


<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { cn } from '@/lib/utils'
import { injectIconSprite } from './sprite'

interface Props {
  name?: string
  size?: number | string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 20,
})

onMounted(() => {
  injectIconSprite()
})

const iconHref = computed(() => {
  if (!props.name) return ''
  return props.name.startsWith('#') ? props.name : `#${props.name}`
})

const sizeStyle = computed(() => {
  const s = typeof props.size === 'number' ? `${props.size}px` : props.size
  return {
    width: s,
    height: s,
  }
})
</script>

<template>
  <svg :class="cn('s-icon inline-block flex-none text-current', props.class)" :style="sizeStyle" aria-hidden="true">
    <use :href="iconHref" />
  </svg>
</template>


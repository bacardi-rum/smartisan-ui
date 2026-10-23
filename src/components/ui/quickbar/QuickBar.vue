<script setup lang="ts">
import { onMounted, ref, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const barRef = ref<HTMLElement | null>(null)
const emit = defineEmits<{
  (e: 'letter', letter: string): void
}>()

onMounted(() => {
  if (barRef.value) {
    if (typeof (window as any).Smartisan !== 'undefined') {
      (window as any).Smartisan.init(barRef.value.parentElement || document)
    }
    barRef.value.addEventListener('s-letter', (ev: any) => {
      emit('letter', ev.detail)
    })
  }
})
</script>

<template>
  <div ref="barRef" :class="cn('s-quickbar', props.class)" />
</template>


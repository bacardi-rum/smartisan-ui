<script setup lang="ts">
import { nextTick, onMounted, ref, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  autoScroll?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoScroll: true,
})

const scrollerRef = ref<HTMLElement | null>(null)

function scrollToBottom() {
  nextTick(() => {
    if (scrollerRef.value) {
      scrollerRef.value.scrollTop = scrollerRef.value.scrollHeight
    }
  })
}

onMounted(() => {
  if (props.autoScroll) {
    scrollToBottom()
  }
})

defineExpose({
  scrollToBottom,
})
</script>

<template>
  <div
    ref="scrollerRef"
    :class="cn('flex flex-col gap-4 overflow-y-auto p-4', props.class)"
  >
    <slot />
  </div>
</template>


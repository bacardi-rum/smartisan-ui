<script setup lang="ts">
import { onMounted, ref, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const containerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (containerRef.value && typeof (window as any).Smartisan !== 'undefined') {
    (window as any).Smartisan.init(containerRef.value.parentElement || document)
  }
})
</script>

<template>
  <div
    ref="containerRef"
    :class="cn('s-elastic s-page--textured overflow-auto relative', props.class)"
    style="background: var(--s-page-texture);"
  >
    <div class="s-elastic__content">
      <slot />
    </div>
  </div>
</template>

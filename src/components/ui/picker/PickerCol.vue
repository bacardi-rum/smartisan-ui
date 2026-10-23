<script setup lang="ts">
import { onMounted, ref, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  loop?: boolean
  items?: (string | number)[]
  modelValue?: string | number
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  loop: true,
  items: () => [],
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: string | number): void
  (e: 'change', ev: any): void
}>()

const colRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (colRef.value) {
    if (typeof (window as any).Smartisan !== 'undefined') {
      (window as any).Smartisan.init(colRef.value.parentElement || document)
    }
    colRef.value.addEventListener('change', (ev: any) => {
      emit('update:modelValue', ev.detail.value)
      emit('change', ev)
    })
  }
})
</script>

<template>
  <div
    ref="colRef"
    data-s-wheel
    :data-s-loop="loop ? '' : undefined"
    :class="cn('s-picker__col', props.class)"
  >
    <slot>
      <span
        v-for="item in items"
        :key="item"
        :aria-selected="String(item) === String(modelValue) ? 'true' : undefined"
      >
        {{ item }}
      </span>
    </slot>
  </div>
</template>


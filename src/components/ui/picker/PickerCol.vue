<script setup lang="ts">
import { computed, nextTick, onMounted, ref, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  loop?: boolean
  items?: (string | number)[]
  options?: (string | number)[]
  modelValue?: string | number
  label?: string
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

const list = computed(() => {
  if (props.options && props.options.length > 0) return props.options
  return props.items
})

function initCol() {
  if (!colRef.value) return
  const Smartisan = (window as any).Smartisan
  if (Smartisan && typeof Smartisan.init === 'function') {
    delete (colRef.value as any)._wheel
    Smartisan.init(colRef.value.parentElement || document)
  }
}

onMounted(() => {
  nextTick(() => {
    requestAnimationFrame(() => {
      initCol()
      if (colRef.value) {
        colRef.value.addEventListener('change', (ev: any) => {
          emit('update:modelValue', ev.detail.value)
          emit('change', ev)
        })
      }
    })
  })
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
        v-for="item in list"
        :key="item"
        :aria-selected="String(item) === String(modelValue) ? 'true' : undefined"
      >
        {{ item }}{{ label ? ' ' + label : '' }}
      </span>
    </slot>
  </div>
</template>



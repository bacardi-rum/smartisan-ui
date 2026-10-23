<script setup lang="ts">
import { computed, provide, toRef, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  modelValue?: string | number | (string | number)[]
  multiple?: boolean
  title?: string
  description?: string
  step?: string | number
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  multiple: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: any): void
  (e: 'change', val: any): void
}>()

function selectValue(val: string | number) {
  if (props.multiple) {
    const current = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const idx = current.indexOf(val)
    if (idx >= 0) {
      current.splice(idx, 1)
    } else {
      current.push(val)
    }
    emit('update:modelValue', current)
    emit('change', current)
  } else {
    emit('update:modelValue', val)
    emit('change', val)
  }
}

provide('questionnaire', {
  modelValue: toRef(props, 'modelValue'),
  multiple: computed(() => props.multiple),
  selectValue,
})
</script>

<template>
  <div :class="cn('flex flex-col gap-4 rounded-[10px] border border-[#d8d8d8] bg-white p-5 shadow-[0_6px_16px_rgba(0,0,0,0.04)] select-none', props.class)">
    <div v-if="title || step || description" class="flex flex-col gap-1 border-b border-[#f2f2f2] pb-3">
      <div class="flex items-center gap-2">
        <span v-if="step" class="inline-flex size-5 items-center justify-center rounded-full bg-[#5079d9] text-[11px] font-bold text-white shadow-sm">
          {{ step }}
        </span>
        <h4 v-if="title" class="text-[15px] font-bold text-[#333333]">{{ title }}</h4>
      </div>
      <p v-if="description" class="text-[12px] text-[#7f7f7f]">{{ description }}</p>
    </div>

    <div class="flex flex-col gap-2.5">
      <slot />
    </div>
  </div>
</template>



<script setup lang="ts">
import { computed, inject, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  value?: string | number
  selected?: boolean
  label?: string
  description?: string
  disabled?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  selected: false,
  disabled: false,
})

const emit = defineEmits<{
  (e: 'select'): void
  (e: 'update:selected', val: boolean): void
}>()

const questionnaire = inject<any>('questionnaire', null)

const isSelected = computed(() => {
  if (questionnaire?.modelValue?.value !== undefined && props.value !== undefined) {
    if (questionnaire.multiple?.value) {
      return Array.isArray(questionnaire.modelValue.value) && questionnaire.modelValue.value.includes(props.value)
    }
    return questionnaire.modelValue.value === props.value
  }
  return props.selected
})

function handleClick() {
  if (props.disabled) return
  if (questionnaire && props.value !== undefined) {
    questionnaire.selectValue(props.value)
  }
  emit('select')
  emit('update:selected', !isSelected.value)
}
</script>

<template>
  <div
    :class="cn(
      'group relative flex items-center gap-3.5 rounded-[8px] border p-3.5 transition-all duration-100 cursor-pointer select-none active:scale-[0.99]',
      isSelected
        ? 'border-[#4b77db] bg-gradient-to-b from-[#f2f6ff] to-[#e8f0fe] shadow-[0_2px_6px_rgba(80,121,217,0.12),inset_0_1px_0_rgba(255,255,255,0.8)]'
        : 'border-[#dcdcdc] bg-gradient-to-b from-white to-[#fafafa] shadow-[0_1px_2px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-[#c5c5c5] hover:bg-[#f8f8f8] active:bg-[#f0f0f0]',
      disabled && 'pointer-events-none opacity-40',
      props.class
    )"
    @click="handleClick"
  >
    <!-- Indicator Circle with Smartisan inner inset and glow -->
    <div
      :class="cn(
        'flex size-5 shrink-0 items-center justify-center rounded-full border transition-all duration-150',
        isSelected
          ? 'border-[#3f68e2] bg-gradient-to-b from-[#5b87eb] to-[#4b77db] text-white shadow-[0_1px_3px_rgba(80,121,217,0.35),inset_0_1px_0_rgba(255,255,255,0.4)]'
          : 'border-[#c2c2c2] bg-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)] group-hover:border-[#999999]'
      )"
    >
      <svg
        v-if="isSelected"
        viewBox="0 0 24 24"
        fill="none"
        class="size-3 stroke-white stroke-[3.2] stroke-linecap-round stroke-linejoin-round"
      >
        <path d="M5 12l5 5L20 7" />
      </svg>
    </div>

    <!-- Content -->
    <div class="flex flex-col min-w-0 flex-1">
      <span
        :class="cn(
          'text-[14px] font-medium transition-colors',
          isSelected ? 'font-bold text-[#3d6fee]' : 'text-[#333333]'
        )"
      >
        <slot>{{ label }}</slot>
      </span>
      <span v-if="description" class="text-[12px] text-[#7f7f7f] mt-0.5">{{ description }}</span>
    </div>
  </div>
</template>



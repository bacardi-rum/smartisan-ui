<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  title?: string
  subtitle?: string
  detail?: string
  showArrow?: boolean
  pressable?: boolean
  disabled?: boolean
  selected?: boolean
  divider?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  pressable: true,
  disabled: false,
  selected: false,
  divider: true,
  showArrow: false,
})

const emit = defineEmits<{
  (e: 'click', ev: MouseEvent): void
}>()
</script>

<template>
  <div
    :class="cn(
      's-list-item group relative flex items-center gap-[18px] min-h-[60px] px-[18px] bg-white text-[#333333] select-none transition-none',
      divider && 'shadow-[inset_0_-0.8px_0_#f2f2f2]',
      pressable && !disabled && 'cursor-pointer active:!bg-[#5985eb] active:!text-white [&.is-pressed]:!bg-[#5985eb] [&.is-pressed]:!text-white',
      selected && 'bg-[#e5eeff]',
      disabled && 'pointer-events-none opacity-40',
      props.class
    )"
    :data-pressable="pressable && !disabled ? '' : undefined"
    :role="pressable ? 'button' : undefined"
    :aria-disabled="disabled ? 'true' : undefined"
    :aria-selected="selected ? 'true' : undefined"
    @click="(ev) => !disabled && emit('click', ev)"
  >
    <div v-if="$slots.leading" class="flex-none flex items-center justify-center text-[#929292] group-active:!text-white group-[.is-pressed]:!text-white">
      <slot name="leading" />
    </div>

    <div class="flex-1 min-w-0 flex flex-col justify-center py-2">
      <div v-if="title || $slots.default" class="text-[16px] leading-[22px] font-normal text-[#333333] truncate group-active:!text-white group-[.is-pressed]:!text-white">
        <slot>{{ title }}</slot>
      </div>
      <div v-if="subtitle || $slots.subtitle" class="text-[12px] leading-[18px] text-[#7f7f7f] truncate group-active:!text-white/80 group-[.is-pressed]:!text-white/80">
        <slot name="subtitle">{{ subtitle }}</slot>
      </div>
    </div>

    <div v-if="detail || $slots.detail || $slots.trailing || showArrow" class="flex-none flex items-center gap-2 text-[14px] text-[#7f7f7f]">
      <span v-if="detail || $slots.detail" class="group-active:!text-white/80 group-[.is-pressed]:!text-white/80">
        <slot name="detail">{{ detail }}</slot>
      </span>
      <slot name="trailing" />
      <svg
        v-if="showArrow"
        viewBox="0 0 24 24"
        fill="none"
        class="size-4 stroke-current stroke-2 text-[#bababa] group-active:!text-white group-[.is-pressed]:!text-white"
      >
        <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
</template>

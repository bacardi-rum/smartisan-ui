<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import Icon from '@/components/ui/icon/Icon.vue'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'delete'): void
}>()
</script>

<template>
  <div data-s-swipe :class="cn('s-swipe select-none relative', props.class)" @s-delete="emit('delete')">
    <div class="s-swipe__actions">
      <slot name="actions">
        <button
          type="button"
          data-s-swipe-delete
          class="flex size-9 items-center justify-center rounded-[6px] bg-[#d2463c] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_1px_2px_rgba(0,0,0,0.2)] hover:bg-[#de5248] active:bg-[#bd382f] cursor-pointer transition-colors"
          title="删除"
        >
          <Icon name="si-trash" :size="18" />
        </button>
      </slot>
    </div>
    <div class="s-list-item w-full flex items-center justify-between bg-white px-4 py-3.5 border-b border-[#e5e5e5] last:border-b-0 cursor-grab active:cursor-grabbing">
      <slot />
    </div>
  </div>
</template>




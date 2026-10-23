<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  name: string
  size?: string
  ext?: string
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'download'): void
  (e: 'delete'): void
}>()
</script>

<template>
  <div
    :class="cn(
      'flex items-center gap-3 rounded-[6px] border border-[#e2e2e2] bg-white p-2.5 shadow-[0_2px_4px_rgba(0,0,0,0.04)] hover:bg-[#fafafa] transition-colors select-none',
      props.class
    )"
  >
    <!-- File icon / extension badge -->
    <div class="flex size-9 shrink-0 items-center justify-center rounded-[4px] border border-[#d8d8d8] bg-gradient-to-b from-white to-[#f5f5f5] text-[10px] font-bold uppercase text-[#7f7f7f] shadow-sm">
      {{ ext || name.split('.').pop() || 'FILE' }}
    </div>

    <!-- Info -->
    <div class="flex flex-1 flex-col min-w-0">
      <span class="truncate text-[13px] font-medium text-[#333333]">{{ name }}</span>
      <span v-if="size" class="text-[11px] text-[#9d9d9d]">{{ size }}</span>
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-1 shrink-0">
      <button
        type="button"
        title="下载"
        class="flex size-7 items-center justify-center rounded-[4px] text-[#7f7f7f] hover:bg-[#f0f0f0] hover:text-[#5079d9] transition-colors cursor-pointer"
        @click="emit('download')"
      >
        <svg viewBox="0 0 24 24" fill="none" class="size-4 stroke-current stroke-2">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
        </svg>
      </button>
    </div>
  </div>
</template>


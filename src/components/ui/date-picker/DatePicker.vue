<script setup lang="ts">
import { ref } from 'vue'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import type { DateValue } from '@internationalized/date'

interface Props {
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '请选择日期',
})

const selectedDate = defineModel<DateValue>()
const open = ref(false)
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <button
        type="button"
        class="flex h-[38px] w-full items-center justify-between rounded-[6px] border border-[#e2e2e2] bg-white px-3 py-1.5 text-[14px] text-[#333333] shadow-[inset_0_4px_4px_rgba(0,0,0,0.04)] outline-none transition-all hover:bg-[#fafafa] focus:border-[#93b2f7] focus:ring-1 focus:ring-[#93b2f7] cursor-pointer select-none"
      >
        <span :class="selectedDate ? 'text-[#333333]' : 'text-[#d9d9d9]'">
          {{ selectedDate ? selectedDate.toString() : placeholder }}
        </span>
        <svg viewBox="0 0 24 24" fill="none" class="size-4 stroke-[#929292] stroke-2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0 border-0 bg-transparent shadow-none" align="start">
      <Calendar v-model="selectedDate" @update:model-value="() => open = false" />
    </PopoverContent>
  </Popover>
</template>


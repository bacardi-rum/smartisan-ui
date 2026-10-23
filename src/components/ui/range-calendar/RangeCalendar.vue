<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  RangeCalendarCell,
  RangeCalendarCellTrigger,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHead,
  RangeCalendarGridRow,
  RangeCalendarHeadCell,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeCalendarNext,
  RangeCalendarPrev,
  RangeCalendarRoot,
  type RangeCalendarRootEmits,
  type RangeCalendarRootProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends RangeCalendarRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<RangeCalendarRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <RangeCalendarRoot
    v-slot="{ grid, weekDays }"
    v-bind="forwarded"
    :class="cn('rounded-[10px] border border-[#e2e2e2] bg-white p-3 shadow-[0_10px_16px_rgba(0,0,0,0.04)] select-none', props.class)"
  >
    <RangeCalendarHeader class="relative flex w-full items-center justify-between pt-1 pb-3">
      <RangeCalendarPrev
        class="inline-flex size-7 items-center justify-center rounded-[4px] border border-[#e2e2e2] bg-[#fafafa] text-[#636363] hover:bg-[#f2f2f2] active:bg-[#e8e8e8] cursor-pointer outline-none transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" class="size-4 stroke-current stroke-2">
          <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </RangeCalendarPrev>

      <RangeCalendarHeading class="text-[14px] font-bold text-[#636363]" />

      <RangeCalendarNext
        class="inline-flex size-7 items-center justify-center rounded-[4px] border border-[#e2e2e2] bg-[#fafafa] text-[#636363] hover:bg-[#f2f2f2] active:bg-[#e8e8e8] cursor-pointer outline-none transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" class="size-4 stroke-current stroke-2">
          <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </RangeCalendarNext>
    </RangeCalendarHeader>

    <div class="flex flex-col gap-y-4 pt-1 sm:flex-row sm:gap-x-4 sm:gap-y-0">
      <RangeCalendarGrid v-for="month in grid" :key="month.value.toString()" class="w-full border-collapse space-y-1">
        <RangeCalendarGridHead>
          <RangeCalendarGridRow class="mb-1 flex">
            <RangeCalendarHeadCell
              v-for="day in weekDays"
              :key="day"
              class="w-8 rounded-md text-[12px] font-semibold text-[#9d9d9d]"
            >
              {{ day }}
            </RangeCalendarHeadCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridHead>
        <RangeCalendarGridBody class="grid">
          <RangeCalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`" class="flex w-full mt-1">
            <RangeCalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
              class="relative size-8 p-0 text-center text-[13px] focus-within:relative focus-within:z-20 data-[selected]:bg-[#e7edfd]"
            >
              <RangeCalendarCellTrigger
                :day="weekDate"
                :month="month.value"
                class="size-8 rounded-[4px] p-0 font-medium text-[#333333] transition-colors hover:bg-[#f2f2f2] outline-none data-[selection-start]:bg-gradient-to-b data-[selection-start]:from-[#5b87eb] data-[selection-start]:to-[#5883eb] data-[selection-start]:text-white data-[selection-start]:font-bold data-[selection-end]:bg-gradient-to-b data-[selection-end]:from-[#5b87eb] data-[selection-end]:to-[#5883eb] data-[selection-end]:text-white data-[selection-end]:font-bold data-[disabled]:text-[#bababa] data-[disabled]:opacity-40"
              />
            </RangeCalendarCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridBody>
      </RangeCalendarGrid>
    </div>
  </RangeCalendarRoot>
</template>


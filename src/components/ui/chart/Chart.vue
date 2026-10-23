<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

export interface ChartDatum {
  label: string
  value: number
  color?: string
}

interface Props {
  type?: 'bar' | 'donut'
  data: ChartDatum[]
  title?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  type: 'bar',
})

const defaultColors = ['#5b87eb', '#79ad31', '#cd9143', '#e5645a', '#9cbcff', '#8c8c8c']

const maxValue = computed(() => {
  return Math.max(...props.data.map((d) => d.value), 1)
})

const totalValue = computed(() => {
  return props.data.reduce((acc, d) => acc + d.value, 0) || 1
})
</script>

<template>
  <div :class="cn('flex flex-col gap-4 rounded-[10px] border border-[#e2e2e2] bg-white p-4 sm:p-5 shadow-[0_10px_16px_rgba(0,0,0,0.04)] select-none', props.class)">
    <div v-if="title" class="flex items-center justify-between border-b border-[#f2f2f2] pb-3">
      <h4 class="text-[15px] font-bold text-[#636363]">{{ title }}</h4>
      <span class="text-[12px] font-semibold text-[#9d9d9d]">总计: {{ totalValue }}</span>
    </div>

    <!-- Bar Chart -->
    <div v-if="type === 'bar'" class="flex flex-col gap-3 py-1">
      <div v-for="(item, idx) in data" :key="item.label" class="flex flex-col gap-1">
        <div class="flex items-center justify-between text-[13px]">
          <span class="font-medium text-[#636363]">{{ item.label }}</span>
          <span class="font-mono font-bold text-[#333333]">{{ item.value }}</span>
        </div>
        <div class="h-3 w-full overflow-hidden rounded-full bg-[#efefef] shadow-[inset_0_2px_3px_rgba(0,0,0,0.06)]">
          <div
            class="h-full rounded-full transition-all duration-500 shadow-sm"
            :style="{
              width: `${(item.value / maxValue) * 100}%`,
              backgroundColor: item.color || defaultColors[idx % defaultColors.length]
            }"
          />
        </div>
      </div>
    </div>

    <!-- Donut breakdown -->
    <div v-else-if="type === 'donut'" class="flex flex-col sm:flex-row items-center justify-around gap-6 py-2">
      <div class="relative size-32 flex items-center justify-center">
        <svg viewBox="0 0 36 36" class="size-full -rotate-90">
          <path
            v-for="(item, idx) in data"
            :key="item.label"
            class="transition-all duration-500"
            :stroke="item.color || defaultColors[idx % defaultColors.length]"
            stroke-width="4.5"
            stroke-linecap="round"
            fill="none"
            :stroke-dasharray="`${(item.value / totalValue) * 100}, 100`"
            :stroke-dashoffset="`-${data.slice(0, idx).reduce((acc, d) => acc + (d.value / totalValue) * 100, 0)}`"
          />
        </svg>
        <div class="absolute flex flex-col items-center justify-center">
          <span class="font-mono text-[18px] font-bold text-[#333333]">{{ totalValue }}</span>
          <span class="text-[10px] text-[#9d9d9d]">总量</span>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div v-for="(item, idx) in data" :key="item.label" class="flex items-center gap-2 text-[13px]">
          <span
            class="size-2.5 rounded-full"
            :style="{ backgroundColor: item.color || defaultColors[idx % defaultColors.length] }"
          />
          <span class="text-[#636363]">{{ item.label }}</span>
          <span class="ml-auto font-mono font-bold text-[#333333]">{{ Math.round((item.value / totalValue) * 100) }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>


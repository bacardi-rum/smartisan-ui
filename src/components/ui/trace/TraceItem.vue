<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  title: string
  time?: string
  status?: 'active' | 'success' | 'pending' | 'danger'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  status: 'pending',
})
</script>

<template>
  <div :class="cn('group relative flex gap-4 pb-6 last:pb-0', props.class)">
    <!-- Vertical connector line -->
    <div class="absolute left-[9px] top-4 bottom-0 w-[1px] bg-[#e2e2e2] group-last:hidden" />

    <!-- Node dot -->
    <div
      :class="cn(
        'relative z-10 flex size-[19px] shrink-0 items-center justify-center rounded-full border bg-white shadow-sm',
        status === 'active' && 'border-[#3f68e2] bg-gradient-to-b from-[#5b87eb] to-[#5883eb]',
        status === 'success' && 'border-[#7fb236] bg-[#79ad31]',
        status === 'danger' && 'border-[#d2463c] bg-[#e5645a]',
        status === 'pending' && 'border-[#d3d3d3] bg-[#fafafa]'
      )"
    >
      <span
        v-if="status === 'pending'"
        class="size-1.5 rounded-full bg-[#bababa]"
      />
      <span
        v-else
        class="size-1.5 rounded-full bg-white"
      />
    </div>

    <!-- Content -->
    <div class="flex flex-1 flex-col pt-0.5">
      <div class="flex items-center justify-between gap-2">
        <h5
          :class="cn(
            'text-[14px] font-bold',
            status === 'active' ? 'text-[#3d6fee]' : 'text-[#333333]'
          )"
        >
          {{ title }}
        </h5>
        <span v-if="time" class="text-[12px] text-[#9d9d9d]">{{ time }}</span>
      </div>
      <div v-if="$slots.default" class="mt-1 text-[13px] text-[#7f7f7f]">
        <slot />
      </div>
    </div>
  </div>
</template>


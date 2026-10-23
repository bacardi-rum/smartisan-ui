<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  RadioGroupIndicator,
  RadioGroupItem,
  type RadioGroupItemProps,
  useForwardProps,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends RadioGroupItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <RadioGroupItem
    v-bind="forwarded"
    :class="cn(
      'group relative size-[22px] rounded-full bg-[#ececec] shadow-[inset_0_0_2px_rgba(0,0,0,0.08)] flex items-center justify-center cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93b2f7] disabled:cursor-not-allowed disabled:opacity-50 select-none',
      props.class
    )"
  >
    <!-- Inactive disc -->
    <span
      class="size-[10px] rounded-full bg-gradient-to-b from-[#fbfbfb] to-[#f1f1f1] border border-[#ececec] shadow-[0_2px_4px_rgba(0,0,0,0.06)] group-data-[state=checked]:hidden"
    />

    <!-- Active disc -->
    <RadioGroupIndicator class="flex items-center justify-center">
      <span class="size-[10px] rounded-full bg-gradient-to-b from-[#95afe5] to-[#6889da] border border-[#5671c9] shadow-[0_2px_4px_rgba(0,0,0,0.06)]" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>


<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { SwitchRoot, type SwitchRootEmits, type SwitchRootProps, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends SwitchRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<SwitchRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="cn(
      'group relative inline-flex h-[24px] w-[52px] shrink-0 cursor-pointer items-center rounded-full border border-[#e2e2e2] bg-white shadow-[inset_0_4px_12px_rgba(0,0,0,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93b2f7] disabled:cursor-not-allowed disabled:opacity-50 select-none overflow-hidden transition-colors',
      props.class
    )"
  >
    <!-- Indicator Dot: blue left when checked (7.9px), grey right when unchecked (34.5px) -->
    <span
      class="pointer-events-none absolute top-[6.8px] size-[9.6px] rounded-full border transition-all duration-70 ease-linear left-[34.5px] bg-[#f4f4f4] border-[#e8e8e8] group-data-[state=checked]:left-[7.9px] group-data-[state=checked]:bg-gradient-to-b group-data-[state=checked]:from-[#9cbcff] group-data-[state=checked]:to-[#7da7ff] group-data-[state=checked]:border-[#769dfe]"
    />

    <!-- Tactile Thumb: left when unchecked (-0.4px), right when checked (28px) -->
    <span
      class="pointer-events-none absolute top-[-0.4px] left-[-0.4px] size-[24px] rounded-full bg-gradient-to-b from-white to-[#fcfcfc] border border-[#e2e2e2] shadow-[0_4px_4px_rgba(0,0,0,0.08)] group-active:shadow-[0_4px_4px_rgba(0,0,0,0.08),0_0_0_0.4px_#d0d0d0] group-active:from-[#ebebeb] group-active:to-[#f2f2f2] group-data-[state=checked]:left-[28px] transition-all duration-70 ease-linear"
    />
  </SwitchRoot>
</template>

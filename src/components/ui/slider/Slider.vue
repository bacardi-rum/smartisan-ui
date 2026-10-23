<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  SliderRange,
  SliderRoot,
  type SliderRootEmits,
  type SliderRootProps,
  SliderThumb,
  SliderTrack,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends SliderRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<SliderRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SliderRoot
    v-bind="forwarded"
    :class="cn(
      'relative flex w-full touch-none select-none items-center py-2 cursor-pointer',
      props.class
    )"
  >
    <SliderTrack class="relative h-[4px] w-full grow overflow-hidden rounded-full bg-[#efefef] shadow-[inset_0_4px_4px_rgba(0,0,0,0.06)]">
      <SliderRange class="absolute h-full bg-gradient-to-t from-[#668ff7] to-[#7ca3fb]" />
    </SliderTrack>
    <SliderThumb
      class="block size-[20px] rounded-full bg-white border border-[#f1f1f1] shadow-[0_4px_8px_rgba(0,0,0,0.16)] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93b2f7] active:scale-105 disabled:pointer-events-none disabled:opacity-50"
    />
  </SliderRoot>
</template>


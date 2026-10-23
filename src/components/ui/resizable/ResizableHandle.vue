<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  SplitterResizeHandle,
  type SplitterResizeHandleEmits,
  type SplitterResizeHandleProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends SplitterResizeHandleProps {
  withHandle?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  withHandle: true,
})
const emits = defineEmits<SplitterResizeHandleEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SplitterResizeHandle
    v-bind="forwarded"
    :class="cn(
      'relative flex w-[2px] items-center justify-center bg-[#e2e2e2] transition-colors after:absolute after:inset-y-0 after:left-1/2 after:w-3 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#5079d9] data-[panel-group-direction=vertical]:h-[2px] data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-3 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 select-none hover:bg-[#5079d9] active:bg-[#5079d9] cursor-col-resize data-[panel-group-direction=vertical]:cursor-row-resize',
      props.class
    )"
  >
    <div
      v-if="withHandle"
      class="z-10 flex h-6 w-3.5 items-center justify-center rounded-[3px] border border-[#d3d3d3] bg-gradient-to-b from-white to-[#f5f5f5] shadow-[0_1px_2px_rgba(0,0,0,0.12)] text-[#929292]"
    >
      <div class="flex flex-col gap-0.5">
        <span class="block size-0.5 rounded-full bg-[#888888]" />
        <span class="block size-0.5 rounded-full bg-[#888888]" />
        <span class="block size-0.5 rounded-full bg-[#888888]" />
      </div>
    </div>
  </SplitterResizeHandle>
</template>



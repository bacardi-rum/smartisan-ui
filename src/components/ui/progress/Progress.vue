<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  ProgressIndicator,
  ProgressRoot,
  type ProgressRootProps,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends ProgressRootProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
})
</script>

<template>
  <ProgressRoot
    v-bind="props"
    :class="cn(
      'relative h-2 w-full overflow-hidden rounded-full bg-[#efefef] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]',
      props.class
    )"
  >
    <ProgressIndicator
      class="size-full flex-1 bg-gradient-to-t from-[#668ff7] to-[#7ca3fb] transition-all duration-300"
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>


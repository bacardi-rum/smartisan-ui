<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ToastTitle, type ToastTitleProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends ToastTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ToastTitle v-bind="props" :class="cn('text-[14px] font-bold text-[#ad8a67]', props.class)">
    <slot />
  </ToastTitle>
</template>


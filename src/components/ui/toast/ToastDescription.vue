<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ToastDescription, type ToastDescriptionProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends ToastDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ToastDescription v-bind="props" :class="cn('text-[13px] text-[#ad8a67]/80', props.class)">
    <slot />
  </ToastDescription>
</template>


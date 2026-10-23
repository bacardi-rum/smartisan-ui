<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AlertDialogTitle, type AlertDialogTitleProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends AlertDialogTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogTitle
    v-bind="props"
    :class="cn('text-[18px] font-bold text-[#636363] tracking-normal', props.class)"
  >
    <slot />
  </AlertDialogTitle>
</template>


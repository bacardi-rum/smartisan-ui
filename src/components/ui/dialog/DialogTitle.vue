<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { DialogTitle, type DialogTitleProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends DialogTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DialogTitle
    v-bind="props"
    :class="cn('text-[18px] font-bold text-[#636363] tracking-normal', props.class)"
  >
    <slot />
  </DialogTitle>
</template>


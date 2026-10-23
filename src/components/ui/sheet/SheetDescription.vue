<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { DialogDescription, type DialogDescriptionProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends DialogDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DialogDescription
    v-bind="props"
    :class="cn('text-[13px] text-[#7f7f7f]', props.class)"
  >
    <slot />
  </DialogDescription>
</template>


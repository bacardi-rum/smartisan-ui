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
    :class="cn('p-5 text-[15px] leading-[22px] text-[#656565]', props.class)"
  >
    <slot />
  </DialogDescription>
</template>


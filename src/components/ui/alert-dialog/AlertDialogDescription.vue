<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AlertDialogDescription, type AlertDialogDescriptionProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends AlertDialogDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogDescription
    v-bind="props"
    :class="cn('p-5 text-[15px] leading-[22px] text-[#656565]', props.class)"
  >
    <slot />
  </AlertDialogDescription>
</template>


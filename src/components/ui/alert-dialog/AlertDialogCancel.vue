<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AlertDialogCancel, type AlertDialogCancelProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends AlertDialogCancelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogCancel
    v-bind="props"
    :class="cn('text-[#636363] hover:text-[#333333] active:bg-[#dfdfdf] transition-none cursor-pointer', props.class)"
  >
    <slot />
  </AlertDialogCancel>
</template>


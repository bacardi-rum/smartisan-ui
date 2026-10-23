<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AlertDialogAction, type AlertDialogActionProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends AlertDialogActionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogAction
    v-bind="props"
    :class="cn('text-[#5e80d0] hover:text-[#4772e6] active:bg-[#dfdfdf] transition-none cursor-pointer', props.class)"
  >
    <slot />
  </AlertDialogAction>
</template>


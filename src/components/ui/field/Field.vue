<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  invalid?: boolean
  disabled?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <div
    :class="cn('group flex flex-col gap-1.5 w-full', props.class)"
    :data-invalid="invalid ? '' : undefined"
    :data-disabled="disabled ? '' : undefined"
  >
    <slot />
  </div>
</template>


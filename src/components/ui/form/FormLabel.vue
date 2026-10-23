<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface Props {
  for?: string
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <Label :for="props.for" :class="cn('text-[14px] font-semibold text-[#636363]', props.class)">
    <slot />
  </Label>
</template>


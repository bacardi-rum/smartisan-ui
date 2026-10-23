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
  <Label
    :for="props.for"
    :class="cn('group-data-[invalid]:text-[#cc3e39] group-data-[disabled]:opacity-50', props.class)"
  >
    <slot />
  </Label>
</template>


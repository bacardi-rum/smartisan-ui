<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { SelectLabel, type SelectLabelProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends SelectLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectLabel :class="cn('px-2 py-1.5 text-[12px] font-bold text-[#9d9d9d]', props.class)">
    <slot />
  </SelectLabel>
</template>


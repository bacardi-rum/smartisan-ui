<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AccordionContent, type AccordionContentProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends AccordionContentProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AccordionContent
    v-bind="props"
    class="overflow-hidden text-[14px] text-[#656565] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  >
    <div :class="cn('px-4 pb-4 pt-1', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>


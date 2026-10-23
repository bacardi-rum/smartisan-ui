<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends AccordionTriggerProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="props"
      :class="cn(
        'group flex flex-1 items-center justify-between min-h-[54px] px-4 py-2 font-medium text-[15px] text-[#333333] transition-all hover:bg-[#fafafa] [&[data-state=open]>svg]:rotate-180 select-none cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#93b2f7]',
        props.class
      )"
    >
      <slot />
      <slot name="icon">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          class="size-4 shrink-0 stroke-[#b2b2b2] stroke-2 transition-transform duration-200"
        >
          <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>


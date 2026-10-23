<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AccordionItem, type AccordionItemProps, useForwardProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends AccordionItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <AccordionItem
    v-bind="forwarded"
    :class="cn('border-b border-[#f2f2f2] last:border-b-0', props.class)"
  >
    <slot />
  </AccordionItem>
</template>


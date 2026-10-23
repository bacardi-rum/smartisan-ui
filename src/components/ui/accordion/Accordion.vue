<script setup lang="ts">
import { AccordionRoot, type AccordionRootEmits, type AccordionRootProps, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<AccordionRootProps>()
const emits = defineEmits<AccordionRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <AccordionRoot v-bind="forwarded" class="w-full overflow-hidden rounded-[10px] border border-[#e2e2e2] bg-white shadow-[0_10px_16px_rgba(0,0,0,0.04)]">
    <slot />
  </AccordionRoot>
</template>


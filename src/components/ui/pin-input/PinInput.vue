<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { PinInputRoot, type PinInputRootEmits, type PinInputRootProps, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends PinInputRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<PinInputRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <PinInputRoot
    v-bind="forwarded"
    :class="cn('flex items-center gap-2', props.class)"
  >
    <slot />
  </PinInputRoot>
</template>


<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { PaginationRoot, type PaginationRootEmits, type PaginationRootProps, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends PaginationRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<PaginationRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <PaginationRoot
    v-bind="forwarded"
    :class="cn('mx-auto flex w-full justify-center', props.class)"
  >
    <slot />
  </PaginationRoot>
</template>


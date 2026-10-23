<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  TagsInputRoot,
  type TagsInputRootEmits,
  type TagsInputRootProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends TagsInputRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<TagsInputRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TagsInputRoot
    v-bind="forwarded"
    :class="cn(
      'flex min-h-[38px] w-full flex-wrap items-center gap-1.5 rounded-[6px] border border-[#e2e2e2] bg-white p-1.5 text-[14px] shadow-[inset_0_4px_4px_rgba(0,0,0,0.04)] focus-within:border-[#93b2f7] focus-within:ring-1 focus-within:ring-[#93b2f7]',
      props.class
    )"
  >
    <slot />
  </TagsInputRoot>
</template>


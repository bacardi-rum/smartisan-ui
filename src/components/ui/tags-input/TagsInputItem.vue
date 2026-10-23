<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  TagsInputItem,
  type TagsInputItemProps,
  useForwardProps,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends TagsInputItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <TagsInputItem
    v-bind="forwarded"
    :class="cn(
      'inline-flex h-[26px] items-center gap-1 rounded-full border border-[#cecece] bg-[#fafafa] px-2.5 text-[12px] font-semibold text-[#646464] select-none data-[state=active]:bg-[#f0f0f0]',
      props.class
    )"
  >
    <slot />
  </TagsInputItem>
</template>


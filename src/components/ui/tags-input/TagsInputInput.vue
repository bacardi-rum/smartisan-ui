<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  TagsInputInput,
  type TagsInputInputProps,
  useForwardProps,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends TagsInputInputProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <TagsInputInput
    v-bind="forwarded"
    :class="cn('flex-1 bg-transparent px-1 text-[13px] text-[#333333] outline-none placeholder:text-[#d9d9d9]', props.class)"
  />
</template>


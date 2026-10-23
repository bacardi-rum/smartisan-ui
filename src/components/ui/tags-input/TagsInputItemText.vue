<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  TagsInputItemText,
  type TagsInputItemTextProps,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends TagsInputItemTextProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <TagsInputItemText v-bind="props" :class="cn('text-[12px] truncate', props.class)" />
</template>


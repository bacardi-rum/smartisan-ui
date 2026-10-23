<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  TagsInputItemDelete,
  type TagsInputItemDeleteProps,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends TagsInputItemDeleteProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <TagsInputItemDelete
    v-bind="props"
    :class="cn('flex size-3.5 items-center justify-center rounded-full text-[#9d9d9d] hover:bg-[#e2e2e2] hover:text-[#333333]', props.class)"
  >
    <slot>
      <svg viewBox="0 0 24 24" fill="none" class="size-3 stroke-current stroke-2">
        <path d="M18 6L6 18M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </slot>
  </TagsInputItemDelete>
</template>


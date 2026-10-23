<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AvatarImage, type AvatarImageProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends AvatarImageProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AvatarImage
    v-bind="props"
    :class="cn('aspect-square size-full object-cover', props.class)"
  />
</template>


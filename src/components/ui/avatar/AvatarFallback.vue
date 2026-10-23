<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { AvatarFallback, type AvatarFallbackProps } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends AvatarFallbackProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AvatarFallback
    v-bind="props"
    :class="cn('flex size-full items-center justify-center font-bold text-[#7f7f7f] bg-gradient-to-b from-[#ffffff] to-[#f4f4f4]', props.class)"
  >
    <slot />
  </AvatarFallback>
</template>


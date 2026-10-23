<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('flex items-center p-4 sm:p-5 pt-0 text-[14px] text-[#797979]', props.class)">
    <slot />
  </div>
</template>


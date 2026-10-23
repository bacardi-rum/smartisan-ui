<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div
    :class="cn(
      'animate-pulse rounded-[6px] bg-gradient-to-r from-[#eeeeee] via-[#f7f7f7] to-[#eeeeee] border border-[#e5e5e5]/50',
      props.class
    )"
  />
</template>


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
      'flex h-[38px] shrink-0 items-center justify-center bg-[#fafafa] px-3 text-[14px] text-[#7f7f7f] border-x border-[#f2f2f2] first:border-l-0 last:border-r-0 select-none',
      props.class
    )"
  >
    <slot />
  </div>
</template>


<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <aside
    :class="cn(
      'flex h-full w-64 flex-col border-r border-[#e2e2e2] bg-[#f5f5f5] text-[#333333] select-none',
      props.class
    )"
  >
    <slot />
  </aside>
</template>


<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <tr
    :class="cn(
      'border-b border-[#f2f2f2] transition-colors hover:bg-[#fafafa] data-[state=selected]:bg-[#e5eeff]',
      props.class
    )"
  >
    <slot />
  </tr>
</template>


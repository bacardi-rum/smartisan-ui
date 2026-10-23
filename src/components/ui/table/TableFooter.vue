<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <tfoot :class="cn('border-t border-[#f2f2f2] bg-[#fafafa] font-medium [&>tr]:last:border-b-0', props.class)">
    <slot />
  </tfoot>
</template>


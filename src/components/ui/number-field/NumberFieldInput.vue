<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { NumberFieldInput } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <NumberFieldInput
    :class="cn(
      'h-[38px] w-full bg-transparent px-3 text-center font-mono text-[14px] text-[#333333] outline-none',
      props.class
    )"
  />
</template>


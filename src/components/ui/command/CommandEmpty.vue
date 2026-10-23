<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="cn('py-6 text-center text-[13px] text-[#9d9d9d]', props.class)">
    <slot>未找到相关结果</slot>
  </div>
</template>


<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  type?: string
  placeholder?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})

const model = defineModel<string | number>()
</script>

<template>
  <input
    v-model="model"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="cn(
      'flex h-[38px] w-full bg-transparent px-3 py-1.5 text-[14px] text-[#333333] outline-none placeholder:text-[#d9d9d9] disabled:cursor-not-allowed disabled:opacity-50',
      props.class
    )"
  />
</template>


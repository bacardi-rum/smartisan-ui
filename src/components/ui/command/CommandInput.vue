<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '搜索或输入命令...',
})

const model = defineModel<string>()
</script>

<template>
  <div class="flex items-center gap-3 border-b border-[#f2f2f2] px-4 py-2 bg-white">
    <svg viewBox="0 0 16 16" fill="none" class="size-4 shrink-0 text-[#929292]">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4723 10.3107C12.07 9.45225 12.4211 8.40513 12.4211 7.275C12.4211 4.3617 10.0882 2 7.21053 2C4.33283 2 2 4.3617 2 7.275C2 10.1883 4.33283 12.55 7.21053 12.55C8.40215 12.55 9.50035 12.145 10.3782 11.4636L12.3184 13.4279C12.6294 13.7427 13.1377 13.7427 13.4486 13.4279C13.7542 13.1185 13.7542 12.6209 13.4486 12.3115L11.4723 10.3107ZM7.21053 10.9857C5.18622 10.9857 3.5452 9.32436 3.5452 7.275C3.5452 5.22565 5.18622 3.56432 7.21053 3.56432C9.23483 3.56432 10.8759 5.22565 10.8759 7.275C10.8759 9.32436 9.23483 10.9857 7.21053 10.9857Z" fill="currentColor"/>
    </svg>
    <input
      v-model="model"
      :placeholder="placeholder"
      :class="cn(
        'flex h-9 w-full bg-transparent text-[14px] text-[#333333] outline-none placeholder:text-[#9d9d9d] disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )"
    />
  </div>
</template>


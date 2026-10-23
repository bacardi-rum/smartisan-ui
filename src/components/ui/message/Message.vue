<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  sender?: string
  time?: string
  isSelf?: boolean
  status?: 'sending' | 'sent' | 'read' | 'failed'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  isSelf: false,
})
</script>

<template>
  <div
    :class="cn(
      'flex gap-3 max-w-[85%]',
      isSelf ? 'ml-auto flex-row-reverse' : 'mr-auto flex-row',
      props.class
    )"
  >
    <div v-if="$slots.avatar" class="size-9 shrink-0">
      <slot name="avatar" />
    </div>

    <div :class="cn('flex flex-col gap-1', isSelf ? 'items-end' : 'items-start')">
      <div v-if="sender || time" class="flex items-center gap-2 px-1 text-[11px] font-semibold text-[#9d9d9d]">
        <span v-if="sender">{{ sender }}</span>
        <span v-if="time">{{ time }}</span>
      </div>

      <div
        :class="cn(
          'rounded-[12px] border px-4 py-2.5 text-[14px] leading-relaxed shadow-[0_2px_6px_rgba(0,0,0,0.06)]',
          isSelf
            ? 'rounded-tr-[2px] bg-gradient-to-b from-[#e7edfd] to-[#dce7fd] border-[#93b2f7] text-[#2f54d7]'
            : 'rounded-tl-[2px] bg-white border-[#e2e2e2] text-[#333333]'
        )"
      >
        <slot />
      </div>

      <div v-if="status" class="px-1 text-[10px] text-[#9d9d9d]">
        <span v-if="status === 'sent'">已发送</span>
        <span v-else-if="status === 'read'" class="text-[#5079d9]">已读</span>
        <span v-else-if="status === 'failed'" class="text-[#cc3e39]">发送失败</span>
        <span v-else>发送中...</span>
      </div>
    </div>
  </div>
</template>


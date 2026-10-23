<script setup lang="ts">
import { ref, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  language: 'typescript',
  showLineNumbers: true,
})

const copied = ref(false)

async function copyCode() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    // fallback
  }
}
</script>

<template>
  <div :class="cn('overflow-hidden rounded-[8px] border border-[#3b3c3f] bg-[#1a1b1d] text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] select-text', props.class)">
    <!-- Header -->
    <div class="flex h-10 items-center justify-between border-b border-[#2d2e31] bg-gradient-to-r from-[#222325] via-[#303134] to-[#222325] px-4 select-none">
      <div class="flex items-center gap-2">
        <span class="size-3 rounded-full bg-[#ec6a60]/90" />
        <span class="size-3 rounded-full bg-[#f4bd50]/90" />
        <span class="size-3 rounded-full bg-[#62c755]/90" />
        <span v-if="title" class="ml-2 font-mono text-[12px] font-semibold text-[#b8b8b8]">{{ title }}</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="font-mono text-[11px] uppercase tracking-wider text-[#8c8c8c]">{{ language }}</span>
        <button
          type="button"
          class="flex items-center gap-1 rounded-[4px] border border-[#444] bg-[#2a2b2e] px-2 py-0.5 text-[11px] text-[#b8b8b8] hover:bg-[#38393d] hover:text-white active:scale-95 transition-all cursor-pointer select-none"
          @click="copyCode"
        >
          <svg v-if="!copied" viewBox="0 0 24 24" fill="none" class="size-3.5 stroke-current stroke-2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" class="size-3.5 stroke-[#62c755] stroke-[2.5]">
            <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>{{ copied ? '已复制' : '复制' }}</span>
        </button>
      </div>
    </div>

    <!-- Code body -->
    <pre class="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-[#e0e0e0]"><code>{{ code }}</code></pre>
  </div>
</template>


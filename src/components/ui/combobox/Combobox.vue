<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import {
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxPortal,
  ComboboxRoot,
  type ComboboxRootEmits,
  type ComboboxRootProps,
  ComboboxTrigger,
  ComboboxViewport,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/lib/utils'

interface Option {
  label: string
  value: string
  disabled?: boolean
}

interface Props extends ComboboxRootProps {
  options?: Option[]
  placeholder?: string
  class?: HTMLAttributes['class']
  emptyText?: string
}

const props = withDefaults(defineProps<Props>(), {
  emptyText: '暂无匹配项',
  placeholder: '请选择或搜索...',
})

const emits = defineEmits<ComboboxRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ComboboxRoot v-bind="forwarded" :class="cn('relative w-full', props.class)">
    <div class="relative w-full">
      <ComboboxInput
        :placeholder="placeholder"
        :class="cn(
          'flex h-[38px] w-full rounded-[6px] border border-[#e2e2e2] bg-white px-3 pr-8 py-1.5 text-[14px] text-[#333333] shadow-[inset_0_4px_4px_rgba(0,0,0,0.04)] outline-none transition-all placeholder:text-[#d9d9d9] focus:border-[#93b2f7] focus:ring-1 focus:ring-[#93b2f7] disabled:cursor-not-allowed disabled:opacity-50'
        )"
      />
      <ComboboxTrigger class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#b2b2b2] outline-none">
        <svg viewBox="0 0 24 24" fill="none" class="size-4 stroke-current stroke-2">
          <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </ComboboxTrigger>
    </div>

    <ComboboxPortal>
      <ComboboxContent
        class="z-50 min-w-[var(--reka-combobox-trigger-width)] overflow-hidden rounded-[6px] border border-[#e2e2e2] bg-white p-1 text-[#333333] shadow-[0_8px_20px_rgba(0,0,0,0.10)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 select-none outline-none"
      >
        <ComboboxViewport class="p-1">
          <ComboboxEmpty class="py-4 text-center text-[13px] text-[#9d9d9d]">
            {{ emptyText }}
          </ComboboxEmpty>

          <slot>
            <ComboboxGroup v-if="options?.length">
              <ComboboxItem
                v-for="opt in options"
                :key="opt.value"
                :value="opt.value"
                :disabled="opt.disabled"
                class="relative flex h-[38px] w-full cursor-pointer select-none items-center rounded-[4px] py-1.5 pl-8 pr-2 text-[14px] font-medium text-[#636363] outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-[#f2f2f2] data-[highlighted]:text-[#333333]"
              >
                <span class="absolute left-2 flex size-3.5 items-center justify-center">
                  <ComboboxItemIndicator>
                    <svg viewBox="0 0 24 24" fill="none" class="size-3.5 stroke-[#5079d9] stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </ComboboxItemIndicator>
                </span>
                <span>{{ opt.label }}</span>
              </ComboboxItem>
            </ComboboxGroup>
          </slot>
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>


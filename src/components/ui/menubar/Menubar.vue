<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { MenubarRoot, type MenubarRootEmits, type MenubarRootProps, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props extends MenubarRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const emits = defineEmits<MenubarRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <MenubarRoot
    v-bind="forwarded"
    :class="cn(
      'flex h-[40px] items-center gap-1 rounded-[6px] border border-[#e2e2e2] bg-white p-1 shadow-sm select-none',
      props.class
    )"
  >
    <slot />
  </MenubarRoot>
</template>


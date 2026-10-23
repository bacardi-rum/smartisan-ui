<script setup lang="ts">
import { Dialog, DialogContent } from '@/components/ui/dialog'

interface Props {
  open?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:open', val: boolean): void
}>()
</script>

<template>
  <Dialog :open="open" @update:open="(v) => emit('update:open', v)">
    <DialogContent class="overflow-hidden p-0 shadow-[0_16px_32px_rgba(0,0,0,0.18)] max-w-xl w-[90vw]">
      <slot />
    </DialogContent>
  </Dialog>
</template>


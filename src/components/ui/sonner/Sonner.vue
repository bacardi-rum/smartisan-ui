<script setup lang="ts">
import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport, useToast } from '@/components/ui/toast'

const { toasts } = useToast()
</script>

<template>
  <ToastProvider>
    <Toast
      v-for="t in toasts"
      :key="t.id"
      :open="true"
    >
      <div class="flex flex-col gap-0.5">
        <ToastTitle v-if="t.title">{{ t.title }}</ToastTitle>
        <ToastDescription v-if="t.description">{{ t.description }}</ToastDescription>
      </div>
    </Toast>
    <ToastViewport />
  </ToastProvider>
</template>


import { ref } from 'vue'

export interface ToastItem {
  id: string
  title?: string
  description?: string
  duration?: number
  open?: boolean
}

const toasts = ref<ToastItem[]>([])

let count = 0

export function useToast() {
  function toast(item: Omit<ToastItem, 'id'> | string) {
    const id = (++count).toString()
    const entry: ToastItem = typeof item === 'string'
      ? { id, title: item, duration: 2500, open: true }
      : { id, duration: 2500, open: true, ...item }

    toasts.value.push(entry)

    setTimeout(() => {
      dismiss(id)
    }, entry.duration)

    return id
  }

  function dismiss(id: string) {
    const target = toasts.value.find((t) => t.id === id)
    if (target) {
      target.open = false
      setTimeout(() => {
        toasts.value = toasts.value.filter((t) => t.id !== id)
      }, 250)
    }
  }

  return {
    toasts,
    toast,
    dismiss,
  }
}

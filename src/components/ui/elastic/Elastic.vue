<script setup lang="ts">
import { onMounted, ref, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const containerRef = ref<HTMLElement | null>(null)

let y0 = 0
let raw = 0
let active = false

function offset(r: number, box: HTMLElement) {
  const dragged = Math.abs(r * 0.5)
  const max = r > 0 ? 200 : 120
  const R = Math.max(window.innerHeight / 2, box.clientHeight)
  return Math.sign(r) * Math.min(max * (1 - Math.pow(100, -dragged / R)), dragged)
}

function handlePointerDown(e: PointerEvent) {
  if (e.button !== 0 && e.pointerType === 'mouse') return
  const box = containerRef.value
  if (!box) return
  // Don't drag if user is initiating swipe on a child row
  if ((e.target as HTMLElement)?.closest('.s-swipe')) return

  y0 = e.clientY
  raw = 0
  active = false
  box.classList.remove('is-returning')

  function handlePointerMove(ev: PointerEvent) {
    if (!box) return
    const dy = ev.clientY - y0
    y0 = ev.clientY
    const atTop = box.scrollTop <= 0
    const atEnd = box.scrollTop + box.clientHeight >= box.scrollHeight - 1

    if (!active && !(atTop && dy > 0) && !(atEnd && dy < 0)) return
    raw += dy
    if ((raw > 0 && !atTop) || (raw < 0 && !atEnd)) raw = 0
    active = raw !== 0
    if (active) {
      ev.preventDefault()
      box.style.setProperty('--o', `${offset(raw, box)}px`)
    }
  }

  function handlePointerUp() {
    window.removeEventListener('pointermove', handlePointerMove)
    window.removeEventListener('pointerup', handlePointerUp)
    if (!active || !box) return
    active = false
    raw = 0
    box.classList.add('is-returning')
    box.style.setProperty('--o', '0px')
  }

  window.addEventListener('pointermove', handlePointerMove)
  window.addEventListener('pointerup', handlePointerUp)
}

onMounted(() => {
  if (containerRef.value && typeof (window as any).Smartisan !== 'undefined') {
    (window as any).Smartisan.init(containerRef.value.parentElement || document)
  }
})
</script>

<template>
  <div
    ref="containerRef"
    :class="cn('s-elastic s-page--textured overflow-auto relative select-none', props.class)"
    style="background: var(--s-page-texture);"
    @pointerdown="handlePointerDown"
  >
    <div class="s-elastic__content">
      <slot />
    </div>
  </div>
</template>


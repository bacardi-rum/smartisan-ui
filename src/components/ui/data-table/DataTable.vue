<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

export interface Column<T = any> {
  key: string
  title: string
  width?: string
  render?: (row: T) => any
}

interface Props {
  columns: Column[]
  data: Record<string, any>[]
  searchable?: boolean
  selectable?: boolean
  searchPlaceholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  searchable: true,
  selectable: false,
  searchPlaceholder: '搜索数据...',
})

const searchQuery = ref('')
const selectedRowKeys = ref<Set<number>>(new Set())

const filteredData = computed(() => {
  if (!searchQuery.value.trim()) return props.data
  const q = searchQuery.value.toLowerCase()
  return props.data.filter((row) =>
    Object.values(row).some((val) => String(val).toLowerCase().includes(q))
  )
})

const isAllSelected = computed(() => {
  return filteredData.value.length > 0 && selectedRowKeys.value.size === filteredData.value.length
})

function toggleAll() {
  if (isAllSelected.value) {
    selectedRowKeys.value.clear()
  } else {
    filteredData.value.forEach((_, idx) => selectedRowKeys.value.add(idx))
  }
}

function toggleRow(idx: number) {
  if (selectedRowKeys.value.has(idx)) {
    selectedRowKeys.value.delete(idx)
  } else {
    selectedRowKeys.value.add(idx)
  }
}
</script>

<template>
  <div class="flex flex-col gap-3 w-full">
    <div v-if="searchable" class="flex items-center justify-between">
      <div class="w-72">
        <Input v-model="searchQuery" :placeholder="searchPlaceholder" />
      </div>
      <div v-if="selectable && selectedRowKeys.size > 0" class="text-[13px] font-bold text-[#5079d9]">
        已选择 {{ selectedRowKeys.size }} 项
      </div>
    </div>

    <Table>
      <TableHeader>
        <TableRow>
          <TableHead v-if="selectable" class="w-12 text-center">
            <Checkbox :model-value="isAllSelected" @update:model-value="toggleAll" />
          </TableHead>
          <TableHead
            v-for="col in columns"
            :key="col.key"
            :style="col.width ? { width: col.width } : undefined"
          >
            {{ col.title }}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-if="filteredData.length > 0">
          <TableRow
            v-for="(row, idx) in filteredData"
            :key="idx"
            :data-state="selectedRowKeys.has(idx) ? 'selected' : undefined"
          >
            <TableCell v-if="selectable" class="text-center">
              <Checkbox
                :model-value="selectedRowKeys.has(idx)"
                @update:model-value="() => toggleRow(idx)"
              />
            </TableCell>
            <TableCell v-for="col in columns" :key="col.key">
              <slot :name="`cell-${col.key}`" :row="row">
                {{ col.render ? col.render(row) : row[col.key] }}
              </slot>
            </TableCell>
          </TableRow>
        </template>
        <TableRow v-else>
          <TableCell :colspan="columns.length + (selectable ? 1 : 0)" class="h-24 text-center text-[#9d9d9d]">
            暂无数据
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>


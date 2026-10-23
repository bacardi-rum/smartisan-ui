# Smartisan UI

> 基于 **Smartisan OS（锤子科技 / 坚果手机）** 拟物设计语言与 **Reka UI / Tailwind CSS v4** 构建的现代化 Vue 3 组件库。

[![Vue 3](https://img.shields.io/badge/Vue-3.5+-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🎨 拟物美学与设计哲学

本项目忠实还原 Smartisan OS 经典人机交互与视觉细节，并经 Smartisan R2 真机校对：

1. **轻拟物光影层次**：
   - 告别单调扁平色块，控件具备实体触感；
   - 纵向 180° 微渐变（同色系 2%~5% 明度差，如主蓝 `#5b87eb` → `#5883eb`）；
   - 极细描边（`0.4px` / `0.5px` / `0.8px`，`#e2e2e2` / `#eee`）；
   - 内凹阴影（`inset 0 4px 12px rgba(0,0,0,0.10)`）与短柔投影（`0 4px 2px rgba(0,0,0,0.10)`）。
2. **纯粹物理反馈**：
   - 按下瞬间沉降换色，主按钮即刻切换至深蓝 `#4772e6`；
   - 列表行长按 100ms 触发经典锤子蓝 `#5985eb` 背景且文字全白反色，滚动时自动取消无光斑闪烁；
   - 快速点击保留至少 64ms 视觉反馈，交互干脆利落。
3. **6dp 网格与官方灰阶排版体系**：
   - 遵循 `6 / 12 / 18 / 24 / 30 / 36 / 48 / 60` dp 网格；
   - 严禁纯黑，正文 `#333333`、次级 `#636363`、弱化 `#7f7f7f`、禁用 `#bababa`；
   - 经典暖黄羊皮纸 Toast（`#fcf6e6` 配棕字 `#ad8a67`）、368px 居中对话框、28.8px 分段内凹 Tab。
4. **开箱即用的原生动效与图标**：
   - 内置 29 款官方原生 Smartisan SVG Symbol，客户端自动注入，零配置直接显示；
   - 包含橡皮筋回弹 (`Elastic`)、向右滑动删除 (`Swipe`)、滚轮选择器 (`Picker`)、分步面板等高级拟物组件。

---

## 📦 安装

```bash
# 使用 pnpm (推荐)
pnpm add smartisan-ui

# 使用 npm
npm install smartisan-ui

# 使用 yarn
yarn add smartisan-ui
```

> **环境要求**：Vue `^3.3.0` 或更高版本。

---

## 🚀 快速上手

### 方式 1：全局完整引入 (Global Registration)

在应用入口文件（如 `main.ts`）中安装插件并引入样式：

```ts
import { createApp } from 'vue'
import SmartisanUI from 'smartisan-ui'
// 引入 Smartisan UI 样式 (包含拟物光影、CSS 变量与动画)
import 'smartisan-ui/style.css'

import App from './App.vue'

const app = createApp(App)
app.use(SmartisanUI)
app.mount('#app')
```

全局注册后，你可以在模板中直接使用原始组件名或带 `S` 前缀的别名（推荐使用 `S` 前缀以避免与原生 HTML 标签或第三方库冲突）：

```vue
<template>
  <div class="p-6 space-y-4">
    <!-- 原名使用 -->
    <Button variant="primary">确定</Button>

    <!-- S 前缀别名使用 (防冲突) -->
    <SButton variant="primary">确定</SButton>
    <SSwitch v-model:checked="isEnabled" />
    <SCard>
      <SCardHeader>
        <SCardTitle>设置项</SCardTitle>
      </SCardHeader>
      <SCardContent>
        <SItem title="允许通知" description="接收系统推送" />
      </SCardContent>
    </SCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isEnabled = ref(true)
</script>
```

---

### 方式 2：按需引入 (On-demand / Tree-shaking)

推荐在大型项目中使用按需引入，配合现代打包工具实现最优 Tree-shaking：

```vue
<template>
  <div class="s-page min-h-screen p-6">
    <Card class="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Smartisan 账户</CardTitle>
      </CardHeader>
      <CardContent class="space-y-4">
        <Input v-model="username" placeholder="请输入欢喜云账号" />
        <div class="flex items-center justify-between">
          <Label>双重认证</Label>
          <Switch v-model:checked="is2FA" />
        </div>
        <Button variant="primary" class="w-full" @click="handleSave">
          保存修改
        </Button>
      </CardContent>
    </Card>

    <!-- 全局 Toast 容器 (挂载一次即可) -->
    <Toaster />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Button,
  Switch,
  Input,
  Label,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Toaster,
  useToast,
} from 'smartisan-ui'
import 'smartisan-ui/style.css'

const username = ref('')
const is2FA = ref(true)
const { toast } = useToast()

function handleSave() {
  toast({
    title: '保存成功',
    description: '您的账户设置已即时同步至云端',
  })
}
</script>
```

---

## 🎨 页面底纹与主题风格

Smartisan OS 的经典背景具备微妙的竖条纹织物底纹。只需在根容器或页面元素上添加 `s-page` 或 `s-page--textured` 类名：

```html
<!-- 启用竖条纹质感页面底色 -->
<body class="s-page s-page--textured">
  <div id="app"></div>
</body>
```

或者在 CSS 中直接使用：

```css
.my-page {
  background: var(--s-page-texture);
}
```

---

## 🧩 经典特色组件用法

### 1. 羊皮纸提示 (Toast)

Smartisan 标志性的暖黄羊皮纸质感提示，拥有平滑的下落缓动与淡出动画：

```vue
<template>
  <Button @click="showToast">弹出通知</Button>
  <Toaster />
</template>

<script setup lang="ts">
import { Button, Toaster, useToast } from 'smartisan-ui'

const { toast } = useToast()

function showToast() {
  toast({
    title: '网络连接已恢复',
    description: '欢喜云同步任务正在后台进行...',
  })
}
</script>
```

### 2. 拟物列表行 (Item)

```vue
<template>
  <Card>
    <!-- 点击体验 100ms 接触触发经典锤子蓝底色与白字反色 -->
    <Item
      title="通用设置"
      description="偏好语言、地区及按键配置"
      show-arrow
      @click="openSettings"
    />
    <Item title="飞行模式">
      <template #action>
        <Switch v-model:checked="isFlightMode" />
      </template>
    </Item>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card, Item, Switch } from 'smartisan-ui'

const isFlightMode = ref(false)
function openSettings() {
  console.log('打开设置')
}
</script>
```

### 3. 原生矢量图标 (Icon)

组件库自动内置 29 款官方原生 Smartisan 图标 Symbol，直接按名称即可引用：

```vue
<template>
  <div class="flex items-center gap-3">
    <Icon name="si-back" :size="20" />
    <Icon name="si-search" :size="18" />
    <Icon name="si-setting" :size="20" />
    <Icon name="si-star-fill" :size="24" class="text-amber-500" />
    <Icon name="si-c-check" :size="22" />
  </div>
</template>

<script setup lang="ts">
import { Icon } from 'smartisan-ui'
</script>
```

> **支持的官方图标列表**：`si-add`、`si-back`、`si-chevron-down`、`si-chevron-right`、`si-chevron-up`、`si-close`、`si-close-thin`、`si-confirm`、`si-more`、`si-mute`、`si-play`、`si-playing`、`si-playlist`、`si-search`、`si-setting`、`si-star`、`si-star-fill`、`si-volume`、`si-menu-add`、`si-like-outlined`、`si-list`、`si-game-filled`、`si-c-check`、`si-c-redcheck`、`si-c-delete`、`si-c-unselected`、`si-c-clear`、`si-c-radio-on`、`si-c-radio-off`。

### 4. 橡皮筋回弹 (Elastic) 与右滑删除 (Swipe)

```vue
<template>
  <!-- 滚动到边缘时露出经典 Smartisan 竖条纹并带阻尼回弹 -->
  <Elastic class="h-64 border rounded-md">
    <div class="p-4 space-y-2">
      <Swipe
        v-for="item in list"
        :key="item.id"
        @delete="removeItem(item.id)"
      >
        <div class="p-3 bg-white border-b">
          {{ item.name }}（向右滑动显示删除）
        </div>
      </Swipe>
    </div>
  </Elastic>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Elastic, Swipe } from 'smartisan-ui'

const list = ref([
  { id: 1, name: '闪念胶囊灵感草稿 1' },
  { id: 2, name: '坚果手机会议纪要 2' },
])

function removeItem(id: number) {
  list.value = list.value.filter(item => item.id !== id)
}
</script>
```

---

## 📚 组件清单 (72+ 款全量组件)

| 分类 | 包含组件 |
| :--- | :--- |
| **基础控件** | `Button`, `ButtonGroup`, `Badge`, `Kbd`, `Label`, `Separator`, `Typography`, `Icon` |
| **表单与输入** | `Input`, `InputGroup`, `InputOTP`, `Textarea`, `Switch`, `Checkbox`, `RadioGroup`, `Slider`, `Select`, `NativeSelect`, `NumberField`, `PinInput`, `TagsInput`, `Field`, `Form` |
| **数据与反馈** | `Table`, `DataTable`, `Progress`, `Spinner`, `Skeleton`, `Toast` (`Toaster`, `useToast`), `Sonner`, `Alert`, `Empty`, `Marker`, `Trace`, `Chart` |
| **导航与结构** | `Breadcrumb`, `Pagination`, `Tabs`, `NavigationMenu`, `Menubar`, `Sidebar`, `Stepper` |
| **弹窗与浮层** | `Dialog`, `AlertDialog`, `Sheet`, `Drawer`, `Popover`, `Tooltip`, `HoverCard`, `DropdownMenu`, `ContextMenu`, `Command`, `Combobox` |
| **布局与呈现** | `Card`, `Item`, `ScrollArea`, `Accordion`, `Collapsible`, `AspectRatio`, `Carousel`, `Resizable`, `CodeBlock` |
| **锤子特色交互** | `Bubble` (闪念胶囊气泡), `Attachment` (附件卡片), `Message` / `MessageScroller`, `Elastic` (橡皮筋回弹), `Swipe` (右滑删除), `Picker` (拟物滚轮), `Quickbar` (字母速览条), `Swap` (部件分层过渡) |

*所有组件均同时导出前缀版本（如 `Button` 与 `SButton`、`Switch` 与 `SSwitch`），满足不同团队的编码风格偏好。*

---

## 🛠️ 项目维护与脚本

```bash
# 本地组件交互测试与开发演练
pnpm dev

# 构建组件库发布物产 (产出 dist/ 下 ESM、UMD、CSS、DTS 文件)
pnpm build

# 构建 Demo 应用静态部署包 (产出 dist-app/)
pnpm build:app

# 预览构建产物
pnpm preview
```

---

## 📄 开源许可

本项目遵循 [MIT License](LICENSE) 开源协议。
致敬锤子科技（Smartisan）曾为中文互联网带来的工匠精神与交互美学。

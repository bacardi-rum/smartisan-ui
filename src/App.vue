<script setup lang="ts">
import { ref } from 'vue'
import {
  Button,
  ButtonGroup,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Item,
  Input,
  Textarea,
  Switch,
  Slider,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  NativeSelect,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Alert,
  AlertTitle,
  AlertDescription,
  DataTable,
  Pagination,
  PaginationList,
  PaginationListItem,
  PaginationPrev,
  PaginationNext,
  ScrollArea,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  NumberField,
  NumberFieldInput,
  NumberFieldIncrement,
  NumberFieldDecrement,
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
  TagsInput,
  TagsInputItem,
  TagsInputInput,
  TagsInputItemText,
  TagsInputItemDelete,
  Chart,
  Toaster,
  useToast,
  Empty,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  Bubble,
  Attachment,
  AttachmentItem,
  Marker,
  Questionnaire,
  QuestionnaireOption,
  Trace,
  TraceItem,
  CodeBlock,
  Swap,
  SwapPanel,
  Swipe,
  Picker,
  PickerCol,
  Elastic,
  QuickBar,
} from '@/components/ui'

const { toast } = useToast()

// Interactive states
const activeTab = ref('buttons')
const switchVal = ref(true)
const switchVal2 = ref(false)
const sliderVal = ref([65])
const checkboxVal1 = ref(true)
const checkboxVal2 = ref(false)
const radioVal = ref('option-1')
const textVal = ref('Smartisan OS R2')
const textareaVal = ref('生来骄傲，天生与众不同。\n工匠精神与克制的轻拟物美学。')
const numVal = ref(18)
const tagsVal = ref(['拟物', '6dp网格', '锤子蓝', 'Smartisan'])
const otpVal = ref(['2', '0', '2', '6'])
const currentStep = ref(2)
const surveyChoice = ref('ans-1')
const wheelYear = ref('2024')
const wheelMonth = ref('08')
const wheelDay = ref('01')
const selectedLetter = ref('S')
function handleLetter(l: string) {
  selectedLetter.value = l
  toast(`字母索引定位: ${l}`)
}

const tableColumns = [
  { key: 'name', title: '组件名称' },
  { key: 'category', title: '所属分类' },
  { key: 'style', title: '拟物特征' },
  { key: 'status', title: '状态' },
]

const tableData = [
  { name: 'Button', category: 'General', style: '180°蓝渐变 / 0.8px 细描边 / 下方短投影', status: '稳定' },
  { name: 'Switch', category: 'Form', style: '52×24 内凹槽 / 双指示圆点 / 线性位移', status: '稳定' },
  { name: 'Toast', category: 'Feedback', style: '#fcf6e6 暖黄纸质 / #ad8a67 棕色字体', status: '稳定' },
  { name: 'Dialog', category: 'Overlay', style: '368px 居中对称 / 54px 底部操作条', status: '稳定' },
  { name: 'Tabs', category: 'Navigation', style: '28.8px 分段内凹 / #b2b2b2 灰块激活', status: '稳定' },
]

const chartData = [
  { label: '系统应用 (OS 8)', value: 85, color: '#5b87eb' },
  { label: '便签与闪念胶囊', value: 92, color: '#cd9143' },
  { label: '拟物图标与材质', value: 98, color: '#79ad31' },
  { label: '拟物手势与时序', value: 90, color: '#e5645a' },
]

const codeSnippet = `// Smartisan OS 风格组件引用示例
import { Button, Switch, Toast, useToast } from '@/components/ui'

const { toast } = useToast()

function handleClick() {
  toast('已成功保存偏好设置')
}`
</script>

<template>
  <div class="s-page s-page--textured min-h-screen text-[#333333] font-s selection:bg-[#5b87eb] selection:text-white pb-24" style="background: var(--s-page-texture);">
    <!-- App Bar Header with Smartisan Gunmetal Texture -->
    <header class="sticky top-0 z-40 border-b border-[#2d2e31] bg-gradient-to-r from-[#222325] via-[#323336] to-[#222325] shadow-[0_4px_12px_rgba(0,0,0,0.18)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <!-- Smartisan T Logo mark badge -->
          <div class="size-8 rounded-full bg-gradient-to-b from-[#e5645a] to-[#c83530] border border-[#b7241f] shadow-[0_2px_4px_rgba(0,0,0,0.2)] flex items-center justify-center font-bold text-white text-[15px]">
            T
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-white font-bold text-[16px] tracking-wide">Smartisan UI</span>
              <span class="px-1.5 py-0.5 rounded-[3px] bg-white/10 text-[10px] font-mono text-white/70 border border-white/10">VUE 3</span>
              <span class="px-1.5 py-0.5 rounded-[3px] bg-[#5b87eb]/20 text-[10px] font-mono text-[#7ca3fb] border border-[#5b87eb]/30">TAILWIND 4</span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <!-- Smartisan R2 playBarIconScaleAnim: 1.33x spring scale while pressed -->
          <button
            class="s-bar-icon size-9 rounded-full flex items-center justify-center text-[#c8c8c8] hover:text-white transition-colors cursor-pointer"
            data-s-bar-icon
            title="搜索 (按住弹性放大1.33倍)"
            @click="toast('触发顶栏图标按压：弹性放大至1.33倍')"
          >
            <svg class="size-4"><use href="#si-search" /></svg>
          </button>
          <button
            class="s-bar-icon size-9 rounded-full flex items-center justify-center text-[#c8c8c8] hover:text-white transition-colors cursor-pointer"
            data-s-bar-icon
            title="设置 (按住弹性放大1.33倍)"
            @click="toast('触发顶栏图标按压：弹性放大至1.33倍')"
          >
            <svg class="size-4"><use href="#si-setting" /></svg>
          </button>
          <Button size="sm" variant="outline" class="text-white/80 border-white/20 hover:bg-white/10 active:bg-white/20" @click="toast('欢迎探索 Smartisan OS 72款拟物组件')">
            弹出 Toast
          </Button>
          <Button size="sm" @click="toast('已切换至系统最新拟物规范')">
            完成
          </Button>
        </div>
      </div>
    </header>

    <!-- Sub-header Breadcrumb and Info Banner -->
    <div class="border-b border-[#e2e2e2] bg-white px-4 sm:px-6 py-2.5 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">设计系统</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Smartisan OS 8</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>全量 72 基础与拟物组件</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div class="text-[12px] text-[#7f7f7f] flex items-center gap-2">
          <span>规范源自 Smartisan R2 真机校对与 Figma UI Kit</span>
          <span class="inline-block size-1.5 rounded-full bg-[#79ad31]" />
        </div>
      </div>
    </div>

    <!-- Main Container -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
      <!-- Navigation Tabs across 6 Categories -->
      <Tabs v-model="activeTab" class="w-full">
        <div class="overflow-x-auto pb-2">
          <TabsList class="h-10 bg-white border border-[#e2e2e2] rounded-[8px] p-0 shadow-sm w-max sm:w-full justify-start sm:justify-center">
            <TabsTrigger value="buttons" class="px-4 text-[13px]">🔘 按钮与基础控制</TabsTrigger>
            <TabsTrigger value="forms" class="px-4 text-[13px]">📝 表单与输入</TabsTrigger>
            <TabsTrigger value="layouts" class="px-4 text-[13px]">📦 布局与容器</TabsTrigger>
            <TabsTrigger value="overlays" class="px-4 text-[13px]">💬 浮层与反馈</TabsTrigger>
            <TabsTrigger value="data" class="px-4 text-[13px]">📊 数据呈现与表格</TabsTrigger>
            <TabsTrigger value="specialties" class="px-4 text-[13px]">🎨 锤子特色组件</TabsTrigger>
          </TabsList>
        </div>

        <!-- TAB 1: Buttons & Basic Controls -->
        <TabsContent value="buttons" class="mt-4 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Button 按钮系列 (Figma 18:7, 147:413, 27:138, 26:13)</CardTitle>
              <CardDescription>
                锤子按钮精髓：主按钮 180° 细腻蓝渐变 (#5b87eb→#5883eb) + 0.8px 深蓝描边 + 向下 4px 短投影；按下瞬间切为纯色 #4772e6；旋钮按钮采用凹槽底座嵌白色凸起旋钮。
              </CardDescription>
            </CardHeader>
            <CardContent class="flex flex-col gap-6">
              <!-- Elevated Buttons -->
              <div>
                <div class="text-[13px] font-bold text-[#7f7f7f] mb-3">大按钮 (60px) & 小按钮 (30px)</div>
                <div class="flex flex-wrap items-center gap-4">
                  <Button @click="toast('触发主要操作')">主要操作 (Primary)</Button>
                  <Button variant="danger" @click="toast('警告：危险操作')">危险操作 (Danger)</Button>
                  <Button variant="sheet">白色弹窗按钮 (Sheet)</Button>
                  <Button variant="outline">描边按钮 (Outline)</Button>
                  <Button variant="text">文字按钮 (Text)</Button>
                  <Button disabled>禁用状态 (Disabled)</Button>
                </div>
              </div>

              <!-- Sizes -->
              <div>
                <div class="text-[13px] font-bold text-[#7f7f7f] mb-3">尺寸规格 (Size Variants)</div>
                <div class="flex flex-wrap items-center gap-3">
                  <Button size="lg">大号 60px</Button>
                  <Button size="md">中号 48px</Button>
                  <Button size="sm">小号 30px (Sm)</Button>
                  <Button size="sm" variant="outline">小号描边</Button>
                  <Button size="icon" variant="icon">
                    <svg viewBox="0 0 24 24" fill="none" class="size-4 stroke-current stroke-2">
                      <path d="M12 5v14M5 12h14" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Button>
                </div>
              </div>

              <!-- Round Skeuomorphic Knobs -->
              <div>
                <div class="text-[13px] font-bold text-[#7f7f7f] mb-3">拟物圆形旋钮按钮 (Rounded Knobs 80px / 28px)</div>
                <div class="flex items-center gap-6">
                  <div class="flex flex-col items-center gap-2">
                    <Button variant="round" size="round" @click="toast('播放按钮已点击')">
                      <svg viewBox="0 0 24 24" fill="currentColor" class="size-7 text-[#929292] translate-x-0.5">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </Button>
                    <span class="text-[11px] text-[#7f7f7f]">80px 音乐旋钮</span>
                  </div>

                  <div class="flex flex-col items-center gap-2">
                    <Button variant="round" size="round-sm" @click="toast('小旋钮已点击')">
                      <svg viewBox="0 0 24 24" fill="currentColor" class="size-3 text-[#929292] translate-x-0.5">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </Button>
                    <span class="text-[11px] text-[#7f7f7f]">28px 小旋钮</span>
                  </div>

                  <!-- Button Group -->
                  <div class="flex flex-col gap-2">
                    <span class="text-[11px] font-bold text-[#7f7f7f]">ButtonGroup 组合按钮</span>
                    <ButtonGroup>
                      <button type="button" @click="toast('选择第一项')">左侧操作</button>
                      <button type="button" @click="toast('选择第二项')">中央操作</button>
                      <button type="button" @click="toast('选择第三项')">右侧操作</button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>

              <!-- Switch & Slider -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#f2f2f2]">
                <div class="flex flex-col gap-3">
                  <div class="text-[13px] font-bold text-[#7f7f7f]">Switch 拟物开关 (52×24)</div>
                  <div class="flex items-center gap-6">
                    <div class="flex items-center gap-3">
                      <Switch v-model:checked="switchVal" />
                      <span class="text-[13px] text-[#636363]">状态: {{ switchVal ? '开启 (左侧蓝点)' : '关闭 (右侧灰点)' }}</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <Switch v-model:checked="switchVal2" />
                      <span class="text-[13px] text-[#636363]">开启动画</span>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col gap-3">
                  <div class="text-[13px] font-bold text-[#7f7f7f]">Slider 拟物滑块 (内凹轨道 + 渐变填充)</div>
                  <div class="flex items-center gap-4">
                    <span class="text-[12px] font-mono text-[#9d9d9d]">0</span>
                    <Slider v-model="sliderVal" :max="100" :step="1" class="w-full" />
                    <span class="text-[12px] font-mono text-[#5b87eb] font-bold">{{ sliderVal[0] }}%</span>
                  </div>
                </div>
              </div>

              <!-- Checkbox & Radio -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#f2f2f2]">
                <div class="flex flex-col gap-3">
                  <div class="text-[13px] font-bold text-[#7f7f7f]">Checkbox 复选圈 (22px 经典微型勾选圈)</div>
                  <div class="flex items-center gap-4">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <Checkbox v-model:checked="checkboxVal1" variant="blue" />
                      <span class="text-[14px] text-[#333333]">蓝色勾选圈</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <Checkbox v-model:checked="checkboxVal2" variant="red" />
                      <span class="text-[14px] text-[#333333]">红色删除圈</span>
                    </label>
                  </div>
                </div>

                <div class="flex flex-col gap-3">
                  <div class="text-[13px] font-bold text-[#7f7f7f]">RadioGroup 拟物立体单选盘 (22px)</div>
                  <RadioGroup v-model="radioVal" class="flex items-center gap-5">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <RadioGroupItem value="option-1" />
                      <span class="text-[14px] text-[#333333]">方案 A</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <RadioGroupItem value="option-2" />
                      <span class="text-[14px] text-[#333333]">方案 B</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <RadioGroupItem value="option-3" />
                      <span class="text-[14px] text-[#333333]">方案 C</span>
                    </label>
                  </RadioGroup>
                </div>
              </div>

              <!-- Badge Showcase -->
              <div class="pt-4 border-t border-[#f2f2f2]">
                <div class="text-[13px] font-bold text-[#7f7f7f] mb-3">Badge 拟物徽章 (在独立展示或列表行按压时均保持清晰对比度)</div>
                <div class="flex flex-wrap items-center gap-3">
                  <Badge variant="default">默认灰 Default</Badge>
                  <Badge variant="secondary">次级灰 Secondary</Badge>
                  <Badge variant="blue">锤子蓝 Blue</Badge>
                  <Badge variant="yellow">胶囊黄 Yellow</Badge>
                  <Badge variant="red">警告红 Red</Badge>
                  <Badge variant="destructive">危险实心 Destructive</Badge>
                  <Badge variant="outline">镂空 Outline</Badge>
                  <div class="flex items-center gap-1.5 text-[13px] text-[#646464] ml-2">
                    <Badge variant="red" size="dot" />
                    <span>未读标记</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <!-- TAB 2: Forms & Inputs -->
        <TabsContent value="forms" class="mt-4 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>表单控件与输入组件 (Form & Input Controls)</CardTitle>
              <CardDescription>
                所有输入框统一配备 Smartisan 内凹阴影 (inset 0 4px 4px rgba(0,0,0,0.04)) 与 0.8px 细描边；聚焦状态呈现克制低饱和蓝光晕。
              </CardDescription>
            </CardHeader>
            <CardContent class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Field & Input -->
              <FieldGroup>
                <Field>
                  <FieldLabel for="device-name">设备名称 (Input)</FieldLabel>
                  <Input id="device-name" v-model="textVal" placeholder="请输入设备名称" />
                  <FieldDescription>请输入当前设备的 Smartisan 蓝牙识别名</FieldDescription>
                </Field>

                <Field>
                  <FieldLabel>组合输入框 (InputGroup with Addons)</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon>https://</InputGroupAddon>
                    <InputGroupInput placeholder="smartisan.com" />
                    <InputGroupAddon>.cn</InputGroupAddon>
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel>原生选择器 (NativeSelect)</FieldLabel>
                  <NativeSelect>
                    <option value="r2">Smartisan R2 (Smartisan OS 8.5.3)</option>
                    <option value="pro3">Nut Pro 3 (Smartisan OS 7.2)</option>
                    <option value="t2">Smartisan T2 (Smartisan OS 3.0)</option>
                  </NativeSelect>
                </Field>

                <Field>
                  <FieldLabel>高级下拉选择 (Select)</FieldLabel>
                  <Select default-value="beijing">
                    <SelectTrigger>
                      <SelectValue placeholder="请选择城市" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>直辖市</SelectLabel>
                        <SelectItem value="beijing">北京 (朝阳区)</SelectItem>
                        <SelectItem value="shanghai">上海 (浦东新区)</SelectItem>
                        <SelectItem value="chengdu">成都 (高新南区)</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <FieldLabel>便签正文 (Textarea)</FieldLabel>
                  <Textarea v-model="textareaVal" :rows="3" placeholder="写下你的想法..." />
                </Field>

                <Field>
                  <FieldLabel>数字微调输入框 (NumberField)</FieldLabel>
                  <NumberField v-model="numVal" :min="1" :max="100">
                    <NumberFieldDecrement />
                    <NumberFieldInput />
                    <NumberFieldIncrement />
                  </NumberField>
                </Field>

                <Field>
                  <FieldLabel>验证码槽位 (InputOTP / PinInput)</FieldLabel>
                  <div class="flex items-center gap-4">
                    <InputOTP v-model="otpVal">
                      <InputOTPGroup>
                        <InputOTPSlot :index="0" />
                        <InputOTPSlot :index="1" />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot :index="2" />
                        <InputOTPSlot :index="3" />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </Field>

                <Field>
                  <FieldLabel>标签输入 (TagsInput)</FieldLabel>
                  <TagsInput v-model="tagsVal">
                    <TagsInputItem v-for="tag in tagsVal" :key="tag" :value="tag">
                      <TagsInputItemText />
                      <TagsInputItemDelete />
                    </TagsInputItem>
                    <TagsInputInput placeholder="输入标签按回车..." />
                  </TagsInput>
                </Field>
              </FieldGroup>
            </CardContent>
          </Card>
        </TabsContent>

        <!-- TAB 3: Layouts & Surfaces -->
        <TabsContent value="layouts" class="mt-4 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Item 列表行与卡片组 (Figma 248:872, 253:1305)</CardTitle>
              <CardDescription>
                列表标准行高 60px，行间 0.8px #f2f2f2 极浅分隔线；末行下方无多余底线。点击整行瞬时变蓝 #5985eb，文字及图标转为纯白。
              </CardDescription>
            </CardHeader>
            <CardContent class="p-0">
              <div class="divide-y divide-[#f2f2f2]">
                <Item
                  title="声音与振动"
                  subtitle="已开启静音模式，触感反馈强度中等"
                  detail="标准"
                  @click="toast('进入声音设置')"
                >
                  <template #leading>
                    <svg viewBox="0 0 24 24" fill="none" class="size-5 stroke-current stroke-2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
                    </svg>
                  </template>
                  <template #trailing>
                    <svg viewBox="0 0 24 24" fill="none" class="size-4 stroke-[#b2b2b2] stroke-2">
                      <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </template>
                </Item>

                <Item
                  title="坚果云同步"
                  subtitle="上次同步：今天 09:12，相册与便签已备份"
                  detail="已同步"
                  @click="toast('同步成功')"
                >
                  <template #leading>
                    <svg viewBox="0 0 24 24" fill="none" class="size-5 stroke-current stroke-2">
                      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
                    </svg>
                  </template>
                  <template #trailing>
                    <Badge variant="secondary">已连接</Badge>
                  </template>
                </Item>

                <Item
                  title="无障碍与快捷键"
                  subtitle="已开启一步 (One Step) 与大爆炸 (Big Bang)"
                  @click="toast('点击无障碍设置')"
                >
                  <template #leading>
                    <svg viewBox="0 0 24 24" fill="none" class="size-5 stroke-current stroke-2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                  </template>
                  <template #trailing>
                    <div class="flex items-center gap-1.5">
                      <Badge variant="blue">新功能</Badge>
                      <Badge variant="yellow">Beta</Badge>
                    </div>
                  </template>
                </Item>

                <Item
                  title="系统更新"
                  subtitle="Smartisan OS 8.2.0 已就绪"
                  @click="toast('正在检查系统更新...')"
                >
                  <template #leading>
                    <svg viewBox="0 0 24 24" fill="none" class="size-5 stroke-current stroke-2">
                      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                      <path d="M3 3v5h5" />
                      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                      <path d="M16 21h5v-5" />
                    </svg>
                  </template>
                  <template #trailing>
                    <Badge variant="red">HOT</Badge>
                  </template>
                </Item>

                <Item
                  title="闪念胶囊流"
                  subtitle="长按侧键即可快速录音并转化为文字胶囊"
                  @click="toast('闪念胶囊已开启')"
                >
                  <template #leading>
                    <svg viewBox="0 0 24 24" fill="none" class="size-5 stroke-current stroke-2">
                      <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z" />
                      <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
                    </svg>
                  </template>
                  <template #trailing>
                    <Switch :checked="true" />
                  </template>
                </Item>
              </div>
            </CardContent>
          </Card>

          <!-- Accordion & Collapsible -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Accordion 手风琴折叠卡片</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible default-value="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>为什么坚持轻拟物风格？</AccordionTrigger>
                    <AccordionContent>
                      拟物不是堆砌材质，而是对实体世界的物理隐喻：通过极克制的同色系 2–5% 渐变、极细描边与精确凹凸阴影，让每一个控件在屏幕中都有真实的“可触感”。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>6dp 网格体系的作用</AccordionTrigger>
                    <AccordionContent>
                      Smartisan OS 框架严格遵循 6 / 12 / 18 / 24 / 30 / 36 / 48 / 60 的 6dp 步长比例，实现行高、边距、字号在整机上的高度秩序感。
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ScrollArea 细腻滚动区</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea class="h-44 w-full rounded-[6px] border border-[#f2f2f2] p-4 bg-[#fafafa]">
                  <div class="flex flex-col gap-3 text-[13px] text-[#636363]">
                    <div v-for="i in 8" :key="i" class="p-2 rounded bg-white border border-[#e2e2e2]">
                      便签日志记录条目 #{{ i }}：工匠的骄傲在于对 0.1 毫米的苛求。
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <!-- TAB 4: Overlays & Feedback -->
        <TabsContent value="overlays" class="mt-4 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>弹窗、抽屉与反馈 (Dialogs, Sheets & Feedback)</CardTitle>
              <CardDescription>
                标准对话框 368px 宽度，底部 54px 按钮组通过细线均分，主操作在最右侧 (#5e80d0 蓝字)；底部弹窗带有 20px 圆角与 #efefef 纯净底色。
              </CardDescription>
            </CardHeader>
            <CardContent class="flex flex-wrap items-center gap-4">
              <!-- Standard Dialog -->
              <Dialog>
                <DialogTrigger as-child>
                  <Button>打开对话框 (Dialog)</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>系统更新确认</DialogTitle>
                  </DialogHeader>
                  <DialogDescription>
                    检测到 Smartisan OS 8.5.4 拟物体验增强包，包含全新的光影着色模型与按压动效。是否立即下载并重启安装？
                  </DialogDescription>
                  <DialogFooter>
                    <DialogClose as-child>
                      <button type="button">取消</button>
                    </DialogClose>
                    <DialogClose as-child>
                      <button type="button" data-primary @click="toast('正在下载更新包...')">立即升级</button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <!-- AlertDialog -->
              <AlertDialog>
                <AlertDialogTrigger as-child>
                  <Button variant="danger">危险确认 (AlertDialog)</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>删除便签</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogDescription>
                    此操作将彻底删除此条闪念胶囊及所有附件，该操作不可撤销。
                  </AlertDialogDescription>
                  <AlertDialogFooter>
                    <AlertDialogCancel>保留便签</AlertDialogCancel>
                    <AlertDialogAction class="text-[#cc3e39]" @click="toast('便签已删除')">确认删除</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <!-- Bottom Sheet -->
              <Sheet>
                <SheetTrigger as-child>
                  <Button variant="sheet">底部菜单 (Sheet)</Button>
                </SheetTrigger>
                <SheetContent side="bottom" class="max-w-lg mx-auto">
                  <SheetHeader>
                    <span class="text-[14px] font-bold text-[#656565]">更多分享选项</span>
                  </SheetHeader>
                  <div class="p-6 flex flex-col gap-3">
                    <Button variant="sheet" class="w-full" @click="toast('已生成便签长图')">生成便签长图片</Button>
                    <Button variant="sheet" class="w-full" @click="toast('已复制链接')">复制公开分享链接</Button>
                    <Button variant="sheet" class="w-full text-[#cc3e39]" @click="toast('已移至废纸篓')">移至废纸篓</Button>
                  </div>
                </SheetContent>
              </Sheet>

              <!-- Popover -->
              <Popover>
                <PopoverTrigger as-child>
                  <Button variant="outline">气泡浮层 (Popover)</Button>
                </PopoverTrigger>
                <PopoverContent class="w-64">
                  <div class="flex flex-col gap-2">
                    <h5 class="text-[14px] font-bold text-[#333333]">拟物光影说明</h5>
                    <p class="text-[12px] text-[#7f7f7f] leading-normal">
                      所有渐变均为垂直 180° 同色微调，切勿使用高饱和对角线渐变。
                    </p>
                  </div>
                </PopoverContent>
              </Popover>

              <!-- Tooltip -->
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button variant="outline" size="sm">悬停提示 (Tooltip)</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Smartisan OS 8 经典桌面抽屉快捷手势
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <!-- DropdownMenu -->
              <DropdownMenu>
                <DropdownMenuTrigger as-child>
                  <Button variant="outline">下拉菜单 (DropdownMenu)</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>操作选项</DropdownMenuLabel>
                  <DropdownMenuItem @click="toast('重命名')">重命名</DropdownMenuItem>
                  <DropdownMenuItem @click="toast('创建副本')">创建副本</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem class="text-[#cc3e39]" @click="toast('删除文件')">删除</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>

          <!-- Alert callouts -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Alert variant="info">
              <AlertTitle>系统提示 (Info)</AlertTitle>
              <AlertDescription>
                Smartisan OS 经典的按压时序：快速点击至少保留 64ms 呈现按下态；列表行在 100ms 接触后方才变蓝。
              </AlertDescription>
            </Alert>
            <Alert variant="warning">
              <AlertTitle>温和提醒 (Warning)</AlertTitle>
              <AlertDescription>
                一个应用只使用一种强调色：应用商店用红，便签用棕，系统设置用蓝。
              </AlertDescription>
            </Alert>
          </div>
        </TabsContent>

        <!-- TAB 5: Data Display & Tables -->
        <TabsContent value="data" class="mt-4 flex flex-col gap-6">
          <!-- DataTable with search & row select -->
          <Card>
            <CardHeader>
              <CardTitle>DataTable 数据表格组件</CardTitle>
              <CardDescription>
                白底卡片承载，支持即时搜索过滤、复选圈多选态、精致行间悬停变色。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable :columns="tableColumns" :data="tableData" :selectable="true" />
            </CardContent>
          </Card>

          <!-- Stepper & Pagination & Chart -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Stepper 步骤条</CardTitle>
              </CardHeader>
              <CardContent class="flex flex-col gap-4">
                <Stepper v-model="currentStep">
                  <StepperItem :step="1">
                    <StepperTrigger>1</StepperTrigger>
                    <div class="flex flex-col">
                      <StepperTitle>参数测量</StepperTitle>
                      <StepperDescription>真机像素取样</StepperDescription>
                    </div>
                  </StepperItem>
                  <StepperSeparator :step="1" />
                  <StepperItem :step="2">
                    <StepperTrigger>2</StepperTrigger>
                    <div class="flex flex-col">
                      <StepperTitle>组件封装</StepperTitle>
                      <StepperDescription>Vue3 + Tailwind4</StepperDescription>
                    </div>
                  </StepperItem>
                  <StepperSeparator :step="2" />
                  <StepperItem :step="3">
                    <StepperTrigger>3</StepperTrigger>
                    <div class="flex flex-col">
                      <StepperTitle>交互调校</StepperTitle>
                      <StepperDescription>60fps 动效校准</StepperDescription>
                    </div>
                  </StepperItem>
                </Stepper>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pagination 翻页器</CardTitle>
              </CardHeader>
              <CardContent class="flex items-center justify-center py-4">
                <Pagination :total="100" :items-per-page="10" :default-page="3">
                  <PaginationList>
                    <PaginationPrev />
                    <PaginationListItem :value="1">1</PaginationListItem>
                    <PaginationListItem :value="2">2</PaginationListItem>
                    <PaginationListItem :value="3">3</PaginationListItem>
                    <PaginationNext />
                  </PaginationList>
                </Pagination>

              </CardContent>
            </Card>
          </div>

          <!-- Chart & Calendar -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Chart title="Smartisan UI 规范还原度统计" :data="chartData" type="bar" />
            <Chart title="组件体系分布占比" :data="chartData" type="donut" />
          </div>

          <!-- CodeBlock -->
          <Card>
            <CardHeader>
              <CardTitle>CodeBlock 拟物代码块组件</CardTitle>
              <CardDescription>
                黑曜石深色背景，还原 Smartisan 经典三色状态指示与平滑拷贝反馈。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock :code="codeSnippet" language="typescript" title="main.ts" />
            </CardContent>
          </Card>
        </TabsContent>

        <!-- TAB 6: Smartisan Specialties -->
        <TabsContent value="specialties" class="mt-4 flex flex-col gap-6">
          <!-- Bubble & Messages -->
          <Card>
            <CardHeader>
              <CardTitle>Bubble 气泡与 Message 胶囊对话流</CardTitle>
              <CardDescription>
                锤子便签与闪念胶囊的精髓材质：暖黄羊皮纸质感气泡 (#fcf6e6) 与标志性锤子蓝胶囊。
              </CardDescription>
            </CardHeader>
            <CardContent class="flex flex-col gap-4">
              <div class="flex flex-col gap-3">
                <Bubble variant="yellow" timestamp="09:15" author="闪念胶囊">
                  “生来骄傲，做真正打动人心的设计。”
                </Bubble>

                <Bubble variant="blue" align="right" timestamp="09:16" author="我">
                  “已通过 Vue 3 + Tailwind CSS v4 完整构建 Smartisan UI 拟物组件库。”
                </Bubble>

                <Bubble variant="white" timestamp="09:17" author="工匠记录">
                  “不仅外观像素级还原，连 64ms 瞬时按压与线性开关位移也悉数复刻。”
                </Bubble>
              </div>
            </CardContent>
          </Card>

          <!-- Attachment & Marker & Trace -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Attachment 拟物附件卡片</CardTitle>
              </CardHeader>
              <CardContent>
                <Attachment title="项目工程文件">
                  <AttachmentItem name="smartisan-ui-tokens.json" size="29.8 KB" ext="JSON" @download="toast('正在下载 Token 文件')" />
                  <AttachmentItem name="smartisan-r2-assets.zip" size="1.2 MB" ext="ZIP" @download="toast('正在下载资源包')" />
                </Attachment>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Marker 荧光笔高亮标签</CardTitle>
              </CardHeader>
              <CardContent class="flex flex-col gap-3">
                <p class="text-[14px] leading-relaxed text-[#444444]">
                  在这个数字化扁平泛滥的时代，
                  <Marker color="yellow">轻拟物美学</Marker>
                  重新赋予了界面
                  <Marker color="blue">温润的质感</Marker>
                  与
                  <Marker color="green">触手可及的温度</Marker>。
                </p>
                <div class="flex flex-wrap gap-2 pt-2">
                  <Marker color="pink">灵感胶囊</Marker>
                  <Marker color="orange">重要日程</Marker>
                  <Marker color="yellow" variant="underline">下划线高亮</Marker>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trace 拟物轨迹时间轴</CardTitle>
              </CardHeader>
              <CardContent>
                <Trace>
                  <TraceItem title="需求确认" time="09:00" status="success">
                    明确技术栈 Vue3 + Sass + Tailwind4 + Vite
                  </TraceItem>
                  <TraceItem title="架构组织" time="09:30" status="success">
                    全量创建 72 款组件目录结构与类型声明
                  </TraceItem>
                  <TraceItem title="拟物渲染校准" time="10:00" status="active">
                    Figma UI Kit & R2 动效与手感逐一复核
                  </TraceItem>
                </Trace>
              </CardContent>
            </Card>
          </div>

          <!-- Questionnaire & Empty State -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Questionnaire 问卷评估步骤</CardTitle>
              </CardHeader>
              <CardContent>
                <Questionnaire title="你最喜欢 Smartisan OS 的哪一项特性？" description="请选择您心中的经典之作">
                  <QuestionnaireOption
                    label="精致细腻的轻拟物控件"
                    description="微小渐变、极细描边与凹凸阴影"
                    :selected="surveyChoice === 'ans-1'"
                    @select="surveyChoice = 'ans-1'"
                  />
                  <QuestionnaireOption
                    label="闪念胶囊与便签长图"
                    description="随时触发语音与快速卡片记录"
                    :selected="surveyChoice === 'ans-2'"
                    @select="surveyChoice = 'ans-2'"
                  />
                  <QuestionnaireOption
                    label="大爆炸 (Big Bang)"
                    description="段落字词自由炸开与快速重组"
                    :selected="surveyChoice === 'ans-3'"
                    @select="surveyChoice = 'ans-3'"
                  />
                </Questionnaire>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Empty 空状态展示 (120px 浅灰实心图样)</CardTitle>
              </CardHeader>
              <CardContent>
                <Empty>
                  <EmptyIcon />
                  <EmptyTitle>暂无便签记录</EmptyTitle>
                  <EmptyDescription>点击右下角按钮或长按侧边按键，即可随时记录闪念胶囊</EmptyDescription>
                  <Button size="sm" class="mt-4" @click="toast('新建便签')">新建便签</Button>
                </Empty>
              </CardContent>
            </Card>
          </div>

          <!-- Smartisan OS 经典组件编排 (Part Choreography) -->
          <Card>
            <CardHeader>
              <CardTitle>Part Choreography 组件编排：主体不动，部件分层过渡</CardTitle>
              <CardDescription>
                Smartisan OS 8 锤子时钟 7.1.1 核心动效：表盘作为视觉锚点保持不动，指针顺向加速转离（300ms），新指针分层追入（0.7s/0.9s/1.0s），铃耳与按键从后方错开弹出带过冲。
              </CardDescription>
            </CardHeader>
            <CardContent class="flex flex-col items-center">
              <div class="w-full max-w-md bg-white rounded-[16px] border border-[#e2e2e2] shadow-[0_12px_32px_rgba(0,0,0,0.06)] overflow-hidden">
                <!-- App Bar -->
                <div class="h-12 border-b border-[#e2e2e2] bg-[#fdfdfd] flex items-center justify-center font-bold text-[16px] text-[#636363]">
                  时钟组件编排演示
                </div>

                <!-- Clock Stage with Swap -->
                <div class="cd-stage">
                  <!-- Persistent Visual Anchor (Dial) -->
                  <div class="cd-dial" aria-hidden="true">
                    <span class="cd-num cd-12">12</span>
                    <span class="cd-num cd-3">3</span>
                    <i class="cd-cap" />
                  </div>

                  <!-- Swap Panels -->
                  <Swap>
                    <!-- Panel 1: World Clock -->
                    <SwapPanel id="cd-world">
                      <i data-s-part class="cd-hand cd-h" style="--a:0deg;--from-r:-60deg;--to-r:30deg;--d:700ms" />
                      <i data-s-part class="cd-hand cd-m" style="--a:0deg;--from-r:-90deg;--to-r:60deg;--d:900ms" />
                      <i data-s-part class="cd-hand cd-s" style="--a:0deg;--from-r:-120deg;--to-r:90deg;--d:1000ms" />
                      <div class="cd-label">
                        <b>北京时间</b>
                        <small>世界时钟 · 瞬时校准</small>
                      </div>
                    </SwapPanel>

                    <!-- Panel 2: Alarm -->
                    <SwapPanel id="cd-alarm" :hidden="true">
                      <i data-s-part class="cd-ear cd-ear--l" style="--from-x:24px;--from-y:24px;--d:700ms" />
                      <i data-s-part class="cd-ear cd-ear--r" style="--from-x:-24px;--from-y:24px;--d:700ms" />
                      <i data-s-part class="cd-hand cd-h" style="--a:225deg;--from-r:-60deg;--to-r:30deg;--d:700ms" />
                      <i data-s-part class="cd-hand cd-m" style="--a:180deg;--from-r:-90deg;--to-r:60deg;--d:900ms" />
                      <div class="cd-label">
                        <b>07:30</b>
                        <small>工作日 · 下一个闹钟</small>
                      </div>
                    </SwapPanel>

                    <!-- Panel 3: Stopwatch -->
                    <SwapPanel id="cd-watch" :hidden="true">
                      <i data-s-part="pop" class="cd-face" style="--d:300ms;--from-s:0.96" />
                      <i data-s-part="pop" class="cd-crown" style="--from-y:14px;--d:400ms;--delay:130ms" />
                      <i data-s-part="pop" class="cd-key cd-key--l" style="--from-x:10px;--from-y:10px;--d:430ms;--delay:250ms" />
                      <i data-s-part="pop" class="cd-key cd-key--r" style="--from-x:-10px;--from-y:10px;--d:450ms;--delay:250ms" />
                      <i data-s-part class="cd-hand cd-s cd-s--watch" style="--a:0deg;--from-r:-30deg;--to-r:90deg;--d:400ms" />
                      <div class="cd-label">
                        <b class="cd-red">00:00.00</b>
                        <small>秒表 · 机械按键弹出</small>
                      </div>
                    </SwapPanel>
                  </Swap>
                </div>

                <!-- Bottom Navigation Triggers -->
                <nav class="h-14 border-t border-[#e2e2e2] bg-white flex items-center justify-around px-4">
                  <button
                    data-s-show="cd-world"
                    aria-current="page"
                    class="flex flex-col items-center gap-1 text-[11px] font-bold text-[#636363] hover:text-[#333] cursor-pointer"
                  >
                    <svg class="size-5"><use href="#si-setting" /></svg>
                    世界时钟
                  </button>
                  <button
                    data-s-show="cd-alarm"
                    class="flex flex-col items-center gap-1 text-[11px] font-bold text-[#636363] hover:text-[#333] cursor-pointer"
                  >
                    <svg class="size-5"><use href="#si-confirm" /></svg>
                    闹钟
                  </button>
                  <button
                    data-s-show="cd-watch"
                    class="flex flex-col items-center gap-1 text-[11px] font-bold text-[#636363] hover:text-[#333] cursor-pointer"
                  >
                    <svg class="size-5"><use href="#si-play" /></svg>
                    秒表
                  </button>
                </nav>
              </div>
            </CardContent>
          </Card>

          <!-- 手势与动效交互套件 (Swipe, Picker, Elastic, QuickBar) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Swipe to Delete & Elastic Rubber-band -->
            <Card>
              <CardHeader>
                <CardTitle>向右滑动删除 (Swipe Right) 与橡皮筋回弹 (Elastic)</CardTitle>
                <CardDescription>
                  锤子特色向右滑露出左侧删除托盘（1/5 阻尼感），并内置 250ms 粘滞曲线橡皮筋回弹容器。
                </CardDescription>
              </CardHeader>
              <CardContent class="flex flex-col gap-4">
                <Elastic class="h-44 border border-[#e2e2e2] rounded-[10px] shadow-inner">
                  <div class="bg-white divide-y divide-[#f2f2f2] shadow-sm">
                    <Swipe>
                      <template #actions>
                        <button data-s-swipe-delete class="size-10 rounded-full bg-[#e55f55] border border-[#d2463c] flex items-center justify-center text-white shadow-sm cursor-pointer" title="删除行">
                          <svg class="size-5"><use href="#si-c-delete" /></svg>
                        </button>
                      </template>
                      <span class="text-[15px] font-medium text-[#333]">向右滑动这一行（带阻尼托盘）</span>
                      <span class="text-[12px] text-[#9d9d9d]">右滑删除 &gt;</span>
                    </Swipe>

                    <Swipe>
                      <template #actions>
                        <button data-s-swipe-delete class="size-10 rounded-full bg-[#e55f55] border border-[#d2463c] flex items-center justify-center text-white shadow-sm cursor-pointer" title="删除行">
                          <svg class="size-5"><use href="#si-c-delete" /></svg>
                        </button>
                      </template>
                      <span class="text-[15px] font-medium text-[#333]">工匠的执着：满程线性位移与触感反馈</span>
                      <span class="text-[12px] text-[#9d9d9d]">右滑删除 &gt;</span>
                    </Swipe>

                    <div class="px-4 py-3 text-[14px] text-[#7f7f7f] bg-white">
                      👆 尝试在上方或下方拖拽/回弹，即可看到露出的 Smartisan R2 竖条纹底纹与 250ms 粘滞回弹 (ViscousFluid)
                    </div>
                  </div>
                </Elastic>
              </CardContent>
            </Card>

            <!-- 5-Row Mechanical Wheel Picker & QuickBar -->
            <Card>
              <CardHeader>
                <CardTitle>机械滚轮选择器 (Picker) 与字母索引 (QuickBar)</CardTitle>
                <CardDescription>
                  上下边缘 1/6 渐变羽化遮罩，靠近选中带字号放大（16px → 18px）并动态加深，支持滑动惯性与 200ms 吸附。
                </CardDescription>
              </CardHeader>
              <CardContent class="flex gap-4 items-center">
                <div class="flex-1">
                  <Picker title="出生年月日选择">
                    <PickerCol :items="['2022', '2023', '2024', '2025', '2026']" v-model="wheelYear" />
                    <PickerCol :items="['06', '07', '08', '09', '10', '11', '12']" v-model="wheelMonth" />
                    <PickerCol :items="['01', '02', '03', '04', '05', '06']" v-model="wheelDay" />
                  </Picker>
                  <div class="text-center text-[12px] text-[#7f7f7f] pt-2">
                    当前选择：{{ wheelYear }}年{{ wheelMonth }}月{{ wheelDay }}日
                  </div>
                </div>

                <!-- QuickBar -->
                <div class="flex flex-col items-center gap-1">
                  <div class="text-[11px] font-bold text-[#636363]">字母条</div>
                  <div class="relative h-[220px] flex items-center justify-center border border-[#e2e2e2] rounded-[6px] bg-white px-1">
                    <QuickBar @letter="handleLetter" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>

    <!-- Global Smartisan Toaster (ToastProvider + ToastViewport) -->
    <Toaster />
  </div>
</template>

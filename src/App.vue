<script setup lang="ts">
import { ref } from 'vue'
import {
  // 基础控件
  Button,
  ButtonGroup,
  Badge,
  Kbd,
  Label,
  Separator,
  Typography,
  Icon,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,

  // 表单与输入
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  PinInput,
  PinInputInput,
  NumberField,
  NumberFieldInput,
  NumberFieldIncrement,
  NumberFieldDecrement,
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemText,
  TagsInputItemDelete,
  Textarea,
  Switch,
  Slider,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  NativeSelect,
  Combobox,
  DatePicker,
  Calendar,
  RangeCalendar,
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,

  // 布局与呈现
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Item,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  ScrollArea,
  ScrollBar,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  AspectRatio,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,

  // 弹窗与浮层
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
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  Alert,
  AlertTitle,
  AlertDescription,
  Toast,
  Toaster,
  useToast,
  Sonner,

  // 数据呈现与表格
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  DataTable,
  Pagination,
  PaginationList,
  PaginationListItem,
  PaginationPrev,
  PaginationNext,
  Progress,
  Spinner,
  Skeleton,
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
  StepperIndicator,
  Chart,
  Empty,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  Marker,
  Trace,
  TraceItem,
  CodeBlock,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,

  // 锤子独家特色
  Bubble,
  Attachment,
  AttachmentItem,
  Message,
  MessageScroller,
  Elastic,
  Swipe,
  Picker,
  PickerCol,
  QuickBar,
  Swap,
  SwapPanel,
  Questionnaire,
  QuestionnaireOption,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui'

const { toast } = useToast()

// 状态定义
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
const pinVal = ref<string[]>([])
const currentStep = ref(2)
const surveyChoice = ref('ans-1')
const wheelYear = ref('2024')
const wheelMonth = ref('08')
const wheelDay = ref('01')
const selectedLetter = ref('S')
const isBold = ref(true)
const alignVal = ref('center')
const isCollapsibleOpen = ref(false)
const progressVal = ref(68)
const selectedCombobox = ref('smartisan-r2')

const comboboxOptions = [
  { label: 'Smartisan T1 (经典开山之作)', value: 'smartisan-t1' },
  { label: 'Smartisan T2 (极简无断点中框)', value: 'smartisan-t2' },
  { label: 'Smartisan M1 / M1L (性能怪兽)', value: 'smartisan-m1' },
  { label: 'Nut Pro 2 (隐藏式双摄与微缝听筒)', value: 'nut-pro2' },
  { label: 'Smartisan R1 (次世代旗舰)', value: 'smartisan-r1' },
  { label: 'Smartisan R2 (微米级光致变色纯白特别版)', value: 'smartisan-r2' },
]

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
  { label: '大爆炸与一步', value: 78, color: '#e5645a' },
  { label: 'TNT 桌面系统', value: 88, color: '#44bb77' },
]

const codeSnippet = `import SmartisanUI from 'smartisan-ui'
import 'smartisan-ui/style.css'

// 全局注册 72+ 款拟物组件
app.use(SmartisanUI)`
</script>

<template>
  <div class="s-page s-page--textured min-h-screen text-[#333333] font-s selection:bg-[#5b87eb] selection:text-white pb-24" style="background: var(--s-page-texture);">
    <!-- 全局 Toaster 消息栈 -->
    <Toaster />

    <!-- 顶部应用栏：全面采用组件驱动，拒绝原生标签 -->
    <header class="sticky top-0 z-40 bg-gradient-to-r from-[#222325] via-[#323336] to-[#222325] shadow-[0_4px_12px_rgba(0,0,0,0.18)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <!-- Logo 使用 Avatar 组件 -->
          <Avatar shape="circle" size="sm" class="bg-gradient-to-b from-[#e5645a] to-[#c83530] border-[#b7241f] shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
            <AvatarFallback class="bg-transparent text-white font-bold text-[15px]">T</AvatarFallback>
          </Avatar>
          
          <div class="flex items-center gap-2">
            <Typography variant="h4" class="text-white tracking-wide">Smartisan UI</Typography>
            <Badge variant="outline" size="sm" class="text-white/80 border-white/20">VUE 3</Badge>
            <Badge variant="blue" size="sm">TAILWIND 4</Badge>
          </div>
        </div>

        <!-- 顶栏 NavigationMenu 核心导航菜单 -->
        <NavigationMenu class="hidden lg:flex">
          <NavigationMenuList class="gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger class="text-[#c8c8c8] hover:text-white hover:bg-white/10 data-[state=open]:bg-white/15 data-[state=open]:text-white">
                组件导航
              </NavigationMenuTrigger>
              <NavigationMenuContent class="p-3 bg-white">
                <div class="w-[500px] grid grid-cols-2 gap-2 p-1">
                  <NavigationMenuLink
                    class="cursor-pointer group flex flex-col gap-1 p-2.5 rounded-[6px] hover:bg-[#f5f8ff] border border-transparent hover:border-[#d9e5ff] transition-all"
                    @click="activeTab = 'buttons'; toast('已切换至：按钮与基础控制')"
                  >
                    <div class="flex items-center justify-between font-bold text-[13px] text-[#333333] group-hover:text-[#5079d9] whitespace-nowrap">
                      <span>🔘 按钮与基础控制</span>
                      <Badge variant="blue" size="sm">精选</Badge>
                    </div>
                    <Typography variant="muted" class="text-[11px] text-[#7f7f7f] leading-snug">拟物大按钮、旋钮、开关、复选圈与徽章</Typography>
                  </NavigationMenuLink>

                  <NavigationMenuLink
                    class="cursor-pointer group flex flex-col gap-1 p-2.5 rounded-[6px] hover:bg-[#f5f8ff] border border-transparent hover:border-[#d9e5ff] transition-all"
                    @click="activeTab = 'forms'; toast('已切换至：表单与输入')"
                  >
                    <div class="flex items-center justify-between font-bold text-[13px] text-[#333333] group-hover:text-[#5079d9] whitespace-nowrap">
                      <span>📝 表单与输入</span>
                    </div>
                    <Typography variant="muted" class="text-[11px] text-[#7f7f7f] leading-snug">凹槽输入框、步进器、OTP 验证码、标签输入</Typography>
                  </NavigationMenuLink>

                  <NavigationMenuLink
                    class="cursor-pointer group flex flex-col gap-1 p-2.5 rounded-[6px] hover:bg-[#f5f8ff] border border-transparent hover:border-[#d9e5ff] transition-all"
                    @click="activeTab = 'layouts'; toast('已切换至：布局与容器')"
                  >
                    <div class="flex items-center justify-between font-bold text-[13px] text-[#333333] group-hover:text-[#5079d9] whitespace-nowrap">
                      <span>📦 布局与容器</span>
                      <Badge variant="secondary" size="sm">高频</Badge>
                    </div>
                    <Typography variant="muted" class="text-[11px] text-[#7f7f7f] leading-snug">Card 卡片、Item 列表行、NavigationMenu、手风琴</Typography>
                  </NavigationMenuLink>

                  <NavigationMenuLink
                    class="cursor-pointer group flex flex-col gap-1 p-2.5 rounded-[6px] hover:bg-[#f5f8ff] border border-transparent hover:border-[#d9e5ff] transition-all"
                    @click="activeTab = 'overlays'; toast('已切换至：浮层与反馈')"
                  >
                    <div class="flex items-center justify-between font-bold text-[13px] text-[#333333] group-hover:text-[#5079d9] whitespace-nowrap">
                      <span>💬 浮层与反馈</span>
                    </div>
                    <Typography variant="muted" class="text-[11px] text-[#7f7f7f] leading-snug">羊皮纸 Toast、居中对齐对话框、抽屉、下拉菜单</Typography>
                  </NavigationMenuLink>

                  <NavigationMenuLink
                    class="cursor-pointer group flex flex-col gap-1 p-2.5 rounded-[6px] hover:bg-[#f5f8ff] border border-transparent hover:border-[#d9e5ff] transition-all"
                    @click="activeTab = 'data'; toast('已切换至：数据呈现与表格')"
                  >
                    <div class="flex items-center justify-between font-bold text-[13px] text-[#333333] group-hover:text-[#5079d9] whitespace-nowrap">
                      <span>📊 数据呈现</span>
                    </div>
                    <Typography variant="muted" class="text-[11px] text-[#7f7f7f] leading-snug">数据表格、分页器、步进进度、图表展示</Typography>
                  </NavigationMenuLink>

                  <NavigationMenuLink
                    class="cursor-pointer group flex flex-col gap-1 p-2.5 rounded-[6px] hover:bg-[#f5f8ff] border border-transparent hover:border-[#d9e5ff] transition-all"
                    @click="activeTab = 'specialties'; toast('已切换至：锤子特色组件')"
                  >
                    <div class="flex items-center justify-between font-bold text-[13px] text-[#333333] group-hover:text-[#5079d9] whitespace-nowrap">
                      <span>🎨 锤子独家特色</span>
                      <Badge variant="yellow" size="sm">独家</Badge>
                    </div>
                    <Typography variant="muted" class="text-[11px] text-[#7f7f7f] leading-snug">闪念胶囊、附件、向右滑动删除、回弹、拟物滚轮</Typography>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger class="text-[#c8c8c8] hover:text-white hover:bg-white/10 data-[state=open]:bg-white/15 data-[state=open]:text-white">
                设计哲学
              </NavigationMenuTrigger>
              <NavigationMenuContent class="p-3.5 bg-white">
                <div class="w-[360px] p-1 space-y-2.5">
                  <div class="p-3 bg-gradient-to-br from-[#fafafa] to-[#f2f2f2] border border-[#e2e2e2] rounded-[6px]">
                    <div class="flex items-center justify-between font-bold text-[13px] text-[#333333] mb-1">
                      <span>Smartisan 拟物规范</span>
                      <Badge variant="blue" size="sm">R2 校对</Badge>
                    </div>
                    <Typography variant="muted" class="text-[11px] text-[#636363] leading-relaxed">
                      180° 细腻微渐变、0.5px 极细描边、内凹阴影与瞬时按压沉降，实体触感与数字秩序并存。
                    </Typography>
                  </div>
                  <div class="grid grid-cols-2 gap-2 text-[12px]">
                    <div class="p-2 border border-[#eee] rounded-[4px] bg-[#fafafa]">
                      <Typography variant="h4" class="text-[12px] text-[#333333]">📐 6dp 网格</Typography>
                      <Typography variant="muted" class="text-[11px] text-[#7f7f7f]">严格遵循 6dp 步长标度</Typography>
                    </div>
                    <div class="p-2 border border-[#eee] rounded-[4px] bg-[#fafafa]">
                      <Typography variant="h4" class="text-[12px] text-[#333333]">📜 羊皮纸纸质</Typography>
                      <Typography variant="muted" class="text-[11px] text-[#7f7f7f]">#fcf6e6 底色配棕字 Toast</Typography>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger class="text-[#c8c8c8] hover:text-white hover:bg-white/10 data-[state=open]:bg-white/15 data-[state=open]:text-white">
                外部引入
              </NavigationMenuTrigger>
              <NavigationMenuContent class="p-3.5 bg-white">
                <div class="w-[340px] p-1 space-y-2.5">
                  <div>
                    <Typography variant="h4" class="text-[12px] text-[#333333] mb-1.5">NPM 依赖安装</Typography>
                    <div
                      class="p-2 bg-[#252528] rounded-[5px] text-white font-mono text-[12px] flex items-center justify-between cursor-pointer hover:bg-[#1e1e21] border border-[#3a3a3d]"
                      @click="toast('已复制安装命令: pnpm add smartisan-ui')"
                    >
                      <span>pnpm add smartisan-ui</span>
                      <Badge variant="blue" size="sm">复制</Badge>
                    </div>
                  </div>
                  <Typography variant="muted" class="text-[11px] text-[#7f7f7f] leading-relaxed">
                    导入样式 <Kbd class="px-1 text-[11px]">import 'smartisan-ui/style.css'</Kbd>，支持全局 <Kbd class="px-1 text-[11px]">app.use(SmartisanUI)</Kbd> 与按需引入。
                  </Typography>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div class="flex items-center gap-3">
          <!-- 采用 Button 拟物图标按压组件，替换原生 button -->
          <Button
            variant="icon"
            size="icon"
            class="text-[#c8c8c8] hover:text-white hover:bg-white/10 active:scale-125 transition-transform"
            title="搜索 (Icon组件)"
            @click="toast('触发搜索图标')"
          >
            <Icon name="si-search" :size="18" />
          </Button>
          
          <Button
            variant="icon"
            size="icon"
            class="text-[#c8c8c8] hover:text-white hover:bg-white/10 active:scale-125 transition-transform"
            title="设置 (Icon组件)"
            @click="toast('触发设置图标')"
          >
            <Icon name="si-setting" :size="18" />
          </Button>

          <Button size="sm" variant="outline" class="text-white/80 border-white/20 hover:bg-white/10 active:bg-white/20" @click="toast('欢迎探索 Smartisan OS 72+款全量拟物组件')">
            弹出 Toast
          </Button>
          <Button size="sm" @click="toast('已切换至系统最新拟物规范')">
            完成
          </Button>
        </div>
      </div>
    </header>

    <!-- 顶部极细分割线组件 -->
    <Separator class="border-[#2d2e31]" />

    <!-- 次级导航条：面包屑与状态指示 -->
    <div class="bg-white px-4 sm:px-6 py-2.5 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
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
              <BreadcrumbPage>全量 78 基础与拟物组件</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div class="flex items-center gap-2">
          <Typography variant="muted" class="text-[12px] text-[#7f7f7f]">规范源自 Smartisan R2 真机校对与 Figma UI Kit</Typography>
          <Badge variant="blue" size="dot" />
        </div>
      </div>
    </div>

    <!-- 拟物分割线组件 -->
    <Separator />

    <!-- 主展示工作区 -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
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

        <!-- ======================= TAB 1: 按钮与基础控制 ======================= -->
        <TabsContent value="buttons" class="mt-4 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Button 按钮系列 (Figma 18:7, 147:413, 27:138, 26:13)</CardTitle>
              <CardDescription>
                锤子按钮精髓：主按钮 180° 细腻蓝渐变 (#5b87eb→#5883eb) + 0.8px 深蓝描边 + 向下 4px 短投影；按下瞬间切为纯色 #4772e6；旋钮按钮采用凹槽底座嵌白色凸起旋钮。
              </CardDescription>
            </CardHeader>
            <CardContent class="flex flex-col gap-6">
              <!-- 大小尺寸按钮展示 -->
              <div>
                <Typography variant="h4" class="text-[13px] text-[#7f7f7f] mb-3">大按钮 (60px)、中按钮 (48px) & 小按钮 (30px)</Typography>
                <div class="flex flex-wrap items-center gap-4">
                  <Button @click="toast('触发主要操作')">主要操作 (Primary)</Button>
                  <Button variant="danger" @click="toast('警告：危险操作')">危险操作 (Danger)</Button>
                  <Button variant="sheet">白色弹窗按钮 (Sheet)</Button>
                  <Button variant="outline">描边按钮 (Outline)</Button>
                  <Button variant="text">文字按钮 (Text)</Button>
                  <Button disabled>禁用态 (Disabled)</Button>
                </div>
                <div class="flex flex-wrap items-center gap-4 mt-3">
                  <Button size="lg">大号 60px</Button>
                  <Button size="md">中号 48px</Button>
                  <Button size="sm">小号 30px (Sm)</Button>
                  <Button size="sm" variant="outline">小号描边</Button>
                  <Button size="icon" variant="icon">
                    <Icon name="si-add" :size="16" />
                  </Button>
                </div>
              </div>

              <Separator />

              <!-- 拟物旋钮与组合按钮 -->
              <div>
                <Typography variant="h4" class="text-[13px] text-[#7f7f7f] mb-3">拟物圆形旋钮按钮 (Rounded Knobs 80px / 28px) 与 ButtonGroup</Typography>
                <div class="flex flex-wrap items-center gap-6">
                  <div class="flex flex-col items-center gap-2">
                    <Button variant="round" size="round" @click="toast('播放按钮已点击')">
                      <Icon name="si-play" :size="24" class="text-[#929292] translate-x-0.5" />
                    </Button>
                    <Typography variant="muted" class="text-[11px]">80px 音乐旋钮</Typography>
                  </div>

                  <div class="flex flex-col items-center gap-2">
                    <Button variant="round" size="round-sm" @click="toast('小旋钮已点击')">
                      <Icon name="si-play" :size="12" class="text-[#929292] translate-x-0.5" />
                    </Button>
                    <Typography variant="muted" class="text-[11px]">28px 小旋钮</Typography>
                  </div>

                  <!-- ButtonGroup：全部使用 Button 组件驱动 -->
                  <div class="flex flex-col gap-2">
                    <Typography variant="h4" class="text-[11px] text-[#7f7f7f]">ButtonGroup 组合按钮</Typography>
                    <ButtonGroup>
                      <Button variant="outline" @click="toast('选择第一项')">左侧操作</Button>
                      <Button variant="outline" @click="toast('选择第二项')">中央操作</Button>
                      <Button variant="outline" @click="toast('选择第三项')">右侧操作</Button>
                    </ButtonGroup>
                  </div>

                  <!-- Toggle & ToggleGroup 组件展示 -->
                  <div class="flex flex-col gap-2">
                    <Typography variant="h4" class="text-[11px] text-[#7f7f7f]">Toggle & ToggleGroup 状态切换</Typography>
                    <div class="flex items-center gap-3">
                      <Toggle v-model:pressed="isBold">
                        <span class="font-bold">加粗 B</span>
                      </Toggle>
                      <ToggleGroup type="single" v-model="alignVal">
                        <ToggleGroupItem value="left">居左</ToggleGroupItem>
                        <ToggleGroupItem value="center">居中</ToggleGroupItem>
                        <ToggleGroupItem value="right">居右</ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <!-- Switch & Slider -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-3">
                  <Typography variant="h4" class="text-[13px] text-[#7f7f7f]">Switch 拟物开关 (52×24 线性滑轨)</Typography>
                  <div class="flex items-center gap-6">
                    <div class="flex items-center gap-3">
                      <Switch v-model:checked="switchVal" />
                      <Typography variant="muted" class="text-[13px]">{{ switchVal ? '开启状态 (蓝底)' : '关闭状态' }}</Typography>
                    </div>
                    <div class="flex items-center gap-3">
                      <Switch v-model:checked="switchVal2" />
                      <Typography variant="muted" class="text-[13px]">双击体验物理平滑位移</Typography>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col gap-3">
                  <Typography variant="h4" class="text-[13px] text-[#7f7f7f]">Slider 拟物滑块 (当前值: {{ sliderVal[0] }}%)</Typography>
                  <Slider v-model="sliderVal" :max="100" :step="1" class="w-full max-w-sm mt-2" />
                </div>
              </div>

              <Separator />

              <!-- Checkbox & Radio：全面使用 Label 组件包裹，彻底替换原生 label -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-3">
                  <Typography variant="h4" class="text-[13px] text-[#7f7f7f]">Checkbox 复选圈 (22px 拟物微型勾选圈)</Typography>
                  <div class="flex items-center gap-4">
                    <Label class="flex items-center gap-2 cursor-pointer">
                      <Checkbox v-model:checked="checkboxVal1" variant="blue" />
                      <span class="text-[14px] text-[#333333]">蓝色勾选圈</span>
                    </Label>
                    <Label class="flex items-center gap-2 cursor-pointer">
                      <Checkbox v-model:checked="checkboxVal2" variant="red" />
                      <span class="text-[14px] text-[#333333]">红色删除圈</span>
                    </Label>
                  </div>
                </div>

                <div class="flex flex-col gap-3">
                  <Typography variant="h4" class="text-[13px] text-[#7f7f7f]">RadioGroup 拟物立体单选盘 (22px)</Typography>
                  <RadioGroup v-model="radioVal" class="flex items-center gap-5">
                    <Label class="flex items-center gap-2 cursor-pointer">
                      <RadioGroupItem value="option-1" />
                      <span class="text-[14px] text-[#333333]">方案 A</span>
                    </Label>
                    <Label class="flex items-center gap-2 cursor-pointer">
                      <RadioGroupItem value="option-2" />
                      <span class="text-[14px] text-[#333333]">方案 B</span>
                    </Label>
                    <Label class="flex items-center gap-2 cursor-pointer">
                      <RadioGroupItem value="option-3" />
                      <span class="text-[14px] text-[#333333]">方案 C</span>
                    </Label>
                  </RadioGroup>
                </div>
              </div>

              <Separator />

              <!-- Badge 拟物徽章全系展示 -->
              <div>
                <Typography variant="h4" class="text-[13px] text-[#7f7f7f] mb-3">Badge 拟物徽章全系列 (即便放入 Item 点击也不被误染为白色)</Typography>
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
                    <span>红点未读</span>
                  </div>
                </div>
              </div>

              <Separator />

              <!-- Kbd 键帽与 Typography 排版 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Typography variant="h4" class="text-[13px] text-[#7f7f7f] mb-3">Kbd 拟物立体键帽</Typography>
                  <div class="flex flex-wrap items-center gap-2">
                    <Kbd>⌘</Kbd>
                    <Typography variant="muted">+</Typography>
                    <Kbd>S</Kbd>
                    <Typography variant="muted" class="ml-2 mr-4">快速保存便签</Typography>

                    <Kbd>Ctrl</Kbd>
                    <Typography variant="muted">+</Typography>
                    <Kbd>Shift</Kbd>
                    <Typography variant="muted">+</Typography>
                    <Kbd>P</Kbd>
                    <Typography variant="muted" class="ml-2">唤醒命令菜单</Typography>
                  </div>
                </div>

                <div>
                  <Typography variant="h4" class="text-[13px] text-[#7f7f7f] mb-3">Typography 官方排版层级</Typography>
                  <div class="space-y-1">
                    <Typography variant="h3">H3 标题：工匠的骄傲</Typography>
                    <Typography variant="p">正文：细节不是细节，细节就是产品本身。</Typography>
                    <Typography variant="muted">微弱字色：Smartisan OS 8 经典灰阶阶梯。</Typography>
                  </div>
                </div>
              </div>

              <Separator />

              <!-- Icon 官方原生矢量图标展示 (29个Symbol) -->
              <div>
                <Typography variant="h4" class="text-[13px] text-[#7f7f7f] mb-3">Icon 官方原生矢量图标 (29款全量内置，无需手动拷贝 SVG)</Typography>
                <div class="flex flex-wrap items-center gap-4 text-[#636363]">
                  <Icon name="si-back" :size="20" title="si-back" />
                  <Icon name="si-search" :size="20" title="si-search" />
                  <Icon name="si-setting" :size="20" title="si-setting" />
                  <Icon name="si-add" :size="20" title="si-add" />
                  <Icon name="si-close" :size="20" title="si-close" />
                  <Icon name="si-confirm" :size="20" title="si-confirm" />
                  <Icon name="si-more" :size="20" title="si-more" />
                  <Icon name="si-play" :size="20" title="si-play" />
                  <Icon name="si-star" :size="20" title="si-star" />
                  <Icon name="si-star-fill" :size="20" class="text-amber-500" title="si-star-fill" />
                  <Icon name="si-volume" :size="20" title="si-volume" />
                  <Icon name="si-list" :size="20" title="si-list" />
                  <Icon name="si-c-check" :size="20" title="si-c-check" />
                  <Icon name="si-c-redcheck" :size="20" title="si-c-redcheck" />
                  <Icon name="si-c-delete" :size="20" title="si-c-delete" />
                  <Icon name="si-c-radio-on" :size="20" title="si-c-radio-on" />
                  <Icon name="si-c-radio-off" :size="20" title="si-c-radio-off" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <!-- ======================= TAB 2: 表单与输入 ======================= -->
        <TabsContent value="forms" class="mt-4 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Form、Field 与输入控件全套</CardTitle>
              <CardDescription>
                包含输入框凹槽阴影、复合 InputGroup、OTP 验证码、PinInput 密码格、数字步进器、标签输入框与组合选择器。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form class="space-y-6">
                <FieldGroup class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field>
                    <FieldLabel>设备型号 (Input)</FieldLabel>
                    <Input v-model="textVal" placeholder="请输入设备名称" />
                    <FieldDescription>显示于系统关于页与蓝牙广播名称</FieldDescription>
                  </Field>

                  <Field>
                    <FieldLabel>官方网址 (InputGroup)</FieldLabel>
                    <InputGroup>
                      <InputGroupAddon>https://</InputGroupAddon>
                      <InputGroupInput placeholder="smartisan.com" />
                      <InputGroupAddon>.cn</InputGroupAddon>
                    </InputGroup>
                  </Field>

                  <Field>
                    <FieldLabel>Combobox 组合搜索选择器</FieldLabel>
                    <Combobox
                      v-model="selectedCombobox"
                      :options="comboboxOptions"
                      placeholder="搜索并选择历代坚果手机..."
                    />
                  </Field>

                  <Field>
                    <FieldLabel>DatePicker 拟物日期选择器</FieldLabel>
                    <DatePicker placeholder="选择备份时间点" />
                  </Field>

                  <Field>
                    <FieldLabel>原生选择器 (NativeSelect)</FieldLabel>
                    <NativeSelect default-value="r2">
                      <option value="r2">Smartisan R2 纯白光致变色版</option>
                      <option value="r1">Smartisan R1 碳黑版</option>
                      <option value="t2">Smartisan T2 全金属无断点版</option>
                    </NativeSelect>
                  </Field>

                  <Field>
                    <FieldLabel>便签正文 (Textarea)</FieldLabel>
                    <Textarea v-model="textareaVal" :rows="3" placeholder="写下你的想法..." />
                  </Field>
                </FieldGroup>

                <Separator />

                <FieldGroup class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Field>
                    <FieldLabel>数字微调输入框 (NumberField)</FieldLabel>
                    <NumberField v-model="numVal" :min="1" :max="100">
                      <NumberFieldDecrement />
                      <NumberFieldInput />
                      <NumberFieldIncrement />
                    </NumberField>
                  </Field>

                  <Field>
                    <FieldLabel>OTP 短信验证码 (InputOTP)</FieldLabel>
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
                  </Field>

                  <Field>
                    <FieldLabel>PIN 锁屏密码 (PinInput)</FieldLabel>
                    <PinInput v-model="pinVal" placeholder="○">
                      <PinInputInput :index="0" />
                      <PinInputInput :index="1" />
                      <PinInputInput :index="2" />
                      <PinInputInput :index="3" />
                    </PinInput>
                  </Field>
                </FieldGroup>

                <Separator />

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

                <Separator />

                <!-- Calendar & RangeCalendar 日历组件展示 -->
                <div>
                  <Typography variant="h4" class="text-[13px] text-[#7f7f7f] mb-3">Calendar & RangeCalendar 日历与区间选择</Typography>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#fafafa] p-4 rounded-[8px] border border-[#e2e2e2]">
                    <div class="flex flex-col items-center">
                      <Typography variant="muted" class="text-[12px] mb-2 font-bold">单日选择日历 (Calendar)</Typography>
                      <Calendar class="bg-white rounded-[8px] border border-[#e2e2e2] shadow-sm p-3" />
                    </div>
                    <div class="flex flex-col items-center">
                      <Typography variant="muted" class="text-[12px] mb-2 font-bold">区间范围日历 (RangeCalendar)</Typography>
                      <RangeCalendar class="bg-white rounded-[8px] border border-[#e2e2e2] shadow-sm p-3" />
                    </div>
                  </div>
                </div>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <!-- ======================= TAB 3: 布局与容器 ======================= -->
        <TabsContent value="layouts" class="mt-4 flex flex-col gap-6">
          <!-- Item 经典拟物列表行展示 -->
          <Card>
            <CardHeader>
              <CardTitle>Item 拟物列表行 (60px 标度、100ms 接触判定与锤子蓝反馈)</CardTitle>
              <CardDescription>
                点击行体验 100ms 沉浸式变色，长按整行底色瞬时切换为坚果蓝 (#5985eb)，文字变白，徽章始终保留清晰对比度。
              </CardDescription>
            </CardHeader>
            <CardContent class="p-0">
              <div class="divide-y divide-[#f2f2f2]">
                <Item
                  title="欢喜云同步"
                  subtitle="上次同步：今天 09:12，相册与便签已备份"
                  detail="已同步"
                  show-arrow
                  @click="toast('同步成功')"
                >
                  <template #leading>
                    <Icon name="si-star" :size="20" class="text-[#5985eb]" />
                  </template>
                  <template #trailing>
                    <Badge variant="secondary">已连接</Badge>
                  </template>
                </Item>

                <Item
                  title="无障碍与快捷键"
                  subtitle="已开启一步 (One Step) 与大爆炸 (Big Bang)"
                  show-arrow
                  @click="toast('点击无障碍设置')"
                >
                  <template #leading>
                    <Icon name="si-setting" :size="20" class="text-[#7f7f7f]" />
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
                  show-arrow
                  @click="toast('正在检查系统更新...')"
                >
                  <template #leading>
                    <Icon name="si-back" :size="20" class="text-[#cc3e39] rotate-90" />
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
                    <Icon name="si-play" :size="20" class="text-amber-500" />
                  </template>
                  <template #trailing>
                    <Switch :checked="true" />
                  </template>
                </Item>
              </div>
            </CardContent>
          </Card>

          <!-- Menubar 与 Sidebar 组件演示 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Menubar 拟物应用菜单栏</CardTitle>
                <CardDescription>桌面端 TNT 风格应用顶栏菜单，支持快捷键提示与多级子项。</CardDescription>
              </CardHeader>
              <CardContent>
                <Menubar class="w-max">
                  <MenubarMenu>
                    <MenubarTrigger>文件</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem @click="toast('新建便签')">
                        新建便签 <Kbd class="ml-auto text-[10px]">⌘N</Kbd>
                      </MenubarItem>
                      <MenubarItem @click="toast('打开灵感胶囊')">
                        打开灵感胶囊 <Kbd class="ml-auto text-[10px]">⌘O</Kbd>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem @click="toast('保存修改')">
                        保存修改 <Kbd class="ml-auto text-[10px]">⌘S</Kbd>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>

                  <MenubarMenu>
                    <MenubarTrigger>编辑</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem @click="toast('大爆炸分词')">大爆炸分词</MenubarItem>
                      <MenubarItem @click="toast('一步拖拽分享')">一步拖拽</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>

                  <MenubarMenu>
                    <MenubarTrigger>视图</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem @click="toast('切换全屏 TNT')">TNT 大屏视界</MenubarItem>
                      <MenubarItem @click="toast('显示侧边栏')">显示侧边栏</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sidebar 侧边栏 (One Step 经典侧栏)</CardTitle>
                <CardDescription>锤子手机标志性的一步侧栏，用于不同 App 间直拖图片与文本。</CardDescription>
              </CardHeader>
              <CardContent class="h-44 p-0 overflow-hidden flex">
                <Sidebar class="w-full h-full border-0">
                  <SidebarHeader class="p-2.5 font-bold text-[12px] bg-[#ececec]">
                    <span>One Step 快捷边栏</span>
                  </SidebarHeader>
                  <SidebarContent class="p-2 space-y-1">
                    <SidebarItem class="flex items-center gap-2 p-1.5 rounded hover:bg-white text-[13px] cursor-pointer" @click="toast('拖入便签')">
                      <Icon name="si-list" :size="16" />
                      <span>便签</span>
                    </SidebarItem>
                    <SidebarItem class="flex items-center gap-2 p-1.5 rounded hover:bg-white text-[13px] cursor-pointer" @click="toast('拖入邮件')">
                      <Icon name="si-setting" :size="16" />
                      <span>邮件发送</span>
                    </SidebarItem>
                  </SidebarContent>
                  <SidebarFooter class="p-2 text-[11px] text-[#7f7f7f] border-t border-[#e2e2e2]">
                    共 12 款一步扩展应用
                  </SidebarFooter>
                </Sidebar>
              </CardContent>
            </Card>
          </div>

          <!-- 手风琴与折叠卡片 -->
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
                <CardTitle>Collapsible 可折叠面板</CardTitle>
                <CardDescription>用于次级设置项或高级选项的手动展开。</CardDescription>
              </CardHeader>
              <CardContent class="space-y-3">
                <Collapsible v-model:open="isCollapsibleOpen">
                  <div class="flex items-center justify-between p-3 bg-[#fafafa] rounded-[6px] border border-[#e2e2e2]">
                    <span class="font-bold text-[14px]">高级色彩着色器参数</span>
                    <CollapsibleTrigger as-child>
                      <Button size="sm" variant="outline">{{ isCollapsibleOpen ? '收起' : '展开' }}</Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent class="p-3 mt-2 bg-white rounded-[6px] border border-[#e2e2e2] text-[13px] text-[#636363] space-y-1">
                    <p>内凹阴影深度: 12dp</p>
                    <p>纵向渐变光角: 180deg</p>
                    <p>主按钮沉降色: #4772e6</p>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </div>

          <!-- Carousel 走马灯与 AspectRatio 拟物相框 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Carousel 走马灯轮播</CardTitle>
                <CardDescription>带拟物前后微凸按钮的轮播走马灯。</CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel :total="3" class="bg-[#222325] text-white">
                  <CarouselContent>
                    <CarouselItem :index="0" class="h-44 flex flex-col items-center justify-center p-6 text-center">
                      <Typography variant="h3" class="text-white mb-1">Smartisan R2 纯白特别版</Typography>
                      <Typography variant="muted" class="text-white/60 text-[12px]">微米级光致变色后盖，阳光下绽放纹理</Typography>
                    </CarouselItem>
                    <CarouselItem :index="1" class="h-44 flex flex-col items-center justify-center p-6 text-center">
                      <Typography variant="h3" class="text-white mb-1">闪念胶囊 2.0</Typography>
                      <Typography variant="muted" class="text-white/60 text-[12px]">无论何时何地，按下即可流转灵感</Typography>
                    </CarouselItem>
                    <CarouselItem :index="2" class="h-44 flex flex-col items-center justify-center p-6 text-center">
                      <Typography variant="h3" class="text-white mb-1">TNT 桌面视界</Typography>
                      <Typography variant="muted" class="text-white/60 text-[12px]">双指触控大屏，重塑桌面交互未来</Typography>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AspectRatio 16:9 拟物相框</CardTitle>
                <CardDescription>固定比例媒体呈现窗口。</CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio :ratio="16 / 9" class="bg-gradient-to-br from-[#303236] to-[#1c1d1f] rounded-[8px] flex flex-col items-center justify-center border border-[#444] shadow-inner text-white">
                  <Icon name="si-play" :size="32" class="text-white/80 mb-2" />
                  <Typography variant="muted" class="text-white/60 text-[12px]">16 : 9 拟物视频与相片比例容器</Typography>
                </AspectRatio>
              </CardContent>
            </Card>
          </div>

          <!-- Resizable 可拖拽分割布局 -->
          <Card>
            <CardHeader>
              <CardTitle>ResizablePanelGroup 拟物双栏拖拽布局</CardTitle>
              <CardDescription>带有中心立体小凹槽的拖拽分割面板。</CardDescription>
            </CardHeader>
            <CardContent>
              <ResizablePanelGroup direction="horizontal" class="h-40 border rounded-[8px]">
                <ResizablePanel :default-size="40" class="p-4 bg-[#fafafa] flex items-center justify-center">
                  <span class="text-[13px] text-[#636363]">左侧便签导航 (可拖拽分割柄改变比例)</span>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel :default-size="60" class="p-4 bg-white flex items-center justify-center">
                  <span class="text-[13px] text-[#636363]">右侧便签编辑器区域</span>
                </ResizablePanel>
              </ResizablePanelGroup>
            </CardContent>
          </Card>
        </TabsContent>

        <!-- ======================= TAB 4: 浮层与反馈 ======================= -->
        <TabsContent value="overlays" class="mt-4 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>弹窗、抽屉与反馈 (Dialogs, Sheets, Drawers & Overlays)</CardTitle>
              <CardDescription>
                标准对话框 368px 居中宽度，底部 54px 按钮组通过细线均分；Drawer 带有拟物拖拽小手柄；ContextMenu 支持右键呼出。
              </CardDescription>
            </CardHeader>
            <CardContent class="flex flex-wrap items-center gap-4">
              <!-- Dialog：全部使用 Button 组件驱动 Footer，无原生 button -->
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
                      <Button variant="outline">取消</Button>
                    </DialogClose>
                    <DialogClose as-child>
                      <Button data-primary @click="toast('正在下载更新包...')">立即升级</Button>
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
                    <AlertDialogCancel as-child>
                      <Button variant="outline">保留便签</Button>
                    </AlertDialogCancel>
                    <AlertDialogAction as-child>
                      <Button variant="danger" @click="toast('便签已删除')">确认删除</Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <!-- Drawer 拟物手势抽屉 -->
              <Drawer>
                <DrawerTrigger as-child>
                  <Button variant="outline">底部抽屉 (Drawer)</Button>
                </DrawerTrigger>
                <DrawerContent class="max-w-md mx-auto p-4 space-y-3">
                  <DrawerHeader>
                    <DrawerTitle>Smartisan 快速功能抽屉</DrawerTitle>
                    <DrawerDescription>底部拖拽滑出手柄面板</DrawerDescription>
                  </DrawerHeader>
                  <div class="py-4 space-y-2 text-[14px]">
                    <Item title="省电模式" detail="未开启" />
                    <Item title="护眼模式" detail="已定时开启" />
                  </div>
                  <DrawerFooter>
                    <DrawerClose as-child>
                      <Button class="w-full">完成</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>

              <!-- Sheet 侧边/底部面板 -->
              <Sheet>
                <SheetTrigger as-child>
                  <Button variant="sheet">底部菜单 (Sheet)</Button>
                </SheetTrigger>
                <SheetContent side="bottom" class="max-w-lg mx-auto">
                  <SheetHeader>
                    <Typography variant="h4" class="text-[14px] text-[#656565]">更多分享选项</Typography>
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
                <PopoverContent class="w-72 p-4">
                  <Typography variant="h4" class="text-[14px] mb-1">闪念胶囊灵感箱</Typography>
                  <Typography variant="muted" class="text-[12px] leading-relaxed">按下右侧红色按键随时记录，稍后归类。</Typography>
                </PopoverContent>
              </Popover>

              <!-- Tooltip -->
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button variant="outline" size="sm">悬停提示 (Tooltip)</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Smartisan 物理按压反馈</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <!-- HoverCard 悬停卡片 -->
              <HoverCard>
                <HoverCardTrigger as-child>
                  <Button variant="text" class="underline">@锤子科技 (HoverCard)</Button>
                </HoverCardTrigger>
                <HoverCardContent class="w-80 p-4 space-y-2">
                  <div class="flex items-center gap-3">
                    <Avatar size="sm" class="bg-[#c83530]">
                      <AvatarFallback class="text-white font-bold">T</AvatarFallback>
                    </Avatar>
                    <div>
                      <Typography variant="h4" class="text-[13px]">Smartisan OS</Typography>
                      <Typography variant="muted" class="text-[11px]">生来骄傲，天生不同</Typography>
                    </div>
                  </div>
                  <Typography variant="p" class="text-[12px] text-[#636363]">
                    以人为本的交互设计，克制而富有美感的轻拟物界面。
                  </Typography>
                </HoverCardContent>
              </HoverCard>

              <!-- DropdownMenu -->
              <DropdownMenu>
                <DropdownMenuTrigger as-child>
                  <Button variant="outline">下拉菜单 (DropdownMenu)</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-48">
                  <DropdownMenuLabel>便签操作</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem @click="toast('导出为长图')">导出为图片</DropdownMenuItem>
                  <DropdownMenuItem @click="toast('生成 PDF')">导出为 PDF</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem class="text-[#cc3e39]" @click="toast('已移至废纸篓')">移至废纸篓</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <!-- Sonner 提示触发 -->
              <Button variant="outline" @click="toast('Sonner 拟物通知：数据备份已完成')">
                触发 Sonner 通知
              </Button>
            </CardContent>
          </Card>

          <!-- ContextMenu 右键菜单展示 -->
          <Card>
            <CardHeader>
              <CardTitle>ContextMenu 右键上下文菜单</CardTitle>
              <CardDescription>在下方区域点击鼠标右键呼出拟物上下文选项。</CardDescription>
            </CardHeader>
            <CardContent>
              <ContextMenu>
                <ContextMenuTrigger class="flex h-32 w-full items-center justify-center rounded-[8px] border-2 border-dashed border-[#d0d0d0] bg-[#fafafa] text-[14px] text-[#7f7f7f] select-none hover:bg-white transition-colors cursor-context-menu">
                  🖱️ 鼠标在此虚线区域内点击右键 (Right Click)
                </ContextMenuTrigger>
                <ContextMenuContent class="w-52">
                  <ContextMenuItem @click="toast('已大爆炸')">💥 大爆炸文本</ContextMenuItem>
                  <ContextMenuItem @click="toast('已加入一步')">➡️ 加入一步侧栏</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem @click="toast('复制')">复制文字</ContextMenuItem>
                  <ContextMenuItem class="text-[#cc3e39]" @click="toast('删除')">删除</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </CardContent>
          </Card>

          <!-- Command 命令行搜索面板 -->
          <Card>
            <CardHeader>
              <CardTitle>Command 命令行面板</CardTitle>
              <CardDescription>极速搜索过滤组件与系统动作。</CardDescription>
            </CardHeader>
            <CardContent class="p-0">
              <Command class="border-0">
                <CommandInput placeholder="输入以搜索系统功能或应用..." />
                <CommandList class="max-h-48 p-2">
                  <CommandEmpty>未找到相关指令</CommandEmpty>
                  <CommandGroup heading="系统工具">
                    <CommandItem value="notes" @click="toast('打开便签')">📝 便签 (Notes)</CommandItem>
                    <CommandItem value="recorder" @click="toast('打开录音机')">🎙️ 拟物磁带录音机 (Recorder)</CommandItem>
                    <CommandItem value="clock" @click="toast('打开拟物时钟')">⏱️ 拟物指针时钟 (Clock)</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </CardContent>
          </Card>

          <!-- Alert 警告卡片 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Alert variant="default">
              <AlertTitle>羊皮纸提示卡 (Default Alert)</AlertTitle>
              <AlertDescription>已完成与 Smartisan 坚果云的实时凭证交换，云便签将自动加密存储。</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>注意警告 (Destructive Alert)</AlertTitle>
              <AlertDescription>当前设备未插拔 SIM 卡，无法启用双重认证网络验证。</AlertDescription>
            </Alert>
          </div>
        </TabsContent>

        <!-- ======================= TAB 5: 数据呈现与表格 ======================= -->
        <TabsContent value="data" class="mt-4 flex flex-col gap-6">
          <!-- Table 原生拟物表格结构 -->
          <Card>
            <CardHeader>
              <CardTitle>Table 原生拟物表格结构 (带 TableHeader、TableRow、TableCell)</CardTitle>
              <CardDescription>高阶表格底层所依赖的原生拟物表格组件。</CardDescription>
            </CardHeader>
            <CardContent class="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>手机代号</TableHead>
                    <TableHead>发布年份</TableHead>
                    <TableHead>代表工业设计</TableHead>
                    <TableHead class="text-right">状态</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell class="font-bold">Smartisan T1</TableCell>
                    <TableCell>2014</TableCell>
                    <TableCell>左右对称实体按键、iF 金奖设计</TableCell>
                    <TableCell class="text-right"><Badge variant="secondary">收藏</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell class="font-bold">Smartisan T2</TableCell>
                    <TableCell>2015</TableCell>
                    <TableCell>无天线断点全金属中框、电源键集成 Home</TableCell>
                    <TableCell class="text-right"><Badge variant="blue">经典</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell class="font-bold">Nut Pro 2</TableCell>
                    <TableCell>2017</TableCell>
                    <TableCell>隐藏式双摄、隐藏式听筒传感器、金线细红线中框</TableCell>
                    <TableCell class="text-right"><Badge variant="yellow">爆款</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell class="font-bold">Smartisan R2</TableCell>
                    <TableCell>2020</TableCell>
                    <TableCell>纯白光致变色、全焦段四摄、TNT 2.0</TableCell>
                    <TableCell class="text-right"><Badge variant="destructive">旗舰</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <!-- DataTable 封装组件 -->
          <Card>
            <CardHeader>
              <CardTitle>DataTable 拟物数据表格 (带多选、搜索与排序)</CardTitle>
            </CardHeader>
            <CardContent class="p-0">
              <DataTable :columns="tableColumns" :data="tableData" />
            </CardContent>
          </Card>

          <!-- Progress、Spinner 与 Skeleton -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Progress 拟物进度条</CardTitle>
                <CardDescription>内凹轨道配锤子蓝填充。</CardDescription>
              </CardHeader>
              <CardContent class="space-y-4">
                <Progress :model-value="progressVal" />
                <div class="flex items-center justify-between text-[12px] text-[#7f7f7f]">
                  <span>欢喜云同步进度</span>
                  <span class="font-bold text-[#5079d9]">{{ progressVal }}%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Spinner 加载指示器</CardTitle>
                <CardDescription>平滑细腻的高帧率微动。</CardDescription>
              </CardHeader>
              <CardContent class="flex items-center justify-center gap-6 py-4">
                <Spinner :size="20" />
                <Spinner :size="28" />
                <Spinner :size="36" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skeleton 骨架屏</CardTitle>
                <CardDescription>细腻脉冲微光占位。</CardDescription>
              </CardHeader>
              <CardContent class="space-y-2.5">
                <div class="flex items-center gap-3">
                  <Skeleton class="size-10 rounded-full" />
                  <div class="space-y-1.5 flex-1">
                    <Skeleton class="h-4 w-3/4" />
                    <Skeleton class="h-3 w-1/2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <!-- Stepper 步进器与 Pagination 分页 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Stepper 拟物步骤条</CardTitle>
              </CardHeader>
              <CardContent>
                <Stepper v-model="currentStep">
                  <StepperItem :step="1">
                    <StepperTrigger>
                      <StepperIndicator>1</StepperIndicator>
                      <div class="flex flex-col">
                        <StepperTitle>登录欢喜云</StepperTitle>
                        <StepperDescription>验证身份</StepperDescription>
                      </div>
                    </StepperTrigger>
                    <StepperSeparator />
                  </StepperItem>
                  <StepperItem :step="2">
                    <StepperTrigger>
                      <StepperIndicator>2</StepperIndicator>
                      <div class="flex flex-col">
                        <StepperTitle>同步便签</StepperTitle>
                        <StepperDescription>多端流转</StepperDescription>
                      </div>
                    </StepperTrigger>
                    <StepperSeparator />
                  </StepperItem>
                  <StepperItem :step="3">
                    <StepperTrigger>
                      <StepperIndicator>3</StepperIndicator>
                      <div class="flex flex-col">
                        <StepperTitle>开启 TNT</StepperTitle>
                        <StepperDescription>完成配置</StepperDescription>
                      </div>
                    </StepperTrigger>
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

          <!-- Chart 与 CodeBlock -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Chart title="Smartisan UI 规范还原度统计" :data="chartData" type="bar" />
            <Chart title="组件体系分布占比" :data="chartData" type="donut" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>CodeBlock 拟物代码块组件</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock :code="codeSnippet" language="typescript" title="main.ts" />
            </CardContent>
          </Card>
        </TabsContent>

        <!-- ======================= TAB 6: 锤子独家特色 ======================= -->
        <TabsContent value="specialties" class="mt-4 flex flex-col gap-6">
          <!-- 闪念胶囊气泡与 MessageScroller 对话流 -->
          <Card>
            <CardHeader>
              <CardTitle>Bubble 气泡与 MessageScroller 胶囊对话流</CardTitle>
              <CardDescription>
                锤子便签与闪念胶囊的精髓材质：暖黄羊皮纸质感气泡 (#fcf6e6) 与标志性锤子蓝胶囊。
              </CardDescription>
            </CardHeader>
            <CardContent class="flex flex-col gap-6">
              <div class="flex flex-col gap-3">
                <Bubble variant="yellow" timestamp="09:15" author="闪念胶囊">
                  “生来骄傲，做真正打动人心的设计。”
                </Bubble>

                <Bubble variant="blue" align="right" timestamp="09:16" author="我">
                  “已通过 Vue 3 + Tailwind CSS v4 完整构建 Smartisan UI 78款拟物组件库。”
                </Bubble>

                <Bubble variant="white" timestamp="09:17" author="工匠记录">
                  “不仅外观像素级还原，连 64ms 瞬时按压与线性开关位移也悉数复刻。”
                </Bubble>
              </div>

              <Separator />

              <!-- Message & MessageScroller 组件演示 -->
              <div>
                <Typography variant="h4" class="text-[13px] text-[#7f7f7f] mb-3">Message 与 MessageScroller 对话容器</Typography>
                <MessageScroller class="h-44 p-3 bg-[#fafafa] rounded-[8px] border border-[#e2e2e2] space-y-3">
                  <Message sender="老罗" time="10:00" :is-self="false">
                    <template #avatar>
                      <Avatar size="sm" class="bg-[#c83530]">
                        <AvatarFallback class="text-white font-bold">罗</AvatarFallback>
                      </Avatar>
                    </template>
                    我不在乎输赢，我只是认真。
                  </Message>
                  <Message sender="工匠" time="10:02" :is-self="true" status="read">
                    <template #avatar>
                      <Avatar size="sm" class="bg-[#5985eb]">
                        <AvatarFallback class="text-white font-bold">匠</AvatarFallback>
                      </Avatar>
                    </template>
                    78款组件全量覆盖，已彻底告别原生粗糙标签！
                  </Message>
                </MessageScroller>
              </div>
            </CardContent>
          </Card>

          <!-- Attachment、Marker 与 Trace -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Attachment 拟物便签附件</CardTitle>
              </CardHeader>
              <CardContent class="p-4 flex flex-col gap-3">
                <Attachment>
                  <AttachmentItem name="Smartisan_OS_8.0_Design.fig" size="24.8 MB" ext="fig" />
                  <AttachmentItem name="拟物光影着色模型.pdf" size="3.2 MB" ext="pdf" />
                </Attachment>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Marker 荧光笔高亮划线</CardTitle>
              </CardHeader>
              <CardContent class="p-6 space-y-4">
                <p class="leading-loose text-[14px]">
                  我们在这个时代坚持拟物，是因为我们相信：<Marker color="yellow">实体触感与质感</Marker>具有扁平色块永远无法替代的温度。
                  对 0.1 毫米的苛求，正是<Marker color="blue">工匠精神</Marker>的立足之本。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trace 拟物时间轴轨迹</CardTitle>
              </CardHeader>
              <CardContent class="p-6">
                <Trace>
                  <TraceItem title="Smartisan T1 发布" time="2014-05-20" status="success">
                    荣获 iF 国际设计金奖
                  </TraceItem>
                  <TraceItem title="坚果 Pro 细红线特别版" time="2017-05-09" status="success">
                    创下百万台销售奇迹
                  </TraceItem>
                  <TraceItem title="Smartisan UI (Vue 3)" time="2026-10-23" status="active">
                    78款组件全量拟物化重构完成
                  </TraceItem>
                </Trace>
              </CardContent>
            </Card>
          </div>

          <!-- Swipe 向右滑动删除与 Elastic 橡皮筋回弹 -->
          <Card>
            <CardHeader>
              <CardTitle>向右滑动删除 (Swipe Right) 与橡皮筋回弹 (Elastic)</CardTitle>
              <CardDescription>
                锤子 OS 独有交互：列表行向右拖拽滑出删除托盘；列表拉过界限露出竖条纹底纹并带物理阻尼弹性回弹。
              </CardDescription>
            </CardHeader>
            <CardContent class="p-6">
              <Elastic class="h-64 rounded-[8px] border border-[#d8d8d8] shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden">
                <div class="p-3">
                  <div class="rounded-[6px] overflow-hidden border border-[#d8d8d8] bg-white shadow-sm">
                    <Swipe @delete="toast('已向右滑删除项目 1')">
                      <div class="flex items-center gap-3">
                        <Icon name="si-edit" :size="16" class="text-[#5079d9]" />
                        <span class="text-[14px] font-medium text-[#333333]">闪念胶囊草稿 #1 (向右拖拽体验删除)</span>
                      </div>
                      <Badge variant="blue">右滑删除</Badge>
                    </Swipe>

                    <Swipe @delete="toast('已向右滑删除项目 2')">
                      <div class="flex items-center gap-3">
                        <Icon name="si-calendar" :size="16" class="text-[#f5a623]" />
                        <span class="text-[14px] font-medium text-[#333333]">坚果手机发布会纪要 #2 (向右滑动)</span>
                      </div>
                      <Badge variant="yellow">右滑删除</Badge>
                    </Swipe>

                    <Swipe @delete="toast('已向右滑删除项目 3')">
                      <div class="flex items-center gap-3">
                        <Icon name="si-settings" :size="16" class="text-[#d2463c]" />
                        <span class="text-[14px] font-medium text-[#333333]">TNT 大屏触控优化项 #3 (向右滑动)</span>
                      </div>
                      <Badge variant="red">右滑删除</Badge>
                    </Swipe>
                  </div>
                </div>
              </Elastic>
            </CardContent>
          </Card>

          <!-- 拟物滚轮选择器与字母速览条 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Picker 拟物滚轮时钟/日期盘</CardTitle>
                <CardDescription>真实阻尼滚轮、上下渐变遮罩、吸附停留。</CardDescription>
              </CardHeader>
              <CardContent class="flex items-center justify-center p-6 bg-[#fafafa]">
                <Picker>
                  <PickerCol v-model="wheelYear" :options="['2023', '2024', '2025', '2026', '2027']" label="年" />
                  <PickerCol v-model="wheelMonth" :options="['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']" label="月" />
                  <PickerCol v-model="wheelDay" :options="['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15']" label="日" />
                </Picker>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>QuickBar 字母索引条 (当前选择: {{ selectedLetter }})</CardTitle>
                <CardDescription>通讯录右侧快速滑动索引，带震动与放大指示器。</CardDescription>
              </CardHeader>
              <CardContent class="h-64 relative flex items-center justify-between p-4 bg-[#fafafa] rounded-[6px]">
                <div class="flex-1 flex flex-col items-center justify-center">
                  <div class="size-16 rounded-full bg-gradient-to-b from-[#5b87eb] to-[#5883eb] text-white flex items-center justify-center font-bold text-3xl shadow-lg border border-[#3f68e2]">
                    {{ selectedLetter }}
                  </div>
                  <Typography variant="muted" class="text-[12px] text-[#7f7f7f] mt-3">触摸或鼠标滑动右侧字母条</Typography>
                </div>
                <QuickBar @letter="handleLetter" />
              </CardContent>
            </Card>
          </div>

          <!-- Swap 部件分层过渡与问卷卡片 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Swap 拟物部件分层转场</CardTitle>
                <CardDescription>主体面板不动，内部部件按物理时钟依次分层退场与进场。</CardDescription>
              </CardHeader>
              <CardContent class="space-y-4">
                <div class="flex items-center gap-3">
                  <!-- 全部使用 Button 组件，替换原生 button -->
                  <Button size="sm" variant="outline" data-s-show="panel-music">播放器部件</Button>
                  <Button size="sm" variant="outline" data-s-show="panel-weather">天气卡部件</Button>
                  <Button size="sm" variant="outline" data-s-show="panel-clock">时钟部件</Button>
                </div>

                <Swap default-panel="panel-music" class="h-36 bg-[#fafafa] rounded-[8px] border border-[#e2e2e2] p-4">
                  <SwapPanel id="panel-music" class="flex flex-col items-center justify-center h-full text-center">
                    <Icon name="si-play" :size="32" class="text-[#5985eb] mb-1" />
                    <Typography variant="h4" class="text-[14px]">唱机音乐面板</Typography>
                  </SwapPanel>

                  <SwapPanel id="panel-weather" class="flex flex-col items-center justify-center h-full text-center">
                    <Icon name="si-star" :size="32" class="text-amber-500 mb-1" />
                    <Typography variant="h4" class="text-[14px]">晴天微风 24°C</Typography>
                  </SwapPanel>

                  <SwapPanel id="panel-clock" class="flex flex-col items-center justify-center h-full text-center">
                    <Icon name="si-setting" :size="32" class="text-[#7f7f7f] mb-1" />
                    <Typography variant="h4" class="text-[14px]">拟物石英机芯</Typography>
                  </SwapPanel>
                </Swap>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Questionnaire 拟物问卷卡片</CardTitle>
                <CardDescription>用于系统反馈调研与多选投票。</CardDescription>
              </CardHeader>
              <CardContent>
                <Questionnaire
                  v-model="surveyChoice"
                  title="您最欣赏 Smartisan OS 的哪一项特质？"
                >
                  <QuestionnaireOption value="ans-1" label="克制而细腻的拟物光影美学" />
                  <QuestionnaireOption value="ans-2" label="大爆炸、一步、闪念胶囊效率三剑客" />
                  <QuestionnaireOption value="ans-3" label="干脆利落的 64ms 物理按压反馈" />
                </Questionnaire>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  </div>
</template>

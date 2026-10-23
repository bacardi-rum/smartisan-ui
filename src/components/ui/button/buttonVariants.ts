import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center font-bold transition-all select-none disabled:pointer-events-none disabled:opacity-30 active:scale-[0.99] [&.is-pressed]:scale-[0.99] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#93b2f7]',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-b from-[#5b87eb] to-[#5883eb] text-white border border-[#3f68e2] shadow-[0_4px_2px_rgba(0,0,0,0.10)] active:bg-[#4772e6] active:border-[#2f54d7] [&.is-pressed]:bg-[#4772e6] [&.is-pressed]:border-[#2f54d7]',
        sheet: 'bg-white text-[#636363] border border-[#eeeeee] shadow-none active:bg-[#f8f8f8] active:border-[#e2e2e2] [&.is-pressed]:bg-[#f8f8f8] [&.is-pressed]:border-[#e2e2e2]',
        outline: 'bg-transparent text-[#606060] border border-[#d3d3d3] shadow-none active:bg-[#f2f2f2] active:border-[#d3d3d3] [&.is-pressed]:bg-[#f2f2f2] [&.is-pressed]:border-[#d3d3d3]',
        danger: 'bg-gradient-to-b from-[#e66359] to-[#e55f55] text-white border border-[#d2463c] shadow-none active:bg-[#df4f46] active:border-[#c43c33] [&.is-pressed]:bg-[#df4f46] [&.is-pressed]:border-[#c43c33]',
        text: 'bg-transparent text-[#5079d9] font-normal border-none shadow-none p-0 h-auto active:opacity-60 [&.is-pressed]:opacity-60',
        icon: 'bg-[#e7edfd] text-[#5c89f2] border-none shadow-none rounded-[6px] active:brightness-95 [&.is-pressed]:brightness-95',
        round: 'relative rounded-full bg-[#ededed] text-[#929292] border-none p-0 flex items-center justify-center active:brightness-95 [&.is-pressed]:brightness-95',
      },
      size: {
        default: 'h-[60px] px-[22px] min-w-[120px] text-[16px] rounded-[10px]',
        sm: 'h-[30px] px-[12px] min-w-0 text-[14px] rounded-[4px] shadow-none',
        md: 'h-[48px] px-[18px] min-w-[100px] text-[15px] rounded-[8px]',
        lg: 'h-[60px] px-[24px] min-w-[140px] text-[16px] rounded-[10px]',
        icon: 'size-[30px] p-0',
        round: 'size-[80px]',
        'round-sm': 'size-[28px]',
      },
      block: {
        true: 'w-full flex',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      block: false,
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>

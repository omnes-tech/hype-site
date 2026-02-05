
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden backdrop-blur-xl border-2 shadow-2xl",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-white/20 via-white/10 to-white/5 text-white hover:from-white/30 hover:via-white/20 hover:to-white/10 border-white/30 hover:border-white/50 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.2)] hover:scale-105",
        destructive:
          "bg-gradient-to-br from-red-500/30 via-red-600/20 to-red-700/10 text-red-50 hover:from-red-500/40 hover:via-red-600/30 hover:to-red-700/20 border-red-400/40 hover:border-red-400/60 shadow-[0_8px_32px_0_rgba(239,68,68,0.2)] hover:shadow-[0_12px_40px_0_rgba(239,68,68,0.3)]",
        outline:
          "bg-gradient-to-br from-transparent via-white/5 to-white/10 hover:from-white/10 hover:via-white/15 hover:to-white/20 border-white/40 hover:border-white/60 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.15)]",
        secondary:
          "bg-gradient-to-br from-gray-800/50 via-gray-900/30 to-black/20 text-gray-100 hover:from-gray-800/70 hover:via-gray-900/50 hover:to-black/40 border-gray-600/50 hover:border-gray-500/70 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.4)]",
        ghost: "bg-transparent hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/5 border-transparent hover:border-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
        link: "text-primary underline-offset-4 hover:underline bg-transparent border-transparent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "rounded-full font-medium cursor-pointer transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "bg-white hover:bg-black/5 border-[0.9px] border-neutral-200",
        green: "bg-[#93f27e]",
        outline: "border border-neutral-200 hover:bg-black/5",
      },
      size: {
        default: "px-[12px] py-[6px]",
        sm: "px-3 py-1",
        lg: "px-6 py-3",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 
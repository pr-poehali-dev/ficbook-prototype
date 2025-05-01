
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import * as LucideIcons from "lucide-react"

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  fallback?: string
  size?: number
  className?: string
  asChild?: boolean
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ name, fallback = "CircleAlert", size = 24, className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "div"
    
    const IconComponent = LucideIcons[name as keyof typeof LucideIcons] || 
                         LucideIcons[fallback as keyof typeof LucideIcons]
    
    return (
      <Component
        ref={ref}
        className={cn("inline-flex", className)}
        {...props}
      >
        <IconComponent size={size} />
      </Component>
    )
  }
)
Icon.displayName = "Icon"

export default Icon

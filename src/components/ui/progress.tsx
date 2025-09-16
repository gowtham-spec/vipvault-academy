<<<<<<< HEAD
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"
=======
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
<<<<<<< HEAD
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
=======
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
<<<<<<< HEAD
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
=======
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40

<<<<<<< HEAD
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"
=======
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
<<<<<<< HEAD
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
=======
    className={cn("relative flex w-full touch-none select-none items-center", className)}
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
<<<<<<< HEAD
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
=======
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40

<<<<<<< HEAD
import * as React from "react"

import { cn } from "@/lib/utils"
=======
import * as React from "react";

import { cn } from "@/lib/utils";
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
<<<<<<< HEAD
          className
=======
          className,
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40
        )}
        ref={ref}
        {...props}
      />
<<<<<<< HEAD
    )
  }
)
Input.displayName = "Input"

export { Input }
=======
    );
  },
);
Input.displayName = "Input";

export { Input };
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40

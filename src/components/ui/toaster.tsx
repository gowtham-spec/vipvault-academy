<<<<<<< HEAD
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()
=======
import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
<<<<<<< HEAD
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
=======
              {description && <ToastDescription>{description}</ToastDescription>}
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40
            </div>
            {action}
            <ToastClose />
          </Toast>
<<<<<<< HEAD
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
=======
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
>>>>>>> f507ca0f4eef5be4db7aa08fa7a3dbd0b782af40
}

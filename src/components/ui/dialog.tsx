"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import clsx from "clsx";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export function DialogContent({ className, ...props }: DialogPrimitive.DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
      <DialogPrimitive.Content
        className={clsx(
          "fixed left-1/2 top-1/2 max-h-[85vh] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/15 bg-white/95 p-8 shadow-hero focus:outline-none",
          className
        )}
        {...props}
      />
    </DialogPrimitive.Portal>
  );
}


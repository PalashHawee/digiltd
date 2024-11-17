import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "clsx";
import clsx from "clsx"; // Import as default

export const Sheet = ({ children }) => <Dialog.Root>{children}</Dialog.Root>;

export const SheetTrigger = React.forwardRef((props, ref) => (
  <Dialog.Trigger ref={ref} {...props} />
));
SheetTrigger.displayName = "SheetTrigger";

export const SheetContent = React.forwardRef(({ className, ...props }, ref) => (
  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
    <Dialog.Content
      ref={ref}
      className={cn(
        "fixed top-0 left-0 w-3/4 max-w-sm h-full bg-gray-800 shadow-lg p-6 transition-transform transform -translate-x-full",
        className
      )}
      {...props}
    />
  </Dialog.Portal>
));
SheetContent.displayName = "SheetContent";

export const SheetClose = React.forwardRef((props, ref) => (
  <Dialog.Close ref={ref} {...props} />
));
SheetClose.displayName = "SheetClose";

import { useState, useCallback } from "react";

/**
 * Toggle hook
 * @returns
 */
export default function useToggle(value?: boolean) {
  const [open, setOpen] = useState(value);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleToggle = useCallback(() => setOpen((prev) => !prev), []);

  return {
    open,
    handleOpen,
    handleClose,
    handleToggle,
  };
}

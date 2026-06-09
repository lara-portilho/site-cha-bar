import type { Presente } from "@entities/Presente";
import React, { createContext, use, useState } from "react";

type ModalContextProps = {
  presente?: Presente;
  setPresente(presente?: Presente): void;
  open: boolean;
  setOpen(open: boolean): void;
};

const ModalContext = createContext<ModalContextProps | null>(null);

export function ModalProvider({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [presente, setPresente] = useState<Presente | undefined>();

  return (
    <ModalContext value={{ open, setOpen, presente, setPresente }}>
      {children}
    </ModalContext>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useModalContext() {
  const context = use(ModalContext);
  if (!context) {
    throw new Error("ModalContext must be used within a ModalProvider");
  }
  return context;
}

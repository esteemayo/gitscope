'use client';

import { createContext, useContext, useState } from 'react';

type SidebarContextType = {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
  onToggle(): void;
};

const INITIAL_STATE: SidebarContextType = {
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  onToggle: () => {},
};

const SidebarContext = createContext(INITIAL_STATE);

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        onOpen: handleOpen,
        onClose: handleClose,
        onToggle: handleToggle,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

export const useSidebar = () => useContext(SidebarContext);

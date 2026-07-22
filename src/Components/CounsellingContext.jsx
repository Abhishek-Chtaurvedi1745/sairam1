import React, { createContext, useContext, useEffect, useState } from "react";

const CounsellingContext = createContext(null);

export function CounsellingProvider({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  return (
    <CounsellingContext.Provider value={{ open, openPopup, closePopup }}>
      {children}
    </CounsellingContext.Provider>
  );
}

export function useCounselling() {
  const context = useContext(CounsellingContext);
  if (!context) {
    throw new Error("useCounselling must be used within CounsellingProvider");
  }
  return context;
}

"use client";
import { createContext, useState, useContext, ReactNode } from "react";

// Define the context shape
interface TotalUsageContextType {
  totalUsage: number;
  setTotalUsage: (usage: number) => void;
}

// Create the context with default values
export const TotalUsageContext = createContext<TotalUsageContextType>({
  totalUsage: 0,
  setTotalUsage: () => {},
});

// Provider component
export function TotalUsageProvider({ children }: { children: ReactNode }) {
  const [totalUsage, setTotalUsage] = useState<number>(0);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      {children}
    </TotalUsageContext.Provider>
  );
}

// Custom hook to use the context
export const useTotalUsage = () => useContext(TotalUsageContext);
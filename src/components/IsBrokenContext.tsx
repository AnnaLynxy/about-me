import React, { createContext, useContext, useState, ReactNode } from "react";

interface IsBrokenContextType {
  isBroken: boolean;
  toggleIsBroken: () => void;
}

const IsBrokenContext = createContext<IsBrokenContextType | undefined>(
  undefined
);

export const useIsBroken = (): IsBrokenContextType => {
  const context = useContext(IsBrokenContext);

  return context;
};

interface IsBrokenProviderProps {
  children: ReactNode;
}

export const IsBrokenProvider: React.FC<IsBrokenProviderProps> = ({
  children,
}) => {
  const [isBroken, setIsBroken] = useState<boolean>(true);

  const toggleIsBroken = () => {
    setIsBroken((prev) => !prev);
  };

  return (
    <IsBrokenContext.Provider value={{ isBroken, toggleIsBroken }}>
      {children}
    </IsBrokenContext.Provider>
  );
};

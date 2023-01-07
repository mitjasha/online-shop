import { createContext, useContext } from "react";

export type AppContextType = {
  currentCartState: { [key: string]: number }[];
  setCurrentCartState: (value: { [key: string]: number }[]) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => useContext(AppContext);
export default AppContext;

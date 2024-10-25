import { createContext, ReactNode, Dispatch, SetStateAction } from "react";

export type TabContextTypes = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

const SidebarDefaultValues = {
  value: 0,
  setValue: () => null,
};

export interface IProps {
  children?: ReactNode;
  value: TabContextTypes;
}

export const TabContext = createContext<TabContextTypes>(SidebarDefaultValues);

export default function SidebarProvider({ children, value }: IProps) {
  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
}

import { Box } from "@mui/material";
import { useState, createContext, ReactNode } from "react";

export interface IProps {
  children?: ReactNode;
}

export const MenuContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([
  true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  bool => {},
]);

export default function SidebarProvider({ children }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <MenuContext.Provider value={[open, setOpen]}>
      <Box display="flex">{children}</Box>
    </MenuContext.Provider>
  );
}

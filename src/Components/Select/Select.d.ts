import { type Control } from "react-hook-form";
import { SelectProps } from "@mui/material";

interface SelectPropsTypes {
  name: string;
  control: Control<any>;
  label?: string;
  width?: string;
  placeholder?: string;
  createButton?: { label: string; onClick?: () => void };
  options: {
    label: string;
    value: any;
    disabled?: boolean;
    onClick?: () => void;
  }[];
}

export type SelectPropsType = SelectPropsTypes & Omit<SelectProps, "name" | "label">;

import { type Control } from "react-hook-form";
import { type TextFieldProps } from "@mui/material";

interface InputPropsTypes {
  name: string;
  control: Control<any>;
  label?: string;
  disableHelperText?: boolean;
}

export type InputPropsType = InputPropsTypes & Omit<TextFieldProps, "name" | "label">;

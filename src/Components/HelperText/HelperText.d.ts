import { FieldError } from "react-hook-form";
import { type BoxTypeMap } from "@mui/material";

type HelperTextBoxProps = BoxTypeMap["props"];

export interface HelperTextPropsType extends HelperTextBoxProps {
  message?: string;
  error?: FieldError | Merge<FieldError, unknown>;
}

import { memo, type FC } from "react";
import { Box, TextField as MUITextField, styled, Typography, useTheme } from "@mui/material";
import { Controller } from "react-hook-form";
import { type InputPropsType } from "./Input";
import HelperText from "Components/HelperText/HelperText.component";

/**
 * declare New Input Component here
 * @author Mohammad Saeed Kazemi
 * @since 2023-06-21
 */

const Input: FC<InputPropsType> = props => {
  const {
    name,
    control,
    label,
    helperText,
    disableHelperText = false,
    sx,
    onChange: customOnChange,
    required = false,
    ...rest
  } = props;
  const theme = useTheme();

  const CustomInput = styled(MUITextField)(({ theme }) => ({
    "& .MuiInputBase-root": {
      fontSize: "16px",
      lineHeight: "32px",
      cursor: "pointer",
      ...(rest?.disabled && { background: theme.palette.grey[300] }),
      borderRadius: "6px",
      padding: "0px",
      transition: "all 0.2s",
      position: "relative",
      "& fieldset": {
        border: "none",
      },
      "& .MuiInputAdornment-root": {
        "& .MuiButtonBase-root": {
          "& span": {
            fontSize: "1.33rem !important",
          },
        },
      },
      "& input": {
        padding: "6px 10.5px 6px 12px",
        display: "flex",
        alignItems: "center",
        WebkitTextFillColor: rest.disabled
          ? theme.palette.grey[500]
          : theme.palette.mode === "dark"
          ? theme.palette.primary.contrastText
          : theme.palette.grey[800],
      },
    },
    "& .MuiFormHelperText-root": {
      fontSize: "14px",
      marginLeft: 0,
    },
  }));
  // !TODO: InputLabel must be in the Controller
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        ...sx,
      }}
    >
      {label && (
        <Typography component="label" variant="body1" htmlFor={label}>
          {label}
          {required ? <span style={{ color: "red", padding: "4px" }}>*</span> : null}
        </Typography>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value }, fieldState: { error, isDirty } }) => (
          <CustomInput
            value={value}
            onChange={event => {
              onChange(event);
              customOnChange && customOnChange(event);
            }}
            size="small"
            onBlur={onBlur}
            helperText={
              !disableHelperText &&
              (error || helperText) && (
                <HelperText
                  error={error}
                  message={helperText?.toString()}
                />
              )
            }
            sx={{
              "& .MuiInputBase-root": {
                border: `1px solid ${
                  !isDirty ? theme.palette.grey[400] : error ? "red" : "green"
                }`,
                "&:not(.Mui-disabled)": {
                  "&:hover": {
                    boxShadow: `${
                      !isDirty ? theme.palette.grey[400] : error ? "red" : "green"
                    } 0px 0px 0px 3px`,
                  },
                },
              },
            }}
            id={label}
            {...rest}
          />
        )}
      />
    </Box>
  );
};

export default memo(Input);

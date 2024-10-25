import { memo, type FC } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select as MUISelect, styled, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { type SelectPropsType } from "./Select";

const Select: FC<SelectPropsType> = props => {
  const { name, control, label, width, options, createButton, placeholder, ...rest } = props;

  const CustomSelect = styled(MUISelect)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: "6px",
    cursor: "pointer",
    padding: "0 12px",
    minWidth: "180px",
    maxWidth: "100%",
    minHeight: "34px",
    transition: "all .2s",
    "&.Mui-focused": {
      border: "1px solid green",
      "&::after": {
        content: "''",
        width: "100%",
        height: "100%",
        outline: "4px solid green",
        position: "absolute",
        right: "0",
        display: "flex",
        top: "0",
        borderRadius: "6px",
        opacity: ".4",
        boxSizing: "border-box",
        transition: "all .2s",
        zIndex: -1,
      },
    },
    ".MuiSelect-nativeInput": {
      height: "100%",
    },
    ".MuiSelect-select": {
      paddingTop: "0px !important",
      paddingBottom: "0px !important",
      paddingLeft: "0px",
      paddingRight: "16px",
      textAlign: "initial",
    },
    "&:hover": {
      border: !rest?.disabled ? `1px solid green` : `1px solid ${theme.palette.grey[300]}`,
    },
    "& fieldset": {
      border: "none",
      "& legend": {
        display: "none",
      },
    },
  }));

  return (
    <Box sx={{ minWidth: 180, zIndex: 100 }}>
      {label && (
        <InputLabel sx={{ color: theme => theme.palette.grey[800], fontWeight: "700" }} htmlFor={label}>
          {label}
        </InputLabel>
      )}
      <FormControl sx={{ minWidth: "inherit", width: width }}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value }, formState: { defaultValues } }) => (
            <>
              {options.find(opt => opt.value === value && value !== -1) ? null : (
                <InputLabel
                  id={String(value)}
                  sx={{ transform: "translate(14px, 8px) scale(1)", fontSize: "14px" }}
                  shrink={false}
                >
                  {placeholder}
                </InputLabel>
              )}
              <CustomSelect
                labelId={String(value)}
                value={value}
                defaultValue={defaultValues}
                size="small"
                onBlur={onBlur}
                id={label}
                {...rest}
                onChange={event => {
                  onChange(event);
                  rest?.onChange?.(event, undefined);
                }}
              >
                {createButton ? (
                  <MenuItem>
                    <Button
                      children={createButton.label}
                      size="small"
                      color="primary"
                      onClick={createButton.onClick}
                    />
                  </MenuItem>
                ) : null}

                {options.map(opt => (
                  <MenuItem
                    key={opt.value}
                    value={opt.value}
                    onClick={opt.onClick}
                    disabled={opt.disabled}
                    sx={
                      opt.value === -1
                        ? {
                            display: "none",
                            height: "0",
                            width: "0",
                          }
                        : {
                            margin: "4px !important",
                            border: theme => `1px solid ${theme.palette.action.hover}`,
                            "&: hover": {
                              backgroundColor: theme => `${theme.palette.action.hover} !important`,
                            },
                          }
                    }
                  >
                    <Box display="flex" alignItems="center" gap="3%">
                      <Typography variant="body1">{opt.label}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </CustomSelect>
            </>
          )}
        />
      </FormControl>
    </Box>
  );
};

export default memo(Select);

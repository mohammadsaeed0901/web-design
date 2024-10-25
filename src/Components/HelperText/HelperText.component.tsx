import { memo, type FC } from "react";
import { Box } from "@mui/material";

import { type HelperTextPropsType } from "./HelperText";

const HelperText: FC<HelperTextPropsType> = props => {
  const { error, message, ...rest } = props;

  return (
    <Box
      component={"span"}
      sx={{
        display: message || error?.message ? "flex" : "none",
        alignItems: "flex-start",
        gap: 0.5,
        ...(error?.message && { color: "red" }),
        fontSize: "12px",
      }}
      {...rest}
    >
      {error ? <></> : <></>}
      {error ? error.message : message}
    </Box>
  );
};
export default memo(HelperText);

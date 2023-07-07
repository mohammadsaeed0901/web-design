import { Box, CircularProgress } from "@mui/material";

import type { FC } from "react";

interface LoadingPropTypes {
    width?: number;
    height?: number;
  }

const Loading: FC<LoadingPropTypes> = props => {
  const { width = "100%", height = "100%" } = props;
  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height, width }}>
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Loading;
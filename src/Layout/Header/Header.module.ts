import { Theme } from "@mui/material";

export const getStyles = (theme: Theme) => {
    return {
        iconContainer: {
            display: "flex",
            alignItems: "center",
            gap: 2,
          },
          profileMenucontainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "160px",
            outline: "none",
          },
          profileMenuButton: {
            padding: 1,
            display: "flex",
            justifyContent: "flex-end",
            boxSizing: "border-box",
            color: theme.palette.grey[600],
            fontWeight: 700,
          },
    };
  };
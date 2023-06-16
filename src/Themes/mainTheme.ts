import { createTheme } from "@mui/material/styles";

export const mainTheme = (mode: "light" | "dark") =>
  createTheme({
    direction: "rtl",
    palette: {
      mode: mode,
      primary: {
        100: "#E1F1FF",
        200: "#C7E4FF",
        300: "#99CFFF",
        400: "#71BCFF",
        500: "#48A8FF",
        600: "#2497FF",
        700: "#1780E0",
        800: "#1369B7",
        main: "#0C4F8C",
        contrastText: "#FFFFFF",
        dark: "#000000",
      },
      secondary: {
        100: "#FFF0E1",
        200: "#FFE2C0",
        300: "#FFCF9F",
        400: "#FFA852",
        500: "#ED8B2B",
        600: "#C66D1E",
        700: "#B25212",
        800: "#FF962E",
        main: "#7F3B0D",
      },
      warning: {
        100: "#FFF8E1",
        200: "#FFF0C2",
        300: "#FFE49F",
        400: "#FFD552",
        500: "#F4C031",
        600: "#D19A20",
        700: "#AD7112",
        main: "#7A520C",
      },
      error: {
        100: "#FFE1E9",
        200: "#FFC2D1",
        300: "#FF9FB8",
        400: "#FF527B",
        500: "#F43164",
        600: "#C61E4B",
        700: "#A5113C",
        main: "#7A0C2C",
      },
      info: {
        100: "#E1F9FF",
        200: "#C2F0FF",
        300: "#9FEDFF",
        400: "#52D4FF",
        500: "#26C5EA",
        600: "#18A5C6",
        700: "#1188A3",
        main: "#0D6A7F",
      },
      success: {
        100: "#DCF9F4",
        200: "#BDF9EF",
        300: "#95EFE0",
        400: "#38E0C4",
        500: "#14C1A3",
        600: "#089E85",
        700: "#067F6B",
        main: "#056051",
      },
      grey: {
        100: "#F2F3F4",
        200: "#E6EAED",
        300: "#D0D4D8",
        400: "#A9B1B7",
        500: "#707B84",
        600: "#3E454C",
        700: "#2E353A",
        800: "#171B1E",
        900: "#090B0C",
      },
    },
    typography: {
      fontFamily: "IRANYekan , IRANYekanEn, Arial",
      h1: {
        fontSize: "40px",
        fontWeight: "700",
        lineHeight: "60px",
      },
      h2: {
        fontSize: "32px",
        fontWeight: "700",
        lineHeight: "48px",
      },
      h3: {
        fontSize: "28px",
        fontWeight: "700",
        lineHeight: "42px",
      },
      h4: {
        fontSize: "24px",
        fontWeight: "700",
        lineHeight: "36px",
      },
      h5: {
        fontSize: "20px",
        fontWeight: "700",
        lineHeight: "30px",
      },
      h6: {
        fontSize: "18px",
        fontWeight: "700",
        lineHeight: "36px",
      },
      body1: {
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "32px",
      },
      overline: {
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "32px",
      },
      caption: {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px",
      },
      body2: {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "28px",
      },
      subtitle1: {
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: "24px",
      },
      subtitle2: {
        fontSize: "10px",
        fontWeight: "400",
        lineHeight: "20px",
      },
    },
    components: {
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            fontFamily: "IRANYekanFaNum",
            "&:hover": {
              color: "#2497FF",
              backgroundColor: "rgba(39, 153, 255, 0.08)",
            },
            "&.Mui-selected": {
              backgroundColor: "#2497FF",
              border: "0px",
              color: "#fff",
              "&:hover": {
                color: "#2497FF",
                border: "0px",
              },
            },
            "&:active": {
              color: "#fff",
              border: "4px solid rgba(39, 153, 255, 0.16)",
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            ".MuiButton-startIcon": {
              marginLeft: "8px",
            },
            ".MuiButton-endIcon": {
              marginRight: "8px",
            },
          },
        },
      },
      MuiMenuItem: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiTypography: {
        defaultProps: {
          textTransform: "none",
        },
      },
      MuiSelect: {
        styleOverrides: {
          outlined: {
            paddingTop: "3px",
            paddingBottom: "3px",
            "::after": {
              border: "none",
            },
          },
        },
      },
    },
  });

export const getStyles = () => {
    return {
        box: {
            background: "#f8f8f8",
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        container: {
            display: "flex",
            width: "900px",
            background: "#fff",
            padding: "3rem 2rem",
            margin: "0 auto",
            boxShadow: "0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05)",
            "-moz-box-shadow": "0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05)",
            "-webkit-box-shadow": "0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05)",
            "-o-box-shadow": "0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05)",
            "-ms-box-shadow": "0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05)",
            borderRadius: "20px",
            "-moz-border-radius": "20px",
            "-webkit-border-radius": "20px",
            "-o-border-radius": "20px",
            "-ms-border-radius": "20px",
        },
        select: {
            fontFamily: "inherit",
            "& .MuiInputBase-input": {
                paddingY: "3px",
            },
        },
    };
  };
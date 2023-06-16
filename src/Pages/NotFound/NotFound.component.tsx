import { Box } from "@mui/material";
import { FC } from "react";

const NotFound: FC = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box component="img" src={require("../../Assets/images/404-Error.jpg")} alt="404 Not Found" height={"73vh"}  />
        </Box>
    );
};

export default NotFound;
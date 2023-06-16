import { Box, Button, Typography, Link } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FC, useState } from "react";
import { getStyles } from "./Login.module";

const Login: FC = () => {
    const [identifier, setIdentifier] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const classes = getStyles();

    const handleIndentifier = (e: any) => {
        setIdentifier(e.target.value);
    };
    
    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (password !== "" && identifier !== "") {
            window.localStorage.setItem("refreshtoken", identifier);
            window.location.assign("../");
        }
    };

    return (
        <Box sx={classes.box}>
            <Box sx={classes.container}>
                <Box width="50%">
                    <img src={require("../../Assets/images/signin-image.jpg")} alt="login picture" width="100%" height="100%" />
                </Box>
                <Box sx={{ display: "flex", direction: "rtl", width: "50%", flexDirection: "column", gap: 2 }}>
                    <Typography variant="h4" sx={{ fontFamily: "inherit" }}>
                        ورود
                    </Typography>
                    <TextField value={identifier} onChange={handleIndentifier} type={"email" || "text"} placeholder="ایمیل / شماره تلفن ..." />
                    <TextField value={password} onChange={handlePassword} type="password" placeholder="رمز عبور ..." />
                    <Link href="#" underline="none">
                        رمز خود را فراموش کرده اید؟
                    </Link>
                    <Link href="../register" underline="none">
                        ایجاد حساب کاربری جدید
                    </Link>
                    <Button variant="contained" color="primary" sx={{ borderRadius: "1rem", fontFamily:"inherit", width: "fit-content", alignSelf: "flex-end",
                            boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)!important" }} onClick={handleLogin} disableElevation disableRipple>
                        ورود
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
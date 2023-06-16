import { Box, Button, Typography, Link } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FC, useState } from "react";
import { getStyles } from "../Login/Login.module";

const Register: FC = () => {
    const classes = getStyles();
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleEmail = (e: any) => {
        setEmail(e.target.value);
    }

    const handleIndentifier = (e: any) => {
        setPhoneNumber(e.target.value);
    };
    
    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    };

    const handleConfirmPassword =(e: any) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <Box sx={classes.box}>
            <Box sx={classes.container}>
                <Box width="50%">
                    <img src={require("../../Assets/images/signup-image.jpg")} alt="login picture" width="100%" height="100%" />
                </Box>
                <Box sx={{ display: "flex", direction: "rtl", width: "50%", flexDirection: "column", gap: 2 }}>
                    <Typography variant="h4" sx={{ fontFamily: "inherit" }}>
                        ثبت نام
                    </Typography>
                    <TextField value={phoneNumber} onChange={handleIndentifier} type="text" placeholder="شماره همراه خود را وارد کنید" />
                    <TextField value={email} onChange={handleEmail} type="email" placeholder="ایمیل خود را وارد کنید" />
                    <TextField value={password} onChange={handlePassword} type="password" placeholder="رمز عبور خود را وارد کنید" />
                    {/* <Typography variant="subtitle1" sx={{ fontFamily: "inherit" }}>
                        رمز عبور باید حداقل شامل ۸ کارکتر باشد
                    </Typography> */}
                    <TextField value={confirmPassword} onChange={handleConfirmPassword} type="password" placeholder="تکرار رمز عبور خود را وارد کنید" />
                    <Link href="../login" underline="none">
                        ورود به حساب کاربری
                    </Link>
                    <Button variant="contained" color="primary" sx={{ borderRadius: "1rem", fontFamily:"inherit", width: "fit-content", alignSelf: "flex-end",
                            boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)!important" }} disableElevation disableRipple>
                        ثبت اطلاعات
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Register;
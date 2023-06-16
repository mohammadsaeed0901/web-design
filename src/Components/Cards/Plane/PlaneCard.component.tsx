import { Button, Box, Typography, useTheme, Chip } from "@mui/material";
import { priceSeparator, toPersianDigit } from "Helpers/Utils";

import type { FC } from "react";
import type { PlaneCardPropsType } from "./PlaneCard";
import { ArrowLeftIcon } from "Assets/Svg";

const PlaneCard: FC<PlaneCardPropsType> = (props) => {
    const { totalPrice, detail, from, to, onClick } = props
    const theme = useTheme();

    return (
        <Box sx={{ display: "flex", borderRadius: "8px", border: "2px solid #f7f7f7", width: "60%", direction: "rtl" }}>
            <Box sx={{ display: "flex" , flex: 1, padding: "16px 24px", gap: 3 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: "center" }}>
                    <Box component="img" src={detail?.logo} alt="logo" sx={{ width: "50px", height: "50px", border: "2px solid #f7f7f7", borderRadius: "50%" }} />
                    <Typography variant="body2">
                        {detail?.name}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                        {detail?.sys && <Chip label={detail?.sys} size="small" variant="outlined" color="default" />}
                        {detail?.eco && <Chip label={detail?.eco} size="small" variant="outlined" color="default" />}
                        {detail?.type && <Chip label={detail?.type} size="small" variant="outlined" color="default" />}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Typography variant="body2">
                                مبدأ:
                            </Typography>
                            <Typography variant="body1">
                                {from?.city}
                            </Typography>
                            <Typography variant="h6">
                                {toPersianDigit(from?.hour)}
                            </Typography>
                        </Box>
                        <ArrowLeftIcon viewBox="0 0 16 16" style={{ fontSize: "1rem" }} />
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Typography variant="body2">
                                مقصد:
                            </Typography>
                            <Typography variant="body1">
                                {to?.city}
                            </Typography>
                            <Typography variant="h6">
                                {toPersianDigit(to?.hour)}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "16px 24px", borderRight: "2px solid #f7f7f7", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="h5" color={theme.palette.primary.main}>
                        {toPersianDigit(priceSeparator(totalPrice))}
                    </Typography>
                    <Typography variant="subtitle1">
                        ریال
                    </Typography>
                </Box>
                <Button variant="contained" onClick={onClick}>
                    انتخاب پرواز
                </Button>
            </Box>
        </Box>
    );
};

export default PlaneCard;
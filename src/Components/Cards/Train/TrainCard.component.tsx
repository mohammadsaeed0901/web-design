import { Button, Box, Typography, useTheme, Chip } from "@mui/material";
import { priceSeparator, toPersianDigit } from "Helpers/Utils";
import { ArrowLeftIcon } from "Assets/Svg";

import type { FC } from "react";
import type { TrainCardPropsType } from "./TrainCard";

const TrainCard: FC<TrainCardPropsType> = (props) => {
    const { totalPrice, detail, from, to, remaining ,onClick } = props
    const theme = useTheme();

    return (
        <Box sx={{ display: "flex", borderRadius: "8px", border: "2px solid #f7f7f7", width: "100%", direction: "rtl" }}>
            <Box sx={{ display: "flex" , flex: 1, padding: "16px 24px", gap: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box component="img" src={detail?.logo} alt="logo" sx={{ width: "50px", height: "50px", border: "2px solid #f7f7f7", borderRadius: "50%" }} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <Chip label={detail?.type} size="small" variant="outlined" color="default" />
                        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                            <Typography variant="body1">
                                {detail?.name}
                            </Typography>
                            .
                            <Typography variant="body1">
                                {detail?.company}
                            </Typography>
                        </Box>
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
                    انتخاب قطار
                </Button>
                {remaining && (
                <Typography variant="subtitle1" color={theme.palette.error.main}>
                    {toPersianDigit(remaining)} صندلی باقی مانده
                </Typography>
                )}
            </Box>
        </Box>
    );
};

export default TrainCard;
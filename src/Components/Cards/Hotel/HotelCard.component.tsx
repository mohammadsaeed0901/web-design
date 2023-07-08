import { Button, Box, Typography, useTheme } from "@mui/material";
import { StarFillIcon } from "Assets/Svg";
import { priceSeparator, toPersianDigit } from "Helpers/Utils";
import { FC } from "react";

interface CardProps {
    name: string;
    imageSrc: string;
    address: string;
    stars: number;
    totalPrice: number;
    selectedDays: number;
    onClick?: () => void;
}

const HotelCard: FC<CardProps> = (props) => {
    const { name, imageSrc, stars, totalPrice, selectedDays, address, onClick } = props
    const theme = useTheme();

    return (
        <Box sx={{ display: "flex", borderRadius: "8px", border: "2px solid #f7f7f7", width: "100%", direction: "rtl" }}>
            <img src={imageSrc} alt="hotel" width="30%" height="200px" style={{ objectFit: "cover", borderRadius: "0 8px 8px 0" }} />
            <Box sx={{ display: "flex" , flex: 1, padding: "8px 16px", flexDirection: "column", gap: 1, justifyContent: "center" }}>
                <Typography variant="h5">{name}</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <StarFillIcon viewBox="0 0 16 16" style={{ fontSize: "0.9rem" }} />
                    <Typography variant="subtitle1">
                        {toPersianDigit(stars)} ستاره
                    </Typography>
                    .
                    <Typography variant="subtitle1">
                        هتل
                    </Typography>
                </Box>
                <Typography variant="body2">
                    {address}
                </Typography>
            </Box>
            <Box sx={{ display: "flex", padding: "8px 16px", borderRight: "2px solid #f7f7f7", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="h5" color={theme.palette.primary.main}>
                        {toPersianDigit(priceSeparator(totalPrice))}
                    </Typography>
                    <Typography variant="subtitle1">
                        ریال
                    </Typography>
                </Box>
                <Button variant="contained" onClick={onClick}>
                    مشاهده و رزرو
                </Button>
                <Typography variant="subtitle1">
                    قیمت برای {toPersianDigit(selectedDays)} شب
                </Typography>
            </Box>
        </Box>
    );
};

export default HotelCard;
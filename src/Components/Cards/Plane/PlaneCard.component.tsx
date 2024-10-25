import { Button, Box, Typography, useTheme, Chip, Divider } from "@mui/material";
import { priceSeparator, toPersianDigit } from "Helpers/Utils";

import type { FC } from "react";
import { AirplaneClassTypeTrans, AirplaneTicketTypeTrans, AirplaneTypeTrans, type PlaneCardPropsType } from "./PlaneCard.d";
import { FlightTakeoffRounded, HomeRounded } from "@mui/icons-material";
import { CalculateDepartureAndArrivalTime } from "Helpers/FlightUtils";

const PlaneCard: FC<PlaneCardPropsType> = ({ flight, cities, onClick }) => {
    const { airline, airplaneClassType, airplaneTicketType, airplaneType, departureTime, destinationCityId, journeyDurationPerMinute, logoBase64, originCityId, totalPrice, remainingSeatsNo } = flight;
    const theme = useTheme();

    const { formattedDepartureTime, formattedArrivalTime } = CalculateDepartureAndArrivalTime(departureTime, journeyDurationPerMinute);

    return (
        <Box sx={{ display: "flex", borderRadius: "8px", border: "2px solid #f7f7f7", width: "100%", direction: "rtl" }}>
            <Box sx={{ display: "flex" , flex: 1, padding: "16px 24px", gap: 3 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: "center" }}>
                    <Box component="img" src={logoBase64} alt="logo" sx={{ width: "50px", height: "50px", border: "2px solid #f7f7f7", borderRadius: "50%" }} />
                    <Typography variant="body2">
                        {airline}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                        {airplaneTicketType && <Chip label={AirplaneTicketTypeTrans[airplaneTicketType]} size="small" variant="outlined" color="default" />}
                        {airplaneClassType && <Chip label={AirplaneClassTypeTrans[airplaneClassType]} size="small" variant="outlined" color="default" />}
                        {airplaneType && <Chip label={AirplaneTypeTrans[airplaneType]} size="small" variant="outlined" color="default" />}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexDirection: "column" }}>
                            <Typography variant="body1">
                                {cities.find(ct => ct.id === originCityId)?.faDisplayName}
                            </Typography>
                            <Typography variant="h6">
                                {toPersianDigit(formattedDepartureTime)}
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", width: "50%" }}>
                            <FlightTakeoffRounded />
                            <Box sx={{ flexGrow: 1, position: 'relative' }}>
                                <Divider sx={{ position: 'absolute', width: '100%', top: '50%' }} />
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        position: 'absolute',
                                        top: '-8px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: 'white',
                                        px: 0.5,
                                    }}
                                >
                                    {Math.floor(journeyDurationPerMinute / 60)}ساعت {journeyDurationPerMinute % 60}دقیقه
                                </Typography>
                            </Box>
                            <HomeRounded />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexDirection: "column" }}>
                            <Typography variant="body1">
                                {cities.find(ct => ct.id === destinationCityId)?.faDisplayName}
                            </Typography>
                            <Typography variant="h6">
                                {toPersianDigit(formattedArrivalTime)}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex", padding: "16px 24px", borderRight: "2px solid #f7f7f7", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="h5" color={theme.palette.primary.main}>
                        {toPersianDigit(priceSeparator(+totalPrice))}
                    </Typography>
                    <Typography variant="subtitle1">
                        ریال
                    </Typography>
                </Box>
                <Button variant="contained" onClick={onClick}>
                    انتخاب پرواز
                </Button>
                {remainingSeatsNo <= 10 && (
                    <Typography variant="subtitle1" color={theme.palette.error.main}>
                        {toPersianDigit(remainingSeatsNo)} صندلی باقی مانده
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default PlaneCard;
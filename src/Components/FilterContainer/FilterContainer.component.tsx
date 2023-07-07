import { Box, Button, Divider, FormControl, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Cities } from "Pages/Dashboard/Dashboard.module";
import { type FC } from "react";
import { FilterContainerPropTypes } from "./FilterContainer";

const PlanesList: FC<FilterContainerPropTypes> = (props) => {
  const { type, booking, setBooking } = props;
    const classes = {
        box: {
            display: "flex",
            padding: "1rem 2rem",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            direction: "rtl", 
            backgroundColor: "#f7f7f7", 
            gap: 2,
        },
        input: {
            minWidth: "100%",
            height: "55px",
          },
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "30%", padding: "24px 16px", border: "3px solid #f7f7f7", borderRadius: "8px", gap: 2, height: "fit-content" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>
                مبدا (شهر)
            </Typography>
            <FormControl>
                <Select
                    labelId="origin-city"
                    id="origin-city-id"
                    value={booking?.origin}
                    sx={classes.input}
                    MenuProps={{
                    PaperProps: {
                        sx: {
                        maxHeight: "300px",
                        direction: "rtl",
                        },
                    },
                    }}
                    onChange={e => setBooking(prevState => ({ ...prevState, origin: e.target.value}))}
                >
                    {Cities.map((city) => (
                    <MenuItem value={city.value}>{city.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>
                مقصد (شهر)
            </Typography>
            <FormControl>
                <Select
                labelId="origin-city"
                id="origin-city-id"
                value={booking?.destination} 
                sx={classes.input}
                MenuProps={{
                    PaperProps: {
                    sx: {
                        maxHeight: "300px",
                        direction: "rtl",
                    },
                    },
                }}
                onChange={e => setBooking(prevState => ({ ...prevState, destination: e.target.value}))}
                >
                {Cities.map((city) => (
                    <MenuItem value={city.value}>{city.label}</MenuItem>
                ))}
                </Select>
            </FormControl>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>
                تاریخ رفت
            </Typography>
            <TextField type="date" value={booking?.checkIn} onChange={e => setBooking(prevState => ({ ...prevState, checkIn: e.target.value}))} sx={classes.input} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>
                تاریخ برگشت
            </Typography>
            <TextField type="date" value={booking?.checkOut} onChange={e => setBooking(prevState => ({ ...prevState, checkOut: e.target.value}))} sx={classes.input} />
          </Box>
          <Divider />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>
                تعداد مسافران
            </Typography>
            <TextField type="number" value={booking?.passengersNo} onChange={e => setBooking(prevState => ({ ...prevState, passengersNo: +e.target.value}))} sx={classes.input} />
          </Box>
          <Button variant="contained" color="warning" onClick={() => console.log(booking)}>
            جستجو
          </Button>
        </Box>
    );
};

export default PlanesList;
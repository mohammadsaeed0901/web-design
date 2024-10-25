import { Box, Button, FormControl, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { PlaneIcon, UserGroupIcon } from "Assets/Svg";
import { AirplaneClassTypeTrans, AirplaneTicketTypeTrans, AirplaneTypeTrans } from "Components/Cards/Plane/PlaneCard.d";
import { CalculateDepartureAndArrivalTime } from "Helpers/FlightUtils";
import { priceSeparator, toPersianDigit } from "Helpers/Utils";
import { type ICity } from "Interfaces/City.interface";
import { type IFlight } from "Interfaces/Flight.interface";
import axios from "axios";
import { useState, type FC, useEffect } from "react";
import { useParams } from "react-router-dom";

const PlaneReserve: FC = () => {
  const { id } = useParams();
  const theme = useTheme();
  const [cities, setCities] = useState<ICity[]>([]);
  const [flight, setFlight] = useState<IFlight>();
  const [name, setName]= useState<string>("");
  const [lastName, setLastName]= useState<string>("");
  const [gender, setGender]= useState<string>("");
  const [nationalCode, setNationalCode]= useState<string>("");
  const [birthDate, setBirthDate]= useState<string>("");

  
  
  const fetchFlight = async (flightId: string | undefined) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/flights/${flightId}`);
      setFlight(response.data);
    } catch (error) {
      console.error('Error fetching flight:', error);
    }
  };
  
  useEffect(() => {
    fetchFlight(id);
    axios.get(`http://localhost:5000/api/cities`).then((response) => {
      setCities(response.data);
    });
  }, [id]);
  
  const { formattedDepartureTime, formattedArrivalTime } = CalculateDepartureAndArrivalTime(flight?.departureTime as string, flight?.journeyDurationPerMinute as number);

    const classes = {
      box: {
        display: "flex",
        padding: "1rem 2rem",
        flexDirection: "column",
        justifyContent: "center",
        direction: "rtl", 
        border: "2px solid #f7f7f7", 
        borderRadius: "8px",
        gap: 2,
        ":not(:last-child)": {
          marginBottom: "32px",
        },
      },
      inputBox: {
        display: "flex", 
        flexDirection: "column",
      },
      input: {
        minWidth: "250px",
        width: "100%",
        height: "55px",
      },
    };

    return (
      <>
        <Box sx={classes.box}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PlaneIcon />
            <Typography variant="h5">
              مشخصات پرواز
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", width: "50%", flexDirection: "column" }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography>
                  مبدا:
                </Typography>
                <Typography>
                  {cities.find((ct) => ct.id === flight?.originCityId)?.faDisplayName}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography>
                  مقصد:
                </Typography>
                <Typography>
                  {cities.find((ct) => ct.id === flight?.destinationCityId)?.faDisplayName}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography>
                  تاریخ رفت:
                </Typography>
                <Typography>
                  {toPersianDigit(formattedDepartureTime)}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography>
                  رسیدن به مقصد:
                </Typography>
                <Typography>
                  {toPersianDigit(formattedArrivalTime)}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", width: "50%", flexDirection: "column" }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography>
                  کلاس پرواز:
                </Typography>
                <Typography>
                  {AirplaneClassTypeTrans[flight?.airplaneClassType!]}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography>
                  نوع بلیط:
                </Typography>
                <Typography>
                  {AirplaneTicketTypeTrans[flight?.airplaneTicketType!]}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography>
                  نوع هواپیما:
                </Typography>
                <Typography>
                  {AirplaneTypeTrans[flight?.airplaneType!]}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography>
                  قیمت:
                </Typography>
                <Typography color={theme.palette.primary.main}>
                  {toPersianDigit(priceSeparator(+flight?.totalPrice!))} ریال
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={classes.box}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <UserGroupIcon />
            <Typography variant="h5">
              مشخصات مسافر
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            <Box sx={classes.inputBox}>
              <Typography>
                نام
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField type="text" value={name} onChange={e => setName(e.target.value)} sx={classes.input} />
            </Box>
            <Box sx={classes.inputBox}>
              <Typography>
                نام خانوادگی
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField type="text" value={lastName} onChange={e => setLastName(e.target.value)} sx={classes.input} />
            </Box>
            <Box sx={classes.inputBox}>
              <Typography>
                جنسیت
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <FormControl>
                <Select
                  labelId="gender"
                  id="gender-id"
                  value={gender} 
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: "300px",
                        direction: "rtl",
                      },
                    },
                  }}
                  onChange={e => setGender(e.target.value)} 
                  sx={classes.input}
                >
                  <MenuItem value={"male"}>آقا</MenuItem>
                  <MenuItem value={"female"}>خانم</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={classes.inputBox}>
              <Typography>
                کد ملی
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField type="text" value={nationalCode} onChange={e => setNationalCode(e.target.value)} sx={classes.input} />
            </Box>
            <Box sx={classes.inputBox}>
              <Typography>
                تاریخ تولد
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} sx={classes.input} />
            </Box>
            <Button variant="contained" color="primary" disabled={!name || !lastName || !nationalCode || !gender || !birthDate} sx={{display: "flex", alignSelf: "end", minWidth: "250px", height: "55px"}} onClick={() => console.log("a")}>
              تایید رزرو
            </Button>
          </Box>
        </Box>
      </>
    );
};

export default PlaneReserve;
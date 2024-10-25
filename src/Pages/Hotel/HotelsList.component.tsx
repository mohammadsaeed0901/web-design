import { Box, Button, FormControl, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState, type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import HotelCard from "Components/Cards/Hotel/HotelCard.component";
import { IHotelDetail } from "Interfaces/HotelDetail.interface";
import axios from "axios";
import { ICity } from "Interfaces/City.interface";

const HotelsList: FC = () => {
  const { city } = useParams();
  const [searchParams] = useSearchParams();
  const [cities, setCities] = useState<ICity[]>([]);
  const navigate = useNavigate();
  
  const [hotel, setHotel] = useState<{destination?: string; checkIn?: string; checkOut?: string; passengersNo?: number;}>({
    destination: city,
    checkIn: searchParams?.get("departing") ?? "",
    checkOut: searchParams?.get("departing") ?? "",
    passengersNo: Number(searchParams.get("passNo"))
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/cities`).then((response) => {
      setCities(response.data.result);
    });
  }, []);


    const HotelsDetail: IHotelDetail[] = [
        {
          id: 1,
          name: "هما",
          imageSrc: "https://picsum.photos/id/232/200/200",
          address: "مشهد",
          stars: 4,
          totalPrice: 1900000,
          selectedDays: 3
      },
        {
            id: 2,
            name: "خیام",
            imageSrc: "https://picsum.photos/id/233/200/200",
            address: "مشهد",
            stars: 4,
            totalPrice: 1700000,
            selectedDays: 2
        },
    ];

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
        <Box sx={{ display: "flex", direction: "rtl" }}>
            <Box sx={{ display: "flex", flexDirection: "column", width: "30%", padding: "24px 16px", border: "3px solid #f7f7f7", borderRadius: "8px", gap: 2, height: "fit-content" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  مقصد (شهر)
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <FormControl>
                  <Select
                    labelId="origin-city"
                    id="origin-city-id"
                    value={hotel?.destination} 
                    sx={classes.input}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          maxHeight: "300px",
                          direction: "rtl",
                        },
                      },
                    }}
                    onChange={e => setHotel(prevState => ({ ...prevState, destination: e.target.value}))}>
                    {cities.map((city) => (
                      <MenuItem value={city.name}>{city.faDisplayName}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تاریخ رفت
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField type="date" value={hotel?.checkIn}
                  onChange={e => setHotel(prevState => ({ ...prevState, checkIn: e.target.value}))}
                  sx={classes.input} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تاریخ برگشت
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField type="date" value={hotel?.checkOut} 
                  onChange={e => setHotel(prevState => ({ ...prevState, checkOut: e.target.value}))} 
                  sx={classes.input} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تعداد مسافران
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField type="number" value={hotel?.passengersNo} 
                  onChange={e => {
                    if (+e.target.value > 0) {
                        setHotel(prevState => ({ ...prevState, passengersNo: +e.target.value}))
                    }
                  }} 
                  sx={classes.input} />
              </Box>
              <Button variant="contained" color="warning" disabled={!hotel?.checkOut || !hotel?.destination || !hotel?.checkIn || !hotel?.passengersNo} onClick={() => console.log(hotel)}>
                جستجو
              </Button>
            </Box>
            <Box sx={{ width: "70%", display: "flex", flexDirection: "column", gap: 2, alignItems: "center",  paddingX: "16px" }}>
              {HotelsDetail.map((htl) => (
                  <HotelCard name={htl?.name} address={htl?.address} imageSrc={htl?.imageSrc} selectedDays={htl?.selectedDays} stars={htl?.stars}
                  totalPrice={htl.totalPrice} onClick={() => navigate({ pathname: `/hotel/${city}/${htl?.id}` })} />
              ))}
            </Box>
        </Box>
    );
};

export default HotelsList;
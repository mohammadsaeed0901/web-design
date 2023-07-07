import { Box, Button, Divider, FormControl, MenuItem, Select, TextField, Typography } from "@mui/material";
import PlaneCard from "Components/Cards/Plane/PlaneCard.component";
import { IPlaneDetail } from "Interfaces/PlaneDetail.interface";
import { Cities } from "../Dashboard/Dashboard.module";
import { useState, type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const PlanesList: FC = () => {
  const { city } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [plane, setPlane] = useState<{origin?: string; destination?: string; checkIn?: string; checkOut?: string; passengersNo?: number;}>({
    origin: city?.substring(0, 3),
    destination: city?.substring(4),
    checkIn: searchParams?.get("departing") ?? "",
    checkOut: searchParams?.get("departing") ?? "",
    passengersNo: Number(searchParams.get("passNo"))
  });

    const PlanesDetail: IPlaneDetail[] = [
        {
          id: 1,
          detail: {
              name: "کیش ایر",
              class: "اکونومی", 
              logo: "https://picsum.photos/id/230/200/200", 
              ticketType: "سیستمی", 
              type: "Boeing M-85",
          },
          from: {
              city: "مشهد",
              hour: "12:23"
          },
          to: {
              city: "کیش",
              hour: "14:23"
          },
          totalPrice: 1700000,
      },
        {
          id: 2,
          detail: {
              name: "هما",
              class: "اکونومی", 
              logo: "https://picsum.photos/id/232/200/200", 
              ticketType: "سیستمی", 
              type: "Topolof",
          },
          from: {
              city: "مشهد",
              hour: "08:00"
          },
          to: {
              city: "تهران",
              hour: "09:30"
          },
          totalPrice: 1480000,
        },
        {
          id: 2,
          detail: {
              name: "هما",
              class: "اکونومی", 
              logo: "https://picsum.photos/id/232/200/200", 
              ticketType: "سیستمی", 
              type: "Topolof",
          },
          from: {
              city: "مشهد",
              hour: "08:00"
          },
          to: {
              city: "تهران",
              hour: "09:30"
          },
          totalPrice: 1480000,
      },
      {
        id: 2,
        detail: {
            name: "هما",
            class: "اکونومی", 
            logo: "https://picsum.photos/id/232/200/200", 
            ticketType: "سیستمی", 
            type: "Topolof",
        },
        from: {
            city: "مشهد",
            hour: "08:00"
        },
        to: {
            city: "تهران",
            hour: "09:30"
        },
        totalPrice: 1480000,
      },
      {
        id: 2,
        detail: {
            name: "هما",
            class: "اکونومی", 
            logo: "https://picsum.photos/id/232/200/200", 
            ticketType: "سیستمی", 
            type: "Topolof",
        },
        from: {
            city: "مشهد",
            hour: "08:00"
        },
        to: {
            city: "تهران",
            hour: "09:30"
        },
        totalPrice: 1480000,
      },
      {
        id: 2,
        detail: {
            name: "هما",
            class: "اکونومی", 
            logo: "https://picsum.photos/id/232/200/200", 
            ticketType: "سیستمی", 
            type: "Topolof",
        },
        from: {
            city: "مشهد",
            hour: "08:00"
        },
        to: {
            city: "تهران",
            hour: "09:30"
        },
        totalPrice: 1480000,
      },
      {
        id: 2,
        detail: {
            name: "هما",
            class: "اکونومی", 
            logo: "https://picsum.photos/id/232/200/200", 
            ticketType: "سیستمی", 
            type: "Topolof",
        },
        from: {
            city: "مشهد",
            hour: "08:00"
        },
        to: {
            city: "تهران",
            hour: "09:30"
        },
        totalPrice: 1480000,
      },
      {
        id: 2,
        detail: {
            name: "هما",
            class: "اکونومی", 
            logo: "https://picsum.photos/id/232/200/200", 
            ticketType: "سیستمی", 
            type: "Topolof",
        },
        from: {
            city: "مشهد",
            hour: "08:00"
        },
        to: {
            city: "تهران",
            hour: "09:30"
        },
        totalPrice: 1480000,
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
                  مبدا (شهر)
                </Typography>
                <FormControl>
                  <Select
                      labelId="origin-city"
                      id="origin-city-id"
                      value={plane?.origin}
                      sx={classes.input}
                      MenuProps={{
                      PaperProps: {
                          sx: {
                          maxHeight: "300px",
                          direction: "rtl",
                          },
                      },
                      }}
                      onChange={e => setPlane(prevState => ({ ...prevState, origin: e.target.value}))}
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
                    value={plane?.destination} 
                    sx={classes.input}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          maxHeight: "300px",
                          direction: "rtl",
                        },
                      },
                    }}
                    onChange={e => setPlane(prevState => ({ ...prevState, destination: e.target.value}))}
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
                <TextField type="date" value={plane?.checkIn} onChange={e => setPlane(prevState => ({ ...prevState, checkIn: e.target.value}))} sx={classes.input} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تاریخ برگشت
                </Typography>
                <TextField type="date" value={plane?.checkOut} onChange={e => setPlane(prevState => ({ ...prevState, checkOut: e.target.value}))} sx={classes.input} />
              </Box>
              <Divider />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تعداد مسافران
                </Typography>
                <TextField type="number" value={plane?.passengersNo} onChange={e => setPlane(prevState => ({ ...prevState, passengersNo: +e.target.value}))} sx={classes.input} />
              </Box>
              <Button variant="contained" color="warning" onClick={() => console.log(plane)}>
                جستجو
              </Button>
            </Box>
            <Box sx={{ width: "70%", display: "flex", flexDirection: "column", gap: 2, alignItems: "center",  paddingX: "16px" }}>
              {PlanesDetail.map((pln) => (
                  <PlaneCard detail={pln.detail} from={pln.from} to={pln.to} 
                  totalPrice={pln.totalPrice} onClick={() => navigate({ pathname: `/flights/${plane?.origin}-${plane?.destination}/${pln?.id}` })} />
              ))}
            </Box>
        </Box>
    );
};

export default PlanesList;
import { Box, Button, Divider, FormControl, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Cities } from "../Dashboard/Dashboard.module";
import { useState, type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import TrainCard from "Components/Cards/Train/TrainCard.component";
import { ITrainDetail } from "Interfaces/TrainDetail.interface";

const TrainsList: FC = () => {
  const { city } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [train, setTrain] = useState<{origin?: string; destination?: string; checkIn?: string; checkOut?: string; passengersNo?: number;}>({
    origin: city?.substring(0, 3),
    destination: city?.substring(4),
    checkIn: searchParams?.get("departing") ?? "",
    checkOut: searchParams?.get("departing") ?? "",
    passengersNo: Number(searchParams.get("passNo"))
  });

    const TrainsDetail: ITrainDetail[] = [
        {
          id: 1,
          detail: {
              name: "کیش ایر",
              logo: "https://picsum.photos/id/230/200/200", 
              type: "Boeing M-85",
              company: "فدک"
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
              logo: "https://picsum.photos/id/232/200/200", 
              type: "Topolof",
              company: "فدک"
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
              logo: "https://picsum.photos/id/232/200/200", 
              type: "Topolof",
              company: "فدک"
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
            logo: "https://picsum.photos/id/232/200/200", 
            type: "Topolof",
            company: "فدک"
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
            logo: "https://picsum.photos/id/232/200/200", 
            type: "Topolof",
            company: "فدک"
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
            logo: "https://picsum.photos/id/232/200/200", 
            type: "Topolof",
            company: "فدک"
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
            logo: "https://picsum.photos/id/232/200/200", 
            type: "Topolof",
            company: "فدک"
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
            logo: "https://picsum.photos/id/232/200/200", 
            type: "Topolof",
            company: "فدک"
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
                      value={train?.origin}
                      sx={classes.input}
                      MenuProps={{
                      PaperProps: {
                          sx: {
                          maxHeight: "300px",
                          direction: "rtl",
                          },
                      },
                      }}
                      onChange={e => setTrain(prevState => ({ ...prevState, origin: e.target.value}))}
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
                    value={train?.destination} 
                    sx={classes.input}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          maxHeight: "300px",
                          direction: "rtl",
                        },
                      },
                    }}
                    onChange={e => setTrain(prevState => ({ ...prevState, destination: e.target.value}))}
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
                <TextField type="date" value={train?.checkIn} onChange={e => setTrain(prevState => ({ ...prevState, checkIn: e.target.value}))} sx={classes.input} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تاریخ برگشت
                </Typography>
                <TextField type="date" value={train?.checkOut} onChange={e => setTrain(prevState => ({ ...prevState, checkOut: e.target.value}))} sx={classes.input} />
              </Box>
              <Divider />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تعداد مسافران
                </Typography>
                <TextField type="number" value={train?.passengersNo} onChange={e => setTrain(prevState => ({ ...prevState, passengersNo: +e.target.value}))} sx={classes.input} />
              </Box>
              <Button variant="contained" color="warning" onClick={() => console.log(train)}>
                جستجو
              </Button>
            </Box>
            <Box sx={{ width: "70%", display: "flex", flexDirection: "column", gap: 2, alignItems: "center",  paddingX: "16px" }}>
              {TrainsDetail.map((trn) => (
                  <TrainCard detail={trn.detail} from={trn.from} to={trn.to} 
                  totalPrice={trn.totalPrice} onClick={() => navigate({ pathname: `/trains/${train?.origin}-${train?.destination}/${trn?.id}` })} />
              ))}
            </Box>
        </Box>
    );
};

export default TrainsList;
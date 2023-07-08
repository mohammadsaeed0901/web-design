import { Box, Button, FormControl, FormHelperText, MenuItem, Select, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useState, type FC } from "react";
import { Cities } from "./Dashboard.module";
import { createSearchParams, useNavigate } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Dashboard: FC = () => {
  const [value, setValue] = useState<number>(0);
  const navigate = useNavigate();
  const [plane, setPlane] = useState<{origin?: string; destination?: string; checkIn?: string; checkOut?: string; passengersNo?: number;}>({passengersNo: 1});
  const [train, setTrain] = useState<{origin?: string; destination?: string; checkIn?: string; checkOut?: string; passengersNo?: number;}>({passengersNo: 1});
  const [hotel, setHotel] = useState<{destination?: string; checkIn?: string; checkOut?: string; passengersNo?: number;}>({passengersNo: 1});
  const [accommodation, setAccommodation] = useState<{destination?: string; checkIn?: string; checkOut?: string; passengersNo?: number;}>({passengersNo: 1});

  const [planeMessage, setPlaneMessage] = useState<{origin?: string | null; destination?: string | null; checkIn?: string | null; passengersNo?: string | null;} | null>(null);
  const [trainMessage, setTrainMessage] = useState<{origin?: string | null; destination?: string | null; checkIn?: string | null; passengersNo?: string | null;} | null>(null);
  const [hotelMessage, setHotelMessage] = useState<{checkOut?: string | null; destination?: string | null; checkIn?: string | null; passengersNo?: string | null;} | null>(null);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const classes = {
    box: {
        display: "flex",
        flexDirection: "column",
        direction: "rtl",
        backgroundColor: "#f7f7f7",
        padding: "1rem 2rem",
        marginTop: "5%",
        gap: 2,
    },
    cardBox: {
        display: "flex", 
        justifyContent: "space-between", 
        flexWrap: "wrap",
        rowGap: "1rem",
    },
    input: {
      minWidth: "130px",
      height: "55px",
    },
    button: {
      alignSelf: "end",
      height: "55px", 
      width: "100px",
    },
  };

    return (
      <Box>
        <Box component="img" src={require("../../Assets/images/background-image.jpg")} alt="dashboard image" sx={{ width: "100%", height: "500px", position: "relative" }} />
        <Box sx={{ zIndex: 2, border: "2px solid #f7f7f7", borderRadius: "8px", backgroundColor: "#fff", position: "absolute", width: "60%", marginTop: "-7%", left: "20%" }}>
          <Tabs sx={{ direction: "rtl" }} value={value} onChange={handleChange} variant="fullWidth" centered>
            <Tab label="پرواز" />
            <Tab label="قطار" />
            <Tab label="هتل" />
            <Tab label="سوئیت" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Box sx={{ display: "flex",direction: "rtl", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  مبدا (شهر)
                  <span style={{ color: "red" }}>*</span>
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
                    onChange={e => {
                      if (!e.target.value) {
                        setPlaneMessage(prevState => ({...prevState, origin: "مبدا را وارد کنید"}));
                      } else {
                        setPlane(prevState => ({ ...prevState, origin: e.target.value}));
                      }
                    }}
                  >
                    {Cities.map((city) => (
                      <MenuItem value={city.value}>{city.label}</MenuItem>
                    ))}
                  </Select>
                  {!planeMessage?.origin && (
                    <FormHelperText>{planeMessage?.origin}</FormHelperText>
                  )}
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  مقصد (شهر)
                  <span style={{ color: "red" }}>*</span>
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
                    onChange={e => {
                      if (!e.target.value) {
                        setPlaneMessage(prevState => ({...prevState, destination: "مقصد را وارد کنید"}));
                      } else {
                        setPlane(prevState => ({ ...prevState, destination: e.target.value}))
                      }
                    }}
                  >
                    {Cities.map((city) => (
                      <MenuItem value={city.value}>{city.label}</MenuItem>
                    ))}
                  </Select>
                  {!planeMessage?.destination && (
                    <FormHelperText>{planeMessage?.destination}</FormHelperText>
                  )}
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تاریخ رفت
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField type="date" value={plane?.checkIn} sx={classes.input}
                onChange={e => {
                  if (!e.target.value) {
                    setPlaneMessage(prevState => ({...prevState, destination: "تاریخ رفت را وارد کنید"}));
                  } else {
                    setPlane(prevState => ({ ...prevState, checkIn: e.target.value}));
                  }
                }}/>
                {!planeMessage?.checkIn && (
                  <FormHelperText>{planeMessage?.checkIn}</FormHelperText>
                )}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تاریخ برگشت
                </Typography>
                <TextField type="date" value={plane?.checkOut} onChange={e => setPlane(prevState => ({ ...prevState, checkOut: e.target.value}))} sx={classes.input} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تعداد مسافران
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField type="number" value={plane?.passengersNo} defaultValue={1} sx={classes.input}
                onChange={e => {
                  if (!e.target.value || +e.target.value < 0) {
                    setPlaneMessage(prevState => ({...prevState, destination: "تعداد مسافران را وارد کنید"}));
                  } else {
                    setPlane(prevState => ({ ...prevState, passengersNo: +e.target.value}));
                  }
                }}/>
                {!planeMessage?.passengersNo && (
                  <FormHelperText>{planeMessage?.passengersNo}</FormHelperText>
                )}
              </Box>
              <Button variant="contained" color="warning" disabled={!plane?.origin || !plane?.destination || !plane?.checkIn || !plane?.passengersNo} sx={classes.button} onClick={() => {
                navigate({
                  pathname: `/flights/${plane?.origin}-${plane?.destination}`,
                  search: createSearchParams({
                    departing: plane?.checkIn ?? "",
                    passNo: plane?.passengersNo?.toString() ?? "",
                  }).toString()
                });
              }}>
                جستجو
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box sx={{ display: "flex",direction: "rtl", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  مبدا (شهر)
                  <span style={{ color: "red" }}>*</span>
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
                    onChange={e => {
                      if (!e.target.value) {
                        setTrainMessage(prevState => ({...prevState, origin: "مبدا را وارد کنید"}));
                      } else {
                        setTrain(prevState => ({ ...prevState, origin: e.target.value}));
                      }
                    }}
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
                  <span style={{ color: "red" }}>*</span>
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
                    onChange={e => {
                      if (!e.target.value) {
                        setTrainMessage(prevState => ({...prevState, origin: "مقصد را وارد کنید"}));
                      } else {
                        setTrain(prevState => ({ ...prevState, destination: e.target.value}));
                      }
                    }}
                  >
                    {Cities.map((city) => (
                      <MenuItem value={city.value}>{city.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تاریخ رفت
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField type="date" value={train?.checkIn}  
                  onChange={e => {
                      if (!e.target.value) {
                        setTrainMessage(prevState => ({...prevState, origin: "تاریخ رفت را وارد کنید"}));
                      } else {
                        setTrain(prevState => ({ ...prevState, checkIn: e.target.value}));
                      }
                    }} 
                  sx={classes.input} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تاریخ برگشت
                </Typography>
                <TextField type="date" value={train?.checkOut} onChange={e => setTrain(prevState => ({ ...prevState, checkOut: e.target.value}))} sx={classes.input} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تعداد مسافران
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField type="number" value={train?.passengersNo}  
                  onChange={e => {
                      if (!e.target.value || +e.target.value < 0) {
                        setTrainMessage(prevState => ({...prevState, origin: "تعداد مسافران را وارد کنید"}));
                      } else {
                        setTrain(prevState => ({ ...prevState, passengersNo: +e.target.value}));
                      }
                    }} 
                  sx={classes.input} />
              </Box>
              <Button variant="contained" color="warning" disabled={!train?.origin || !train?.destination || !train?.checkIn || !train?.passengersNo} sx={classes.button} 
                onClick={() => {
                  navigate({
                    pathname: `/trains/${train?.origin}-${train?.destination}`,
                    search: createSearchParams({
                      departing: train?.checkIn ?? "",
                      passNo: train?.passengersNo?.toString() ?? "",
                    }).toString()
                  });
                }}>
                جستجو
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box sx={{ display: "flex",direction: "rtl", justifyContent: "space-between" }}>
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
                    onChange={e => {
                      if (!e.target.value) {
                        setHotelMessage(prevState => ({...prevState, origin: "مقصد را وارد کنید"}));
                      } else {
                        setHotel(prevState => ({ ...prevState, destination: e.target.value}));
                      }
                    }}
                  >
                    {Cities.map((city) => (
                      <MenuItem value={city.value}>{city.label}</MenuItem>
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
                  onChange={e => {
                    if (!e.target.value) {
                      setHotelMessage(prevState => ({...prevState, origin: "تاریخ رفت را وارد کنید"}));
                    } else {
                      setHotel(prevState => ({ ...prevState, checkIn: e.target.value}));
                    }
                  }}
                  sx={classes.input} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تاریخ برگشت
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField type="date" value={hotel?.checkOut} 
                  onChange={e => {
                    if (!e.target.value) {
                      setHotelMessage(prevState => ({...prevState, origin: "تاریخ برگشت را وارد کنید"}));
                    } else {
                      setHotel(prevState => ({ ...prevState, checkOut: e.target.value}));
                    }
                  }} 
                  sx={classes.input} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تعداد مسافران
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField type="number" value={hotel?.passengersNo} 
                  onChange={e => {
                    if (!e.target.value && +e.target.value < 0) {
                      setHotelMessage(prevState => ({...prevState, origin: "تعداد مسافران را وارد کنید"}));
                    } else {
                      setHotel(prevState => ({ ...prevState, passengersNo: +e.target.value}));
                    }
                  }} 
                  sx={classes.input} />
              </Box>
              <Button variant="contained" color="warning" disabled={!hotel?.checkOut || !hotel?.destination || !hotel?.checkIn || !hotel?.passengersNo} sx={classes.button} 
                onClick={() => {
                  navigate({
                    pathname: `/hotel/${hotel?.destination}`,
                    search: createSearchParams({
                      departing: hotel?.checkIn ?? "",
                      returning: hotel?.checkOut ?? "",
                      passNo: hotel?.passengersNo?.toString() ?? "",
                    }).toString()
                  });
                }}>
                جستجو
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Box sx={{ display: "flex",direction: "rtl", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  مقصد (شهر)
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <FormControl>
                  <Select
                    labelId="origin-city"
                    id="origin-city-id"
                    value={accommodation?.destination} 
                    sx={classes.input}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          maxHeight: "300px",
                          direction: "rtl",
                        },
                      },
                    }}
                    onChange={e => setAccommodation(prevState => ({ ...prevState, destination: e.target.value}))}
                  >
                    {Cities.map((city) => (
                      <MenuItem value={city.value}>{city.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تاریخ رفت
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField type="date" value={accommodation?.checkIn} onChange={e => setAccommodation(prevState => ({ ...prevState, checkIn: e.target.value}))} sx={classes.input} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تاریخ برگشت
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField type="date" value={accommodation?.checkOut} onChange={e => setAccommodation(prevState => ({ ...prevState, checkOut: e.target.value}))} sx={classes.input} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  تعداد مسافران
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField type="number" value={accommodation?.passengersNo} onChange={e => setAccommodation(prevState => ({ ...prevState, passengersNo: +e.target.value}))} sx={classes.input} />
              </Box>
              <Button variant="contained" color="warning" disabled={!accommodation?.checkOut || !accommodation?.destination || !accommodation?.checkIn || !accommodation?.passengersNo}
                      sx={classes.button} onClick={() => console.log(accommodation)}>
                جستجو
              </Button>
            </Box>
          </TabPanel>
        </Box>     
      </Box>
    );
};

export default Dashboard;
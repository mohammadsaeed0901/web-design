import { Box, Button, FormControl, MenuItem, Select, TextField, Typography } from "@mui/material";
import { UserGroupIcon } from "Assets/Svg";
import { useState, type FC } from "react";

const PlaneReserve: FC = (props) => {
  const [name, setName]= useState<string>("");
  const [lastName, setLastName]= useState<string>("");
  const [gender, setGender]= useState<string>("");
  const [nationalCode, setNationalCode]= useState<string>("");
  const [birthDate, setBirthDate]= useState<string>("");

    const classes = {
      box: {
        display: "flex",
        padding: "1rem 2rem",
        flexDirection: "column",
        justifyContent: "center",
        direction: "rtl", 
        border: "1px solid #f7f7f7", 
        borderRadius: "8px",
        gap: 2,
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
      <Box sx={classes.box}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <UserGroupIcon />
          <Typography variant="h6">
            مشخصات مسافر
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          <Box sx={classes.inputBox}>
            <Typography>
              نام
            </Typography>
            <TextField type="text" value={name} onChange={e => setName(e.target.value)} sx={classes.input} />
          </Box>
          <Box sx={classes.inputBox}>
            <Typography>
              نام خانوادگی
            </Typography>
            <TextField type="text" value={lastName} onChange={e => setLastName(e.target.value)} sx={classes.input} />
          </Box>
          <Box sx={classes.inputBox}>
            <Typography>
              جنسیت
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
            </Typography>
            <TextField type="text" value={nationalCode} onChange={e => setNationalCode(e.target.value)} sx={classes.input} />
          </Box>
          <Box sx={classes.inputBox}>
            <Typography>
              تاریخ تولد
            </Typography>
            <TextField type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} sx={classes.input} />
          </Box>
          <Button variant="contained" color="primary" sx={{display: "flex", alignSelf: "end", minWidth: "250px", height: "55px"}} onClick={() => console.log("a")}>
            تایید و ادامه خرید
          </Button>
        </Box>
      </Box>
    );
};

export default PlaneReserve;
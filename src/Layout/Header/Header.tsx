import { useContext, useState } from "react";
import { AppBar, Toolbar, Box, Button, Menu, Typography, useTheme, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import TextField from "@mui/material/TextField";
import { MenuContext } from "Layout/Menu/MenuContext";
import { getStyles } from "./Header.module";
import { ChevronDownIcon, ChevronLeftIcon, ChevronUpIcon, LifePreserverIcon, UserIcon } from "Assets/Svg";

const Header = () => {
    const theme = useTheme();
    const classes = getStyles(theme);
    const [profileAncher, setProfileAncher] = useState<Element | null>(null);
    const [ticketAncher, setTicketAncher] = useState<Element | null>(null);
    const [residentialAncher, setResidentialAncher] = useState<Element | null>(null);
    const [open, setOpen] = useContext(MenuContext);
    const refreshToken = window.localStorage.getItem("refreshtoken");

    const closeProfile = () => {
        setProfileAncher(null);
      };
    
      const openProfile = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setProfileAncher(event.currentTarget);
      };

      const openTicketMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setTicketAncher(event.currentTarget);
      };

      const openResidentialMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setResidentialAncher(event.currentTarget);
      };
    
  return (
    <AppBar color="inherit" dir="rtl" position="fixed" elevation={0} sx={{minHeight: "2rem", boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)!important", backgroundColor: "#FFF" }}>
        <Toolbar sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                <IconButton type="button" disableTouchRipple aria-label="menu" onClick={() => setOpen(!open)}>
                    <MenuIcon />
                </IconButton>
                <Box sx={{ display: "flex", height: "30px", cursor: "pointer" }} onClick={() => window.location.assign("/")}>
                    <Typography>
                        Booking Site
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button
                        color="primary"
                        onClick={openTicketMenu}
                        endIcon={<ChevronDownIcon />}
                    >
                        <Typography variant="body1" color={theme.palette.primary.dark}>
                            بلیط
                        </Typography>
                    </Button>

                    <Menu
                        open={!!ticketAncher}
                        anchorEl={ticketAncher}
                        onClose={() => setTicketAncher(null)}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                    >
                        <Box sx={classes.profileMenucontainer}>
                            <Box sx={{ padding: 1, textAlign: "center" }}>
                                <Button
                                    sx={classes.profileMenuButton}
                                    fullWidth
                                    onClick={() => window.location.assign("/flights")}
                                >
                                    هواپیما
                                </Button>
                                <Divider />
                                <Button
                                    sx={classes.profileMenuButton}
                                    fullWidth
                                    onClick={() => window.location.assign("/trains")}
                                >
                                    قطار
                                </Button>
                            </Box>
                        </Box>
                    </Menu>
                    <Divider orientation="vertical" />
                    <Button
                        color="primary"
                        onClick={openResidentialMenu}
                        endIcon={<ChevronDownIcon />}
                    >
                        <Typography variant="body1" color={theme.palette.primary.dark}>
                            اقامت
                        </Typography>
                    </Button>

                    <Menu
                        open={!!residentialAncher}
                        anchorEl={residentialAncher}
                        onClose={() => setResidentialAncher(null)}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                    >
                        <Box sx={classes.profileMenucontainer}>
                            <Box sx={{ padding: 1, textAlign: "center" }}>
                                <Button
                                    sx={classes.profileMenuButton}
                                    fullWidth
                                    onClick={() => console.log("qwe")}
                                >
                                    هتل
                                </Button>
                                <Divider />
                                <Button
                                    sx={classes.profileMenuButton}
                                    fullWidth
                                    onClick={() => console.log("qwe")}
                                >
                                    سوئیت
                                </Button>
                            </Box>
                        </Box>
                    </Menu>
                </Box>
            </Box>      

            {/* <Box sx={{ display: "flex", width: "40%" }}>
                <TextField
                id="search-bar"
                className="text"
                onInput={(e) => {
                    console.log(e);
                }}
                variant="outlined"
                placeholder="جستجو کنید ..."
                size="small"
                fullWidth
                />
                <IconButton type="submit" disableTouchRipple aria-label="search">
                    <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
            </Box> */}

            {/* <Button variant="contained" onClick={() => {
                window.location.assign("../login");
                window.localStorage.removeItem("refreshtoken");
            }}
                    color={refreshToken ? "error" : "success"} sx={{ borderRadius: "1rem", boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)!important", fontFamily: "inherit" }} disableElevation disableRipple>
                {refreshToken ? "خروج از حساب کاربری" : "ورود / ثبت نام"}
            </Button> */}
            <Box sx={classes.iconContainer}>
                <Box sx={classes.iconContainer}>
                    <Button
                        color="primary"
                        onClick={() => console.log("reserve")}
                        startIcon={
                            <LifePreserverIcon />
                        }
                    >
                        <Typography variant="body1" color={theme.palette.grey[500]}>
                            رزرو های من
                        </Typography>
                    </Button>
                </Box>
                <Box sx={classes.iconContainer}>
                    <Button
                        color="primary"
                        onClick={openProfile}
                        startIcon={
                            <UserIcon />
                        }
                        endIcon={
                        !profileAncher ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronUpIcon />
                        )}
                    >
                        <Typography variant="body1" color={theme.palette.grey[500]}>
                            saeed
                        </Typography>
                    </Button>

                    <Menu
                        open={!!profileAncher}
                        anchorEl={profileAncher}
                        onClose={closeProfile}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                    >
                        <Box sx={classes.profileMenucontainer}>
                            <Box sx={{ padding: 1, textAlign: "center" }}>
                                <Button
                                sx={classes.profileMenuButton}
                                fullWidth
                                onClick={() => console.log("qwe")}
                                >
                                    مشخصات کاربری
                                </Button>
                                <Divider />
                                <Button
                                sx={classes.profileMenuButton}
                                fullWidth
                                onClick={() => {
                                    window.location.assign("../login");
                                    window.localStorage.removeItem("refreshtoken");
                                }}
                                >
                                    خروج
                                </Button>
                            </Box>
                        </Box>
                    </Menu>
                </Box>
            </Box>
        </Toolbar>
    </AppBar>
  );
};

export default Header;
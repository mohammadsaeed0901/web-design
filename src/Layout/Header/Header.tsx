import { useContext, useState } from "react";
import { AppBar, Toolbar, Box, Button, Menu, Typography, useTheme, Divider } from "@mui/material";
import { getStyles } from "./Header.module";
import { ChevronDownIcon, ChevronLeftIcon, ChevronUpIcon, LifePreserverIcon, UserIcon } from "Assets/Svg";
import { TabContext } from "./TabContext.component";
import Profile from "Pages/Profile/Profile.component";

const Header = () => {
    const theme = useTheme();
    const classes = getStyles(theme);
    const { setValue } = useContext(TabContext);
    const [profileAncher, setProfileAncher] = useState<Element | null>(null);
    const [ticketAncher, setTicketAncher] = useState<Element | null>(null);
    const [residentialAncher, setResidentialAncher] = useState<Element | null>(null);
    const [openDialog, setOpenDialog] = useState<string>("");

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
    <AppBar color="inherit" dir="rtl" position="fixed" elevation={0} sx={{minHeight: "2rem", boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)!important", backgroundColor: "#FDB713" }}>
        <Toolbar sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
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
                                    onClick={() => setValue(0)}
                                >
                                    هواپیما
                                </Button>
                                <Divider />
                                <Button
                                    sx={classes.profileMenuButton}
                                    fullWidth
                                    onClick={() => setValue(1)}
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
                                    onClick={() => setValue(2)}
                                >
                                    هتل
                                </Button>
                                <Divider />
                                <Button
                                    sx={classes.profileMenuButton}
                                    fullWidth
                                    onClick={() => setValue(3)}
                                >
                                    سوئیت
                                </Button>
                            </Box>
                        </Box>
                    </Menu>
                </Box>
            </Box>      
            <Box sx={classes.iconContainer}>
                <Box sx={classes.iconContainer}>
                    <Button
                        color="primary"
                        onClick={() => console.log("reserve")}
                        startIcon={
                            <LifePreserverIcon />
                        }
                    >
                        <Typography variant="body1" color={theme.palette.primary.dark}>
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
                        <Typography variant="body1" color={theme.palette.primary.dark}>
                            username
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
                                onClick={() => setOpenDialog("user-info")}
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
        {openDialog === "user-info" && (
           <Profile handleClose={() => setOpenDialog("")} /> 
        )}
    </AppBar>
  );
};

export default Header;
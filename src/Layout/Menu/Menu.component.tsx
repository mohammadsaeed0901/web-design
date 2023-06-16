import { useContext } from "react";
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { MenuContext } from "./MenuContext";
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import MovieIcon from '@mui/icons-material/Movie';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SchoolIcon from '@mui/icons-material/School';
import HandshakeIcon from '@mui/icons-material/Handshake';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const MenuComponent = () => {
  const [open, setOpen] = useContext(MenuContext);

  const categories = [
    {
        id: 1,
        faName: "ورزشی",
        enName: "sport",
        icon: <SportsBaseballIcon />,
    },
    {
        id: 2,
        faName: "فیلم",
        enName: "film",
        icon: <MovieIcon />,
    },
    {
        id: 3,
        faName: "خبری",
        enName: "news",
        icon: <RssFeedIcon />,
    },
    {
        id: 4,
        faName: "کارتون",
        enName: "cartoon",
        icon: <ChildCareIcon />,
    },
    {
        id: 5,
        faName: "موسیقی",
        enName: "music",
        icon: <MusicNoteIcon />,
    },
    {
        id: 6,
        faName: "آموزشی",
        enName: "education",
        icon: <SchoolIcon />,
    },
    {
        id: 7,
        faName: "سیاسی",
        enName: "politics",
        icon: <HandshakeIcon />,
    },
    {
        id: 8,
        faName: "طنز",
        enName: "comedy",
        icon: <InsertEmoticonIcon />,
    },
   ];

  const classes = {
    root: {
        width: 312,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 312,
          backgroundColor: "#f8f9fa",
        },
    },
    headerContainer: {
        padding: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "1px solid #E6EAED",
        minHeight: 64,
        maxHeight: 64,
        boxSizing: "border-box",
        position: "sticky",
        top: 0,
        backgroundColor: "#f8f9fa",
    },
    profileBox: {
        display: "flex", 
        flexDirection: "column", 
        paddding: "1rem .5rem", 
        borderBottom: "1px solid #E6EAED",
    },
    list: {
        "& .MuiListItem-root": {
            "& .MuiButtonBase-root": {
                textAlign: "right", 
                "& .MuiListItemText-root": {
                    "& span": {
                        fontFamily: "inherit",
                    },
                },
            },
        },
    },
    categoryBox: {
        display: "flex", 
        flexDirection: "column", 
        width: "33%", 
        justifyContent: "center", 
        alignItems: "center",
        marginBottom: "1rem",
        cursor: "pointer",
    },
  };

  return (
    <Drawer
      variant={"temporary"}
      open={open}
      onClose={() => setOpen(false)}
      anchor="right"
      sx={classes.root}
    >
      <Box sx={classes.headerContainer}>
        <Box sx={{ display: "flex", height: "30px" }}>
            <img src="https://jabeh.com/images/logo_color.svg" alt="jabeh Logo" width="70px" />
        </Box>
      </Box>
      <Box sx={classes.profileBox}>
        <List sx={classes.list}>
            {['ثبت مشخصات کاربری', 'ویرایش مشخصات کاربری'].map((text, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
      </Box>
      <Box sx={{ display: "flex", direction: "rtl", flexWrap: "wrap", marginTop: "3%" }}>
        {categories.map((category) => (
            <Box sx={classes.categoryBox} onClick={() => window.location.assign(`/t/${category.id}`)}>
                <>
                    <IconButton disableRipple>
                        {category.icon}
                    </IconButton>
                    <Typography sx={{ fontFamily: "inherit" }}>
                        {category.faName}
                    </Typography>
                </>
            </Box>
        ))}          
      </Box>
    </Drawer>
  );
};

export default MenuComponent;

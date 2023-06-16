import { Avatar, Box, Button, Typography } from "@mui/material";
import { IChannel } from "Interfaces/Channel.interface";
import { FC } from "react";

interface ChannelProps {
    name: string;
    view: number;
    channelAvatar?: string;
    channels: IChannel[];
}

const ChannelContainer: FC<ChannelProps> = (props) => {
    const { name, view, channelAvatar, channels } = props

    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 1, direction: "rtl", fontFamily:"inherit" }}>
            <Box sx={{ display: "flex", direction: "rtl", justifyContent: "space-between", alignItems: "center", marginY: 2 }}>
                <Box sx={{ display: "flex", direction: "rtl", alignItems: "center", gap: 2 }}>
                    <Avatar src={channelAvatar} />
                    <Typography sx={{ fontFamily:"inherit" }}>{name}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" ,gap: 1 }}>
                    <Typography sx={{ fontFamily:"inherit" }}>{view} دنبال کننده </Typography>
                    <Button variant="contained" color="error" sx={{ borderRadius: "1rem", fontFamily:"inherit",
                            boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)!important" }} disableElevation disableRipple>
                        دنبال کردن
                    </Button>
                </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 3 , flexWrap: "wrap" }}>
                {channels.map((channel) => (
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "20%" }}>
                        <img src={channel.imageSrc} alt="video clip" width="100%" height="200px" />
                        <Box sx={{ display: "flex", flexDirection: "column", direction: "rtl", alignItems: "flex-start", gap: 1 }}>
                            <Typography sx={{ fontFamily:"inherit" }}>{channel.title}</Typography>
                            <Box  sx={{ display: "flex", flexDirection: "row" }}>
                                <Typography variant="subtitle2" sx={{ fontFamily:"inherit" }}>{channel.view + " بازدید | " + channel.publishDate}</Typography>
                            </Box>
                        </Box>
                    </Box> 
                ))}
           </Box>
        </Box>
    );
};

export default ChannelContainer;
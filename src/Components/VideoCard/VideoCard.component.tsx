import { Avatar, Box, Typography } from "@mui/material";
import { FC } from "react";

interface CardProps {
    name: string;
    publisher: string;
    view: number;
    publishDate: string;
    imageSrc: string;
    publisherAvatar?: string;
    onClick?: () => void;
}

const VideoCard: FC<CardProps> = (props) => {
    const { name, publisher, view, publishDate, imageSrc, publisherAvatar, onClick } = props

    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "250px", gap: 1, cursor: "pointer" }} onClick={onClick}>
           <img src={imageSrc} alt="video clip" width="100%" height="200px" />
           <Box sx={{ display: "flex", direction: "rtl", gap: 1 }}>
                <Avatar src={publisherAvatar} sx={{ marginTop: "2%" }} />
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
                    <Box sx={{ display:"flex", flexDirection:"column" }}>
                        <Typography sx={{ fontFamily:"inherit" }}>{name}</Typography>
                        <Typography sx={{ fontFamily:"inherit" }}>{publisher}</Typography>
                    </Box>
                    <Typography variant="subtitle2" sx={{ fontFamily:"inherit" }}>{view + " بازدید | " + publishDate}</Typography>
                </Box>
           </Box>
        </Box>
    );
};

export default VideoCard;
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { IVideo } from "Interfaces/Video.interface";
import { FC, useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import { useParams } from "react-router-dom";
import axios from "axios";

const VideoView: FC = (props) => {
    const { id } = useParams();
    const messages: string[] = [];  
    const [bookmark, setBookmark] = useState<boolean>(false);
    const [like, setLike] = useState<boolean>(false);

    useEffect(() => {
        axios.get(`http://localhost/jabeh/watch.php?vid=${id}`).then((resp: any) => {
            console.log(resp.data);
        });
    }, [id]);

    const videoObj: IVideo = {
        id: Number(id!),
        imageURL: "",
        title: "فیلم شماره ۱",
        category: "1",
        videoPath: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
        publishDate: "۱ هفته پیش",
        publisher: "video-01",
        viewCount: 12,
        likeCount: 3,
        publisherData: {
            channelName: "",
            avatar: "",
        }
    }

    const classes = {
        box: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
        },
        detail: {
            width: "80%",
            direction: "rtl",
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
        },
        commentsHeader: {
            display: "flex", 
            direction: "rtl", 
            backgroundColor: "#38c172", 
            color: "#fff",
            padding: "1rem 2rem",
            justifyContent: "center",
        },
        commentBox: {
            display: "flex", 
            flexDirection: "column", 
            gap: 2, 
            direction: "rtl", 
            marginTop: "2rem",
        },
        comment: {
            fontFamily: "inherit", 
            ":not(:last-child)": {
                borderBottom: "1px solid #f7f7f7",
            },
        },
    };

    return (
        <Box sx={classes.box}>
            <ReactPlayer url={videoObj.videoPath} width="80%" height="500px" />
            <Box sx={classes.detail}>
                <Typography sx={{ fontFamily: "inherit" }}>
                    {videoObj.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography sx={{ fontFamily: "inherit" }}>
                        {videoObj.publishDate}
                    </Typography>
                    <IconButton disableRipple sx={{ padding: 0 }} onClick={() => setBookmark(!bookmark)}>
                        {!bookmark ? <BookmarkBorderIcon /> : <BookmarkIcon sx={{ fill: "#000" }} />} 
                    </IconButton>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <IconButton disableRipple sx={{ padding: 0 }} onClick={() => setLike(!like)}>
                            {!like ? <FavoriteBorderIcon /> : <FavoriteIcon sx={{ fill: "red" }} />} 
                        </IconButton>
                        {!like ? videoObj.likeCount : videoObj.likeCount && +videoObj.likeCount + 1}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <VisibilityIcon />
                        {videoObj.viewCount}
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, direction: "rtl", width: "80%" }}>
                <Avatar src={videoObj.publisherData?.avatar} />
                <Typography sx={{ fontFamily: "inherit" }}>
                    {videoObj.publisher}
                </Typography>
            </Box>
            <Box sx={{ marginTop: "5%", width: "80%" }}>
                <Box sx={classes.commentsHeader}>
                    نظرات کاربران
                </Box>
                <Box sx={classes.commentBox}>
                    {messages.length > 0 ? (messages.map((message) => (
                        <Typography sx={classes.comment}>
                            {message}
                        </Typography>
                    )
                    )) : (
                        <Typography variant="h5" sx={{ fontFamily: "inherit", textAlign: "center" }}>
                            نظراتی برای نمایش وجود ندارد.
                        </Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default VideoView;
import { Box } from "@mui/material";
import { IVideo } from "Interfaces/Video.interface";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoCard from "Components/VideoCard/VideoCard.component";

const CategoryView: FC = (props) => {
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost/jabeh/categoryfilter.php?catid=${id}`).then((resp: any) => {
            console.log(resp.data);
        });
    }, [id]);

    const VideoCards: IVideo[] = [
        {
            id: 1,
            title: "ویدئو خنده دار 1",
            category: "1",
            videoPath: "",
            imageURL: "https://picsum.photos/id/237/200/200",
            publisher: "video-01",
            publishDate: "۱ هفته پیش",
            viewCount: 12,
        },
        {
            id: 2,
            title: "ویدئو خنده دار 2",
            category: "1",
            videoPath: "",
            imageURL: "https://picsum.photos/id/238/200/200",
            publisher: "video-02",
            publishDate: "۳ ماه پیش",
            viewCount: 10,
        },
        {
            id: 3,
            title: "ویدئو خنده دار 3",
            category: "1",
            videoPath: "",
            imageURL: "https://picsum.photos/id/239/200/200",
            publisher: "video-03",
            publishDate: "۲ هفته پیش",
            viewCount: 45,
        },
        {
            id: 4,
            title: "ویدئو خنده دار 4",
            category: "1",
            videoPath: "",
            imageURL: "https://picsum.photos/id/240/200/200",
            publisher: "video-04",
            publishDate: "۵ ساعت پیش",
            viewCount: 23,
        },
        {
            id: 5,
            title: "ویدئو خنده دار 5",
            category: "1",
            videoPath: "",
            imageURL: "https://picsum.photos/id/241/200/200",
            publisher: "video-05",
            publishDate: "۵ ساعت پیش",
            viewCount: 123,
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
        headerBox: {
            display: "flex", 
            padding: "1rem 2rem", 
            width: "100%",
        },
        cardBox: {
            display: "flex", 
            justifyContent: "space-between", 
            flexWrap: "wrap",
            gap: "1rem",
        },
    };

    return (
        <Box sx={classes.box}>
            <Box sx={classes.headerBox}>
                ویدئو های طنز
            </Box>
            <Box sx={classes.cardBox}>
                {VideoCards.map((video) => (
                    <VideoCard name={video.title} imageSrc={video.imageURL} publishDate={video.publishDate}
                                publisher={video.publisher} view={video.viewCount} onClick={() => window.location.assign(`/v/${video.id}`)} />
                ))}
            </Box> 
        </Box>
    );
};

export default CategoryView;
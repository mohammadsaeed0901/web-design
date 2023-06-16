import { Box, Button, Typography } from "@mui/material";
import VideoCard from "../../Components/VideoCard/VideoCard.component";
import ChannelContainer from "Components/ChannelContainer/ChannelContainer.component";
import { IChannel } from "Interfaces/Channel.interface";
import { IVideo } from "Interfaces/Video.interface";
import { useEffect, useState } from "react";
import axios from "axios";
import HotelCard from "Components/Cards/Hotel/HotelCard.component";
import PlaneCard from "Components/Cards/Plane/PlaneCard.component";
import TrainCard from "Components/Cards/Train/TrainCard.component";


const Main = () => {
    const [channels, setChannels] = useState<IChannel[]>([]);

    useEffect(() => {
        axios.get(`http://localhost/jabeh/popularchannels.php?popularchannel`).then((resp: any) => {
            setChannels(resp.data);
        });
    }, [channels]);

    const category = [
        {
            id: 1,
            label: "ورزشی",
            name: "sport"
        },
        {
            id: 2,
            label: "خبری",
            name: "news"
        },
        {
            id: 3,
            label: "فیلم",
            name: "film"
        },
        {
            id: 4,
            label: "کارتون",
            name: "cartoon"
        },
        {
            id: 5,
            label: "موسیقی",
            name: "music"
        },
        {
            id: 6,
            label: "آموزشی",
            name: "education"
        },
        {
            id: 7,
            label: "سیاسی",
            name: "politics"
        },
        {
            id: 8,
            label: "طنز",
            name: "comedy"
        },
    ]

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
    };

    return (
        <Box>
           
            <Box display="flex" gap=".5rem" justifyContent={"center"}>
            {category.map((cat) => (
                <Button variant="contained" color="warning" sx={{ borderRadius: "1rem", fontFamily: "inherit",
                        boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)!important", width: "5%" }} onClick={() => window.location.assign(`/t/${cat.id}`)} disableElevation disableRipple>
                    {cat.label}
                </Button>
            ))}
            </Box>
            <Box>
                <HotelCard name="هتل ۱" imageSrc="https://picsum.photos/id/241/200/200" address="مشهد ، خیابان شهید بهشتی" totalPrice={1860000} selectedDays={3} stars={4} />
                <PlaneCard totalPrice={1780000} detail={{ name: "کیش ایر", eco: "اکونومی", logo: "https://picsum.photos/id/240/200/200", sys: "سیستمی", type: "Boeing M-85" }}
                            from={{ city: "مشهد", hour: "8:18" }} to={{ city: "اهواز", hour: "10:18" }} />
                <TrainCard totalPrice={1300000} detail={{ name: "۵ ستاره بیزینس", company: "رجا سیر", logo: "https://picsum.photos/id/240/200/200", type: "کوپه ۴ نفره" }}
                            from={{ city: "مشهد", hour: "8:18" }} to={{ city: "اهواز", hour: "10:18" }} remaining={3} />
            </Box>
            <Box sx={classes.box}>
                <Typography variant="h6" sx={{ fontFamily:"inherit" }}>داغ ترین ها 🔥</Typography>
                <Box sx={classes.cardBox}>
                    {VideoCards.map((video) => (
                        <VideoCard name={video.title} imageSrc={video.imageURL} publishDate={video.publishDate}
                                    publisher={video.publisher} view={video.viewCount} onClick={() => window.location.assign(`/v/${video.id}`)} />
                    ))}
                </Box> 
                <Button variant="contained" color="info" sx={{ borderRadius: "1rem", boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)!important",
                        width: "fit-content", alignSelf: "flex-end", fontFamily:"inherit" }} disableElevation disableRipple>
                    نمایش بیشتر
                </Button>
            </Box>
           
            <Box sx={classes.box}>
                <Typography variant="h6" sx={{ fontFamily:"inherit" }}>پربازدید ترین ها</Typography>
                <Box sx={classes.cardBox}>
                    {VideoCards.map((video) => (
                        <VideoCard name={video.title} imageSrc={video.imageURL} publishDate={video.publishDate} publisher={video.publisher} view={video.viewCount}
                        onClick={() => window.location.assign(`/v/${video.id}`)} />
                    ))}
                </Box> 
                <Button variant="contained" color="info" sx={{ borderRadius: "1rem", boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)!important",
                        width: "fit-content", alignSelf: "flex-end", fontFamily:"inherit" }} disableElevation disableRipple>
                    نمایش بیشتر
                </Button>
            </Box>

            <Box sx={classes.box}>
                <Typography variant="h6" sx={{ fontFamily:"inherit" }}>جدید ترین ها</Typography>
                <Box sx={classes.cardBox}>
                    {VideoCards.map((video) => (
                        <VideoCard name={video.title} imageSrc={video.imageURL} publishDate={video.publishDate} publisher={video.publisher} view={video.viewCount}
                        onClick={() => window.location.assign(`/v/${video.id}`)} />
                    ))}
                </Box> 
                <Button variant="contained" color="info" sx={{ borderRadius: "1rem", boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)!important",
                        width: "fit-content", alignSelf: "flex-end", fontFamily:"inherit" }} disableElevation disableRipple>
                    نمایش بیشتر
                </Button>
            </Box>
            
            <Box sx={{ marginTop: "5%" }}>
                <Box sx={{ display: "flex", direction: "rtl", backgroundColor: "#f7f7f7", padding: "1rem 2rem"  }}>
                    برترین کانال ها
                </Box>
                <ChannelContainer name="سریال جیران" view={4} channels={channels} />
            </Box>
        </Box>
    );
};

export default Main;
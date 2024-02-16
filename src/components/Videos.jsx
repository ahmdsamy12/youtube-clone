/* eslint-disable react/prop-types */
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

// eslint-disable-next-line react/prop-types
const Videos = ({videos, direction}) => {
    if (!videos) return "Loading...";


  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}> 
    {videos.map((video, i) => (
        <Box key={i}>
            {video.id.videoId && <VideoCard video={video}/>}
            {video.id.channelId && <ChannelCard video={video}/> }
        </Box>
    ))}
    </Stack>
  )
}

export default Videos
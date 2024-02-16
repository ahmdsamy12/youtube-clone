/* eslint-disable react/prop-types */
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ video,  marginTop}) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop: marginTop
      }}
    >
      <Link to={`/channel/${video?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={video?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={video?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {video?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />

            {video?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(video?.statistics?.subscriberCount).toLocaleString()}{" "}
                Subscribers
              </Typography>
            )}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;

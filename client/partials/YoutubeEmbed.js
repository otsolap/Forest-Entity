import React from "react";
import { YouTubeGetID } from "@/utils/index";

const YoutubeEmbed = ({ src, className, autoplay }) => {
  return (
    <iframe
      title="Forest Entity"
      className={`youtube ${className}`}
      allow="autoplay; encrypted-media"
      allowFullScreen
      src={`https://www.youtube.com/embed/${YouTubeGetID(src)}?controls=${autoplay == false ? 1 : 0}&playsinline=0&rel=0&modestbranding=1&autoplay=${autoplay == true ? 1 : 0}&mute=${autoplay == true ? 1 : 0}&loop=${autoplay == true ? 1 : 0}
      `}
    />
  );
};

export default YoutubeEmbed;

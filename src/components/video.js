import React from "react"
import * as VideoStyles from "./video.module.css"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className={VideoStyles.videoContainer}>
    <iframe
      className={VideoStyles.video}
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video

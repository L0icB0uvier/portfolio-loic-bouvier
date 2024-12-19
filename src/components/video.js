import React from "react"
import * as VideoStyles from "../css/video.module.css"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
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
)
export default Video

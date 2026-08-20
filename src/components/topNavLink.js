import React, { useState, useEffect } from "react"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import IconButton from "@mui/material/IconButton"

const TopNavLink = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    if (showBelow) {
       const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
          if (!show) setShow(true)
        } else {
          if (show) setShow(false)
        }
      }
      
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [showBelow, show]) // Dépendances ajoutées pour éviter les listeners en boucle

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          aria-label="to top"
          component="span"
          sx={{
            zIndex: 10,
            position: "fixed",
            right: "1vh",
            backgroundColor: "#282828",
            color: "white",
            "&:hover, &.Mui-focusVisible": {
              transition: "0.3s",
              color: "white",
              backgroundColor: "#91161a",
            },
            xs: {
              right: "5%",
              backgroundColor: "#282828",
              bottom: "4vh",
            },
            lg: {
              right: "2%",
              bottom: "4vh",
            },
          }}
        >
          <ExpandLessIcon />
        </IconButton>
      )}
    </div>
  )
}

export default TopNavLink
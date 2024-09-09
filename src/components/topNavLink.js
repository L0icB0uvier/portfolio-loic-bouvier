import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles(theme => ({
  toTop: {
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
    [theme.breakpoints.up("xs")]: {
      right: "5%",
      backgroundColor: "#282828",
      bottom: "4vh",
    },
    [theme.breakpoints.up("lg")]: {
      right: "2%",
      bottom: "4vh",
    },
  },
}))

const TopNavLink = ({ showBelow }) => {
  const classes = useStyles()

  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          className={classes.toTop}
          aria-label="to top"
          component="span"
        >
          <ExpandLessIcon />
        </IconButton>
      )}
    </div>
  )
}
export default TopNavLink

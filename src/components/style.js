const styles = (theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      color: "gray",
      display: "flex",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "15px",
      color: "gray",
      display: "flex",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
      color: "gray",
      display: "flex",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "20px",
      color: "gray",
      display: "flex",
    },
  },
  img: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "inline",
      width: "50px",
      height: "35px",
    },
  },
  second: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
      color: "gray",
      display: "flex",
      float: "right",
    },
  },
  lpu: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      color: "white",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "30px",
      color: "white",
      display: "flex",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "35px",
      color: "white",
      display: "block",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "40px",
      color: "white",
      display: "flex",
    },
  },
});

export { styles };

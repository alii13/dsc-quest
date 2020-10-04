const styles = (theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      color: "gray",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "15px",
      color: "gray",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
      color: "gray",
    },
    [theme.breakpoints.up("mg")]: {
      fontSize: "20px",
      color: "gray",
    },
  },
  myCards: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
      width: "200px",
    },
    [theme.breakpoints.up("sm")]: {
      display: "block",
      width: "270px",
      marginLeft: "10px",
      float: "left",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
      width: "300px",
      marginLeft: "10px",
      float: "left",
    },
  },
});

export { styles };

import { Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./mystyle.css";
import "animate.css";
import { styles } from "./style";

class HeaderPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid
          container
          style={{
            backgroundColor: "white",
            width: "100vw",
            height: "60px",
            borderBottom: "1px solid gray",
            padding: "10px",
          }}
        >
          <Grid xs={6}>
            <a href="https://dsc.community.dev/lovely-professional-university/">
              <h1 className={classes.root}>
                <img
                  src="https://e7.pngegg.com/pngimages/444/418/png-clipart-google-i-o-google-developers-google-chrome-google-chart-api-google-angle-text-thumbnail.png"
                  alt="googlecloud"
                  style={{ width: "50px", height: "35px" }}
                />
                Developer Student Club
              </h1>{" "}
            </a>
          </Grid>
          <Grid xs={6} style={{ textAlign: "right" }}>
            <a href="https://cloud.google.com/blog/topics/training-certifications/expanding-at-home-learning">
              <h1 className={classes.second}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/google-cloud-2038785-1721675.png"
                  alt="googlecloud"
                  className={classes.img}
                />
                30 Days of Google Cloud
              </h1>{" "}
            </a>
          </Grid>
        </Grid>
        <div
          className="setHead"
          style={{ paddingTop: "100px", paddingLeft: "50px" }}
        >
          <Grid container>
            <p className="animate__animated animate__backInLeft">
              <p className={classes.lpu}>
                Lovely Professional University <br />
                30 Days of Google Cloud Ranking
              </p>
            </p>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HeaderPage);

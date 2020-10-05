import { Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import cloud from "./googlecloud.png"
import svg from "./navbar-brand.svg"
import "./mystyle.css";
import "animate.css";
import { styles } from "./style";
import SocialIcons from "./main/SocialIcons";

class HeaderPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid
          container className="navbar"
          style={{
            backgroundColor: "white",
            width: "100vw",
            height: "60px",
            borderBottom: "1px solid gray",
            padding: "10px",
          }}
        >
          <Grid xs={6}>
            <div className="header__navbar-brand align-center full-size">
            <img src={svg} alt="Developer Student Club" className="navbar__brand__image"/>
            </div>
          </Grid>
        
          <Grid xs={6} style={{ textAlign: "right" }} className="right__navbar__brand">
          <div className="">
            <img src={cloud} alt="google cloud" class="right__brand"/>
            </div>
          </Grid>
        </Grid>
        
        <div
          className="setHead"
         
        >
          <div className="overlay">
          
          <Grid container className="full-size align-center">
          <p className="animate__animated animate__backInLeft m-5">
              <h1 className={classes.lpu}>
                Lovely Professional University
              </h1>
              <SocialIcons/>
            </p>
          </Grid>
        </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HeaderPage);

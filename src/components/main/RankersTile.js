import React from 'react'
import {
    Avatar,
    Badge,
    Button,
    Card,
    Divider,
    Grid,
    Tab,
    Tabs,
    withStyles,
  } from "@material-ui/core";
  import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
  import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
  import { Label, Table } from "semantic-ui-react";
  import { styles } from "./style.js";
  import dataQuest from "../../data/quest.json";
  import dataSkill from "../../data/skills.json";
  import WindowDimensions from "./WindowDimensions.js"
  import "./RankersTile.css"
function RankersTile(props) {
    const { classes } = props;
    const {width} = WindowDimensions()
   // console.log(WindowDimensions())
    const info = props.info, rank= props.rank, big= props.big;
    let style;
    if(big && width >576){
     style ={
        textAlign: "center",
        paddingTop: "10px",
        display: "inline-block",
        transform: "scale(1.2)",
        alignItems:"center"
      }
    }else{ style ={
        textAlign: "center",
        paddingTop: "10px",
        display: "inline-block",
        alignItems:"center"
      }

    }

    console.log(classes.myCards);
    return (
        <>
        <Card
                   className={classes.myCards}
                  
                  style={style}
                >
                  <Badge
                    overlap="circle"
                    badgeContent={`${rank}`
                    }
                   className={`rank${rank}`}
                    style={{ color: "red", fontSize: "20px", }}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                  >
                    <Avatar
                      src={info.img}
                      style={{ width: "120px", height: "120px" }}
                    />
                  </Badge>
                  <br />
                  <p>{info.name}</p>
                  <br />

                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#4285F4;", color: "#fff" }}
                  >
                    {info.quest} completed
                  </Button>
                  <br />
                  <br />
                </Card>
            
        </>
    )
}

export default withStyles(styles)(RankersTile);
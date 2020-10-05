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
import React, { Component } from "react";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import { Label, Table } from "semantic-ui-react";
import { styles } from "./style";
import dataQuest from "../../data/quest.json";
import dataSkill from "../../data/skills.json";
import RankersTile from "./RankersTile";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 0,
 
    };
  }

  render() {
    const { classes,width } = this.props;

    console.log(width)

    let rank;
    const rankingTiles = dataQuest.sort((a, b) => a.quest - b.quest).slice(-3)
    return (
      <div
        style={{ height: "900px", backgroundColor: "#e3f2fd", width: "100vw" }}
      >
        {/**Head section */}
        <Grid container style={{ height: "80px" }}>
          <Grid xs={6} style={{ textAlign: "center", paddingTop: "25px" }}>
           
          </Grid>
          <Grid xs={6}>
            <Tabs
              value={this.state.type}
              onChange={(ev, value) => this.setState({ type: value })}
              style={{ float: "right" }}
            >
              <Tab icon={<FitnessCenterIcon />} label="Quest" />
              <Tab icon={<EmojiObjectsIcon />} label="Skill" />
            </Tabs>
          </Grid>
        </Grid>
        {/**Display of cards */}
        <h1 style={{textAlign:"center", fontWeight:"bolder"}}>Top Contributors</h1>
        <Grid container style={{ paddingTop: "100px" }}>
          <Grid xs={0} sm={12} style={{ textAlign: "center" }}>
          {(width<576)?(
            <div>
           <RankersTile info ={rankingTiles[1]} rank={1}/>
           <RankersTile info ={rankingTiles[0]} rank={2}/>
           <RankersTile info ={rankingTiles[2]} rank={3}/>
           </div>
          ):(
            <div>
            <RankersTile info ={rankingTiles[1]} rank={2}/>
            <RankersTile info ={rankingTiles[0]} rank={1} big/>
            <RankersTile info ={rankingTiles[2]} rank={3}/>
            </div>
          )}
        

          </Grid>
          <Grid xs={12} sm={0}></Grid>
        </Grid>
        <Grid container className="tableWrapper" style={{ padding: "50px" }}>
          <Table celled small>
            <Table.Body>
              {this.state.type === 0
                ? dataQuest
                    .sort((a, b) => a.quest - b.quest)
                    .reverse()
                    .map((info, index) => (
                      <Table.Row>
                        <Table.Cell className={`firstCell f${index}`}>
                          {index === 0 ? (
                            <div className="center">
                            <Label className="firstRibbon"  ribbon>#1</Label>
                            <Avatar src={info.img} />
                            </div>
                          ) : index === 1 ? (
                            <div  className="center">
                            <Label className="secondRibbon" ribbon>#2</Label>
                            <Avatar src={info.img} />
                            </div>
                          ) : index === 2 ? (
                            <div  className="center">
                            <Label className="thirdRibbon" ribbon>#3</Label>
                            <Avatar src={info.img} />
                            </div>
                          ) : (
                            <Label className="blueRibbon"><p>{index + 1}</p></Label>
                          )}
                        </Table.Cell>
                        <Table.Cell className="secondCell"><p>{info.name}</p></Table.Cell>
                        <Table.Cell className="thirdCell"><p>Quest: <span className="counts">{info.quest}</span></p></Table.Cell>
                      </Table.Row>
                    ))
                : dataSkill
                    .sort((a, b) => a.skill - b.skill)
                    .reverse()
                    .map((info, index) => (
                      <Table.Row>
                        <Table.Cell>
                          {index === 0 ? (
                            <Label ribbon>#1</Label>
                          ) : index === 1 ? (
                            <Label  ribbon>#2</Label>
                          ) : index === 2 ? (
                            <Label className="thirdRibbon" ribbon>#3</Label>
                          ) : (
                            <Label className="noRibbon">{index + 1}</Label>
                          )}
                        </Table.Cell>
                        <Table.Cell>
                          <Avatar src={info.img} />
                        </Table.Cell>
                        <Table.Cell>{info.name}</Table.Cell>
                        <Table.Cell>Quest: {info.skill}</Table.Cell>
                      </Table.Row>
                    ))}
            </Table.Body>
          </Table>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MainPage);

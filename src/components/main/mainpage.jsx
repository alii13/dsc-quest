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

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 0,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{ height: "900px", backgroundColor: "#e3f2fd", width: "100vw" }}
      >
        {/**Head section */}
        <Grid container style={{ height: "80px" }}>
          <Grid xs={6} style={{ textAlign: "center", paddingTop: "25px" }}>
            <p className={classes.root}> Top Contributor</p>
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
        <Grid container style={{ paddingTop: "100px" }}>
          <Grid xs={0} sm={12} style={{ textAlign: "center" }}>
            {dataQuest
              .sort((a, b) => a.quest - b.quest)
              .slice(-3)
              .map((info, index) => (
                <Card
                  className={classes.myCards}
                  style={{
                    textAlign: "center",
                    paddingTop: "10px",
                    display: "inline-block",
                  }}
                >
                  <Badge
                    overlap="circle"
                    badgeContent={
                      index === 0
                        ? "3"
                        : index === 1
                        ? "2"
                        : index === 2
                        ? "1"
                        : ""
                    }
                    style={{ color: "red", fontSize: "20px" }}
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
                    style={{ backgroundColor: "#e3f2fd", color: "#4dd0e1" }}
                  >
                    {info.quest} completed
                  </Button>
                  <br />
                  <br />
                </Card>
              ))}
          </Grid>
          <Grid xs={12} sm={0}></Grid>
        </Grid>
        <Grid container style={{ padding: "50px" }}>
          <Table celled>
            <Table.Body>
              {this.state.type === 0
                ? dataQuest
                    .sort((a, b) => a.quest - b.quest)
                    .reverse()
                    .map((info, index) => (
                      <Table.Row>
                        <Table.Cell>
                          {index === 0 ? (
                            <Label ribbon>First</Label>
                          ) : index === 1 ? (
                            <Label ribbon>Second</Label>
                          ) : index === 2 ? (
                            <Label ribbon>Third</Label>
                          ) : (
                            <Label>{index + 1}</Label>
                          )}
                        </Table.Cell>
                        <Table.Cell>
                          <Avatar src={info.img} />
                        </Table.Cell>
                        <Table.Cell>{info.name}</Table.Cell>
                        <Table.Cell>Quest: {info.quest}</Table.Cell>
                      </Table.Row>
                    ))
                : dataSkill
                    .sort((a, b) => a.skill - b.skill)
                    .reverse()
                    .map((info, index) => (
                      <Table.Row>
                        <Table.Cell>
                          {index === 0 ? (
                            <Label ribbon>First</Label>
                          ) : index === 1 ? (
                            <Label ribbon>Second</Label>
                          ) : index === 2 ? (
                            <Label ribbon>Third</Label>
                          ) : (
                            <Label>{index + 1}</Label>
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

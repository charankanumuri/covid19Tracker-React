import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./cards.module.css";
import cx from "classnames";

const Cards = ({ data: { positive, negative, death, lastModified } }) => {
  console.log(positive, negative, death);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={28756489} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastModified).toDateString()}
            </Typography>
            <Typography variant="body2">
              Active Covid-19 confirmed count
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={74582825} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastModified).toDateString()}
            </Typography>
            <Typography variant="body2">Covid-19 Recovered count</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={515151} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastModified).toDateString()}
            </Typography>
            <Typography variant="body2">
              No. of Deaths caused by Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;

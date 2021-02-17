import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import cx from "classnames";
import styles from "./General.module.css";

const General = ({ data: { confirmed, recovered, deaths }, country }) => {
  let selected = "the World";

  if (!confirmed) {
    return "Loading...";
  }
  if(country){
    selected = country;
  }
  return (
    <div className={styles.container}>
      {/* <Grid container justify="center">
        <CardContent className={styles.content1}>
          <Typography justify="center" variant="h5">COVID-19 CORONAVIRUS PANDEMIC</Typography>
        </CardContent>
      </Grid>
      <Grid container justify="center">
        <CardContent className={styles.content1}>
          <Typography color="textSecondary">
            {"Last updated: " + new Date(lastUpdate).toDateString()}
          </Typography>
        </CardContent>
      </Grid> */}
      <Grid container spacing={3} justify="center">
        <Card className={styles.root}>
          <CardContent className={styles.center}>
              <h1 className={styles.head}>Infected</h1>
              <Typography variant="h5" className={styles.infected}>
                  <CountUp start={0} end={confirmed.value} duration={2.5} separator="." />
              </Typography>
              <Typography variant="body2">
                  Number of Active Cases of COVID-19 in {selected}
              </Typography>
          </CardContent>
        </Card>
        {/* <Grid Grid item component={Card} xs={12} md={3} className={cx(styles.card)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
                <CountUp start={0} end={confirmed.value} duration={2.5} separator="." />
            </Typography>
            <Typography variant="body2">
              Number of Active Cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
                <CountUp start={0} end={recovered.value} duration={2.5} separator="." />
            </Typography>
            <Typography variant="body2">
              Number of Recoveriers From COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
                <CountUp start={0} end={deaths.value} duration={2.5} separator="." />
            </Typography>
            <Typography variant="body2">
              Number of Deaths Caused by COVID-19
            </Typography>
          </CardContent>
        </Grid> */}
      </Grid>
      <Grid container spacing={3} justify="center">
        <Card className={styles.root}>
          <CardContent className={styles.center}>
              <h1 className={styles.head}>Recovered</h1>
              <Typography variant="h5" className={styles.infected}>
                  <CountUp start={0} end={recovered.value} duration={2.5} separator="." />
              </Typography>
              <Typography variant="body2">
                Number of Recoveriers From COVID-19 in {selected}
              </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Card className={styles.root}>
          <CardContent className={styles.center}>
              <h1 className={styles.head}>Deaths</h1>
              <Typography variant="h5" className={styles.infected}>
                  <CountUp start={0} end={deaths.value} duration={2.5} separator="." />
              </Typography>
              <Typography variant="body2">
                Number of Deaths Caused by COVID-19 in {selected}
              </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default General;

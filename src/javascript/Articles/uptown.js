// React
import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Image
import UptownSite from '../../media/Stephen/Uptownwebsite.png';

// Styling
import { makeStyles, createStyles } from '@material-ui/core/styles';

////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme) =>
  createStyles({
    info: {
      paddingTop: '2rem',
    },
    grid: {
      width: '85%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    image: {
      width: '100%',
    },
    title: {
      fontSize: '40px',
      fontWeight: '300',
    },
    jobContainer: {
      paddingBottom: '20px',
    },
    job: {
      fontSize: '15px',
      fontWeight: '200',
    },
    description: {
      fontSize: '15px',
      fontWeight: '200',
    }
  }),
);

////////////////////////////////////////////
// App
function Uptown() {
  const classes = useStyles();
  ///////////// 
  // HTML
  return (
    <div className={classes.info}>
      <Grid container className={classes.grid} justify='center' spacing={1}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid container className={classes.grid} justify='center' style={{ paddingTop: '2%' }}>
            <Grid item xs={12}>
              <span className={classes.title}>
                Uptown
              </span>
            </Grid>
            <Grid item xs={12} className={classes.jobContainer}>
              <span className={classes.job}>
                Project Manager
              </span>
            </Grid>
            <Grid item xs={12}>
              <span className={classes.description}>
                Uptown is a luxury real estate lead distribution company that generates hundreds of leads across 50+ states.
                I worked as the Project Manager for this project until its sale in February 2021. My responsibilities included
                managing contract programmers for micro-site creations, and setting up SMTP relays, VoIP2, phone campaign management,
                client setup, and much more.
              </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img className={classes.image} src={UptownSite} alt="Uptown website picture" />
        </Grid>
      </Grid>
    </div >
  );
}

export default Uptown;

// React
import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Image
import FourMSite from '../../media/4M/4m1.png';

// Styling
import { makeStyles, createStyles } from '@material-ui/core/styles';

////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme) =>
  createStyles({
    info: {
      paddingTop: '1rem',
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
          <img className={classes.image} src={FourMSite} alt="4M management 4M aerial website picture" />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid container className={classes.grid} justify='center' style={{ paddingTop: '2%' }}>
            <Grid item xs={12}>
              <span className={classes.title}>
                4M Aerial
              </span>
            </Grid>
            <Grid item xs={12} className={classes.jobContainer}>
              <span className={classes.job}>
                Co-founder
              </span>
            </Grid>
            <Grid item xs={12}>
              <span className={classes.description}>
                4M Aerial is an imaging company which has provided companies and private clients with high quality pictures and
                videos for numerous engineering sites, insurance claims, progress reports, and private blogs. I have worked as a
                founder, pilot, and front-end developer in 4M Aerial for 8+ years working alongside
                AMEC, Federation Cooperation, RCMP, Stantec Consulting Ltd, Wildlife Fredration, Ducks Unlimited, and more!
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div >
  );
}

export default Uptown;

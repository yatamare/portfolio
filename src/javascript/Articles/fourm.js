// React
import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Image
import FourMSite from '../../media/4M/4m3.png';

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
                4M Management
              </span>
            </Grid>
            <Grid item xs={12} className={classes.jobContainer}>
              <span className={classes.job}>
                Front-end Developer
              </span>
            </Grid>
            <Grid item xs={12}>
              <span className={classes.description}>
                Since 4M Management became a company 10+ years ago I had always helped out with the technical responsiblities of
                the company. Whether it was on-site technical assistance with the computers or further development needs. I've been
                in charge of hosting, managing and development of the 4M Management website and all subsidiary companies web
                requirments for the past 5+ years.
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div >
  );
}

export default Uptown;

// React
import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Image
import VybeSite from '../../media/Stephen/Vybeliving.png';

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
                Vybeliving
              </span>
            </Grid>
            <Grid item xs={12} className={classes.jobContainer}>
              <span className={classes.job}>
                Developer Support
              </span>
            </Grid>
            <Grid item xs={12}>
              <span className={classes.description}>
                Vybeliving is a roomsharing website for the San Francisco bay area. They supply tons of houses across 9 neighborhoods
                where individuals can apply to be part of the Vybe Family. Vybe does a screening for compatibility and places you with
                roommates you will connect with. They house exclusive events and gatherings for the Vybe Family were you get meet new
                friends and grow you social circle. I was brought onto the team as a representive of the Stephen Noton Co., Ltd to
                assist with site development and site repairs. I manage a catalog of bugs, help design new features, and assist the
                developer by doing repairs, bug fixes, and quality assurance.
              </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img className={classes.image} src={VybeSite} alt="Vybeliving website picture" />
        </Grid>
      </Grid>
    </div >
  );
}

export default Uptown;

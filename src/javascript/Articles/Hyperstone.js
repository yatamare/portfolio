// React
import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Image
import Hyper from '../../media/Hyperstone/hyperstone.png';

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
function Hyperstone() {
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
                Hyperstone
              </span>
            </Grid>
            <Grid item xs={12} className={classes.jobContainer}>
              <span className={classes.job}>
                Creator
              </span>
            </Grid>
            <Grid item xs={12}>
              <span className={classes.description}>
                One evening I was playing a board game called Alchemist with friends and some questions about the rules came up.
                I flipped though the book and noticed it had a single player rule set. The next day I decided to try it out and to my
                suprise it was incredibly fun but seemed to be an after thought of the game as it lacked depth and balance. I took the
                base idea of hero powers and a board that would reset if conditions were met and developed additional mechanics, heroes,
                rules, and scoring for purely my own enjoyment. Over the years I've slowly patched the rules, balance changes and added
                card art for some of my favorites.
              </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img className={classes.image} src={Hyper} alt="Hyperstone Video Game Art" />
        </Grid>
      </Grid>
    </div >
  );
}

export default Hyperstone;

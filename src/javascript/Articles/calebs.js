// React
import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Image
import Caleb from '../../media/CalebsPit/pit2.png';

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
function Calebs() {
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
                Caleb's Pit
              </span>
            </Grid>
            <Grid item xs={12} className={classes.jobContainer}>
              <span className={classes.job}>
                Developer
              </span>
            </Grid>
            <Grid item xs={12}>
              <span className={classes.description}>
                Caleb's Pit is rogue-like game that features an evolving field of play in which after a monster is slain it drops a
                corresponding environmental terrain that changes the shape of the field of play. Each terrain type effects the
                surronding area's terrains when dropped. Alongisde varying power-ups and potions its provided a unique play
                experience every time.
                <br /><br />
                The project's technical strength was a fully functioning AI pathing system which could dynamically evaluate a
                consitantly changing map. Each elemental type of AI has its owm unique movement parameters while being light
                weight enough to have several hundred AI pathing within each frame.
              </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img className={classes.image} src={Caleb} alt="Caleb's Pit Art" />
        </Grid>
      </Grid>
    </div >
  );
}

export default Calebs;

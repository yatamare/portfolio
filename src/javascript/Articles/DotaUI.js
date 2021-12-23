// React
import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Image
import Dota from '../../media/Dota/dotaSuggestions.png';

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
function DotaUI() {
  const classes = useStyles();
  ///////////// 
  // HTML
  return (
    <div className={classes.info}>
      <Grid container className={classes.grid} justify='center' spacing={1}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img className={classes.image} src={Dota} alt="Dota UI enchancer Prototype" />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid container className={classes.grid} justify='center' style={{ paddingTop: '2%' }}>
            <Grid item xs={12}>
              <span className={classes.title}>
                Dota UI Enchancer
              </span>
            </Grid>
            <Grid item xs={12} className={classes.jobContainer}>
              <span className={classes.job}>
                Developer
              </span>
            </Grid>
            <Grid item xs={12}>
              <span className={classes.description}>
                Our team's goal for the Dota UI Enhancer was to add additional features to make character selection in MOBA games a
                more socially positive experience which required us to redesign the interface to include the new tools. The
                redesigned interface gives players the ability to communicate strategies at an abstracted level meant to reduce
                toxic behavior and overcome language barriers. This design process required extensive user testing and multiple
                prototypes of both low and medium fidelity.
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div >
  );
}

export default DotaUI;

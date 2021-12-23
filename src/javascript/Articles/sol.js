// React
import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Image
import SolTown from '../../media/Sol/SolTown.png';
import SolGame from '../../media/Sol/SolGame.png';
import SolHouse from '../../media/Sol/SolHouse.png';

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
function Sol() {
  const classes = useStyles();
  ///////////// 
  // HTML
  return (
    <div className={classes.info}>
      <Grid container className={classes.grid} justify='center' spacing={1}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img className={classes.image} src={SolTown} alt="Sol Art" />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid container className={classes.grid} justify='center' style={{ paddingTop: '2%' }}>
            <Grid item xs={12}>
              <span className={classes.title}>
                Sol
              </span>
            </Grid>
            <Grid item xs={12} className={classes.jobContainer}>
              <span className={classes.job}>
                Developer
              </span>
            </Grid>
            <Grid item xs={12}>
              <span className={classes.description}>
                The Sol project was an emergant open world sandbox.
                The game had an array of features: town rebuilding, farming, crafting, harvesting, exploration, and combat.
                I worked as the primary developer for the inventory system and all interactions involving an item.
                This included: UI design, harvesting, farming, looting, crafting, equipment, resources, and town rebuilding.
                This project gave me experience working in a medium sized team and using the Agile software development process.
                Programmed within the Unity Engine using C# and was builted within a 10 person team.
              </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img className={classes.image} src={SolHouse} alt="Sol Art" />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img className={classes.image} src={SolGame} alt="Sol Art" />
        </Grid>
      </Grid>
    </div >
  );
}

export default Sol;

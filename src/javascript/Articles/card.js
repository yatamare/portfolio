// React
import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Images
import Sol from "../../media/Sol/SolTown.png";
import Uptown from "../../media/Stephen/Uptownwebsite.png";
import Vybe from "../../media/Stephen/Vybeliving.png";
import FourM from '../../media/4M/4m3.png';
import FourMa from '../../media/4M/4m1.png';
import Caleb from '../../media/CalebsPit/pit2.png';
import Dota from '../../media/Dota/dotaSuggestions.png';
import Hyper from '../../media/Hyperstone/hyperstone.png';



// Styling
import { makeStyles, createStyles } from '@material-ui/core/styles';

////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme) =>
  createStyles({
    info: {
      paddingTop: '1rem',
      marginleft: 'auto',
      marginRight: 'auto',
    },
    grid: {
      textAlign: 'center',
    },
    cardContainer: {
      width: '70%',
      paddingTop: '3rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '2rem',
    },
    card: {
      height: '200px',
      marginLeft: '2%',
      marginRight: '2%',
      marginBottom: '2%',
    },
    cardText: {
      fontSize: '1.5rem',
      fontWeight: '200',
    },
    cardTitleContainer: {
      width: '62%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    cardTitle: {
      fontSize: '25px',
      fontWeight: '200',
      float: 'left',
    },
    imageContainer: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      overflow: "hidden",
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    image: {
      minWidth: "150%",
      width: '1000px',
      marginLeft: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
    },
    imageTwo: {
      minWidth: "150%",
      width: '1000px',
      marginLeft: '50%',
      transform: 'translateX(-50%) translateY(-30%)',
    }
  }),
);

////////////////////////////////////////////
// App
function Card() {
  const classes = useStyles();
  ///////////// 
  // HTML
  return (
    <div className={classes.info}>
      <div className={classes.cardContainer}>
        <Grid container className={classes.grid} justify='center' spacing={0}>
          {/* Games */}
          <Grid item xs={12} sm={1}>
            <Paper className={classes.card} elevation={8}>
              <div className={classes.imageContainer}>
                <img className={classes.image} src={Sol} alt="Sol Game Link" />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Paper className={classes.card} elevation={8}>
              <div className={classes.imageContainer}>
                <img className={classes.imageTwo} src={Caleb} alt="Caleb Game Link" />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Paper className={classes.card} elevation={8}>
              <div className={classes.imageContainer}>
                <img className={classes.imageTwo} src={Dota} alt="Dota UI Enchancer Link" />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Paper className={classes.card} elevation={8}>
              <div className={classes.imageContainer}>
                <img className={classes.image} src={Hyper} alt="Hyperstone Game Link" />
              </div>
            </Paper>
          </Grid>
          {/* Dev */}
          <Grid item xs={12} sm={1}>
            <Paper className={classes.card} elevation={8}>
              <div className={classes.imageContainer}>
                <img className={classes.imageTwo} src={FourM} alt="4M Management Link" />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Paper className={classes.card} elevation={8}>
              <div className={classes.imageContainer}>
                <img className={classes.image} src={Vybe} alt="Vybeliving website link" />
              </div>
            </Paper>
          </Grid>
          {/* Management */}
          <Grid item xs={12} sm={1}>
            <Paper className={classes.card} elevation={8}>
              <div className={classes.imageContainer}>
                <img className={classes.imageTwo} src={FourMa} alt="4M Aerial Link" />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Paper className={classes.card} elevation={8}>
              <div className={classes.imageContainer}>
                <img className={classes.imageTwo} src={Uptown} alt="Uptown Website Link" />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div >
  );
}

export default Card;

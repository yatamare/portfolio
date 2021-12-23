// React
import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Images
import FourM from '../../media/4M/4M.png';
import SEO from '../../media/Stephen/SEO.png';
import Vybe from '../../media/Stephen/Vybelivinglogo.png';
import Uptown from '../../media/Stephen/Uptown.png';


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
      textAlign: 'center',
    },
    titleContainer: {
      width: '100%',
      paddingTop: '40px',
      textAlign: 'center',
    },
    titleFont: {
      fontSize: '40px',
      fontWeight: '200',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    experienceContainer: {
      paddingTop: '3%',
      textAlign: 'center',
      width: '75%',
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    experienceElements: {
      width: '70%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '20px',
    },
    experienceText: {
      fontSize: '1rem',
      fontWeight: '200',
    },
    logo: {
      width: '100%',
    },
  }),
);

////////////////////////////////////////////
// App
function Experience() {
  const classes = useStyles();
  ///////////// 
  // HTML
  return (
    <div className={classes.info}>
      <Grid container spacing={0} className={classes.gridValues}>

      </Grid>
      <Grid container className={classes.grid}>
        <Grid item sm={12} xs={12}>
          <div className={classes.titleContainer}>
            <span className={classes.titleFont}>Experience</span>
          </div>
        </Grid>
      </Grid>
      {/* SEO */}
      <Grid container className={classes.experienceContainer}>
        <Grid item sm={3} xs={6}>
          <nav>
            <a href="https://www.stephen.ca" target="_blank" style={{ textDecoration: 'none' }}>
              <Paper className={classes.experienceElements} elevation={3}>
                <img src={SEO} className={classes.logo} style={{ backgroundColor: '#f0f9f6' }} />
                <span className={classes.experienceText}>Contractor</span>
              </Paper>
            </a>
          </nav>
        </Grid>
        {/* 4M */}
        <Grid item sm={3} xs={6}>
          <nav>
            <a href="http://www.4mmanagement.com/" target="_blank" style={{ textDecoration: 'none' }}>
              <Paper className={classes.experienceElements} elevation={3}>
                <img src={FourM} className={classes.logo} style={{ backgroundColor: '#2d2e2e' }} />
                <span className={classes.experienceText}>Co-Founder</span>
              </Paper>
            </a>
          </nav>
        </Grid>
        {/* Uptown */}
        <Grid item sm={3} xs={6}>
          <nav>
            <a href="http://www.uptown.com/" target="_blank" style={{ textDecoration: 'none' }}>
              <Paper className={classes.experienceElements} elevation={3}>
                <img src={Uptown} className={classes.logo} style={{ backgroundColor: '#57524f' }} />
                <span className={classes.experienceText}>Project Manager</span>
              </Paper>
            </a>
          </nav>
        </Grid>
        {/* Vybe */}
        <Grid item sm={3} xs={6}>
          <nav>
            <a href="http://www.vybeliving.com/" target="_blank" style={{ textDecoration: 'none' }}>
              <Paper className={classes.experienceElements} elevation={3}>
                <img src={Vybe} className={classes.logo} style={{ backgroundColor: '#191919' }} />
                <span className={classes.experienceText}>Developer</span>
              </Paper>
            </a>
          </nav>
        </Grid>
      </Grid>
    </div>
  );
}

export default Experience;

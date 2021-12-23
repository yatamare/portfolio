// React
import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import ComputerIcon from '@material-ui/icons/DesktopWindowsOutlined';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenterOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import ArtTrackIcon from '@material-ui/icons/BrushOutlined';

// Image
import Selfie from '../../media/selfie.jpg';

// Styling
import { makeStyles, createStyles } from '@material-ui/core/styles';

////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme) =>
  createStyles({
    info: {
      paddingTop: '2rem',
    },
    gridValues: {
      textAlign: 'center',
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    grid: {
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    title: {
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
    pictureContainer: {
      width: '100%',
    },
    picture: {
      width: '30%',
      minWidth: '200px',
    },
    text: {
      fontSize: '1.2rem',
      fontWeight: '200',
      paddingTop: '60px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '90%',
    },
    altContainer: {
      paddingTop: '2%',
    },
    altText: {
      fontSize: '15px',
      fontWeight: '200',
    }
  }),
);

////////////////////////////////////////////
// App
function AboutMe() {
  const classes = useStyles();
  ///////////// 
  // HTML
  return (
    <div className={classes.info}>
      {/* Values */}
      <Grid container spacing={0} className={classes.gridValues}>
        <Grid item xs={6} sm={3}>
          <ComputerIcon style={{ fontSize: 60 }} />
          <br />
          <span>Developer</span>
        </Grid>
        <Grid item xs={6} sm={3}>
          <BusinessCenterIcon style={{ fontSize: 60 }} />
          <br />
          <span>Entrepreneur</span>
        </Grid>
        <Grid item xs={6} sm={3}>
          <PersonIcon style={{ fontSize: 60 }} />
          <br />
          <span>Project Manager</span>
        </Grid>
        <Grid item xs={6} sm={3}>
          <ArtTrackIcon style={{ fontSize: 60 }} />
          <br />
          <span>Artist</span>
        </Grid>
      </Grid>
      <Grid container spacing={0} justify="center" className={classes.grid}>
        {/* About Me title */}
        <Grid item sm={3} xs={12}>
          <div className={classes.title}>
            <span className={classes.titleFont}>About Me</span>
          </div>
          {/* Picture of me */}
          <div className={classes.pictureContainer}>
            <img src={Selfie} className={classes.picture} />
          </div>
        </Grid>
        {/* Description */}
        <Grid item sm={6} xs={12}>
          <div className={classes.text}>
            <span style={{ fontSize: '20px', fontWeight: '300', }}>
              With each new problem I find myself more capable than before.
            </span>
            <br /><br />
            <span>
              In 2012 I co-founded one of Saskatchewan earliest UAV imaging company and since then I've accumulated 8+ years
              of business experience while working alongside both local farmers and multi-industry giants. During those
              8 years business experience wasn't the only thing I was accumulating. In 2020 I graduated with distinction from the
              University of Saskatchewan with an Interactive System Design degree (and a minor in Art) and was given the
              opportunity to work alongside Stephen Noton, a leading SEO consultant in over 60 countries. As a representive of Stephen
              I am focused on two important projects. Uptown, a luxury real estate lead distribution company and a San Francisco
              room sharing company called Vybeliving. I work as a Project Manager, Developer Support and Quality
              Assurance for these companies while they continue to grow.
            </span>
            <br /><br />
            <span className={classes.altText}>
              Prairie Born, Prairie Raised, Montreal Living
          </span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMe;

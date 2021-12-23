// React
import React from 'react';

// Material UI
import Paper from '@material-ui/core/Paper';

// Articles
import TitlePage from '../Components/titlepage';
import Sol from '../Articles/sol.js';
import Calebs from '../Articles/calebs.js';
import DotaUI from '../Articles/DotaUI.js';
import Hyper from '../Articles/Hyperstone.js';
import BottomBar from '../Components/bottomBar';

// Styling
import '../../css/homepage.css';
import { makeStyles, createStyles } from '@material-ui/core/styles';

////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#edece6',
    },
    divider: {
      display: 'inline-block',
      height: '2px',
      width: '100%',
    },
    greySide: {
      width: '92%',
      display: 'inline-block',
      height: '2px',
      backgroundColor: 'gray',
    },
    tealSide: {
      width: '8%',
      display: 'inline-block',
      height: '2px',
      backgroundColor: '#008080',
    }
  }),
);

////////////////////////////////////////////
// App
function HomePage() {
  const classes = useStyles();
  ///////////// 
  // HTML
  return (
    <div className={classes.root}>
      <TitlePage />
      <Sol />
      <div className={classes.divider}>
        <div className={classes.tealSide} />
        <div className={classes.greySide} />
      </div>
      <Calebs />
      <div className={classes.divider}>
        <div className={classes.tealSide} />
        <div className={classes.greySide} />
      </div>
      <DotaUI />
      <div className={classes.divider}>
        <div className={classes.tealSide} />
        <div className={classes.greySide} />
      </div>
      <Hyper />
      <BottomBar />
    </div>
  );
}

export default HomePage;

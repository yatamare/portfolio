// React
import React from 'react';

// Articles
import TitlePage from '../Components/titlepage';
import Uptown from '../Articles/uptown';
import FourM from '../Articles/fourma';
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
      <Uptown />
      <div className={classes.divider}>
        <div className={classes.tealSide} />
        <div className={classes.greySide} />
      </div>
      <FourM />
      <BottomBar />
    </div>
  );
}

export default HomePage;

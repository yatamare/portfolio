// React
import React from 'react';

// Articles
import TitlePage from '../Components/titlepage';
import AboutUs from '../Articles/aboutme';
import Experience from '../Articles/experience';
import Cards from '../Articles/card';
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
      <AboutUs />
      <Experience />
      <Cards />
      <BottomBar />
    </div>
  );
}

export default HomePage;

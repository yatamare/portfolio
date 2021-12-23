// React
import React from 'react';

// Styling
import { makeStyles, createStyles } from '@material-ui/core/styles';

////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme) =>
  createStyles({
    bottomBar: {
      width: '100%',
      height: '60px',
      backgroundColor: '#5e3f3f',
    }
  }),
);

////////////////////////////////////////////
// App
function BottomBar() {
  const classes = useStyles();

  ///////////// 
  // HTML
  return (
    <div className={classes.bottomBar}>
    </div>
  );
}

export default BottomBar;

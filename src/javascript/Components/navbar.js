// React
import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Material UI Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// Styling
import '../../css/navbar.css';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

////////////////////////////////////////////
// Styling, fixed button color problem
const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      label: {
        color: "#ffffff",
      },
    },
  },
})

////////////////////////////////////////////
// App
function Navbar() {

  /////////////
  // Listeners
  React.useEffect(() => {
    window.addEventListener('scroll', (event) => {
      if (window.scrollY > 200) {
        document.querySelector('.navbar').className = 'navbar scroll';
      } else {
        document.querySelector('.navbar').className = 'navbar';
      }
    });
  });

  ///////////// 
  // HTML
  return (
    <AppBar color="transparent" className='root'>
      <div className='navbar'>
        <NavLink to='/'>
          <span className='title'>
            Hunter McGregor
          </span>
        </NavLink>
        <div className='navTray'>
          <ThemeProvider theme={theme}>
            <div className='navGroup'>
              <NavLink to='/games'>
                <Button size="large" disableElevation>
                  Games
                </Button>
              </NavLink>
              <NavLink to='/dev'>
                <Button size="large" disableElevation>
                  Development
                </Button>
              </NavLink>
              <NavLink to='/management'>
                <Button size="large" disableElevation>
                  Management
                </Button>
              </NavLink>
            </div>
            <div className='navGroup'>
              <a href='https://www.linkedin.com/in/hunter-mcgregor/' target="_blank" style={{ textDecoration: 'none' }}>
                <Button Button size="large" disableElevation>
                  <LinkedInIcon fontSize='medium' />
                </Button>
              </a>
              <a href='https://github.com/yatamare?tab=repositories' target="_blank" style={{ textDecoration: 'none' }}>
                <Button Button size="large" disableElevation>
                  <GitHubIcon fontSize='small' />
                </Button>
              </a>
            </div>
          </ThemeProvider>
        </div>
      </div>
    </AppBar>
  );
}

export default Navbar;

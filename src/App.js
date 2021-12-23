// React
import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

// Elements
import NavBar from './javascript/Components/navbar';

// Pages
import HomePage from './javascript/Pages/homepage';
import Games from './javascript/Pages/games';
import Dev from './javascript/Pages/development';
import Man from './javascript/Pages/management';

// Styling
import './css/App.css';
import { makeStyles, createStyles, createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme) =>
	createStyles({

	}),
);

////////////////////////////////////////////
// App
function App() {
	const classes = useStyles();

	/////////////
	// HTML
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/games">
						<Games />
					</Route>
					<Route exact path="/dev">
						<Dev />
					</Route>
					<Route exact path="/management">
						<Man />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

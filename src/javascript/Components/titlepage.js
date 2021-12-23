// React
import React from 'react';

// Image
import Openning from '../../media/openning.jpg';

// Styling
import '../../css/titlepage.css';
import { makeStyles, createStyles } from '@material-ui/core/styles';

////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme) =>
	createStyles({
		image: {
			height: '90vh',
			overflow: 'hidden',
			margin: '0',
			padding: '0',
			maxHieght: '1000px',
			backgroundSize: 'cover',
			backgroundPosition: 'center center',
		},
	}),
);

////////////////////////////////////////////
// App
function TitlePage() {
	const classes = useStyles();
	///////////// 
	// HTML
	return (
		<div className={classes.image} style={{ backgroundImage: `url('./images/openning.jpg')` }}>
			<div className='textpackage'>
				<span className='name'>
					Hunter McGregor
				</span>
				<br />
				<span className='titles'>
					Developer & Design
				</span>
			</div>
		</div>
	);
}

export default TitlePage;

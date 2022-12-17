import React, { Component } from 'react';
//import Landscape from '../img/Landscape.jpg';
import Posts from "../About/Posts";
import Posters from "../About/Posters"
import Testimonial from './Testimonial';

class About extends Component {
render() {
	const myStyle={
// backgroundImage: `url(${Landscape})` ,
		height:'100vh',
		marginTop:'0px',
		fontSize:'50px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
        backgroundColor:'purple',
	};
	return (
		<>
	<div style={myStyle}>
	</div>
	<h2 style={{textAlign:"center",fontSize:"45px",color:"blue"}}  >About us</h2>
	<Posts />
	<h2 style={{textAlign:"center",fontSize:"45px",color:"blue"}}  >Our Team</h2>
	<Posters/>
	<Testimonial/>
	</>
	);
}
}

export default About;

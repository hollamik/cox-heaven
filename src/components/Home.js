import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import appartments from '../img/appartments.jpg';
import neat from '../img/neat.jpg';
import multi from '../img/multi.jpg';
import housex from '../img/housex.jpg';
import Posts from './About/Posts';
import Posters from './About/Posters';

const Home = () => {
	return (
        <div className="sec__one">
<div style={{ display: 'block', width: '100%',margin:'-60px 0px 10px 0px',height:"20%" }}>
	<Carousel>
		<Carousel.Item interval={2000}>
<img className="d-block w-100" src={appartments} alt="One" style={{height:"20%" }}/>
	<Carousel.Caption>
			<h3>Label for First slide</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption>
		</Carousel.Item>


	<Carousel.Item interval={2000}>
<img className="d-block w-100" src={neat} alt=" Two" style={{height:"20%" }}/>
		<Carousel.Caption>
			<h3>Label for second slide</h3>
			<p>Sample Text for Image Two</p>
		</Carousel.Caption>
		</Carousel.Item>


		<Carousel.Item interval={2000}>
<img className="d-block w-100" src={multi} alt="Two" style={{height:"20%" }}/>
		<Carousel.Caption>
			<h3>Label for third slide</h3>
			<p>Sample Text for Image three</p>
		</Carousel.Caption>
		</Carousel.Item>

		<Carousel.Item interval={2000}>
<img className="d-block w-100" src={housex} alt="four" style={{height:"20%" }}/>
		<Carousel.Caption>
			<h3>Label for third slide</h3>
			<p>Sample Text for Image four</p>
		</Carousel.Caption>
		</Carousel.Item>

	</Carousel><br/><br/>
	<h2 style={{margin:"0px 0px 0px 450px",fontFamily:"fantasy"}}>About Us<hr style={{width:"20%",color:"blue"}} /></h2>
	<Posts/><br/><br/>
	<h2 style={{margin:"0px 0px 0px 450px",fontFamily:"fantasy"}}>Our Team<hr style={{width:"20%",color:"blue"}}/></h2>
	<Posters/>
	</div>
	</div>
       )
}
export default Home;

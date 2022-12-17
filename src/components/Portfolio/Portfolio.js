import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import africanman from '../../img/africanman.jpg';
import smiling from '../../img/smiling.jpg';
import womans from '../../img/womans.jpg';
import woman from '../../img/woman.jpg';
import africanmanx from '../../img/africanmanx.jpg';

const Testimonial = () => {
	return (
        <div className ="sec__one" style={{background:"rgb(5, 51, 52)"}}>
<div style={{ display: 'block', width: '30%',margin:'-60px 0px 10px 350px',height:"20%",padding:"20px 0px 20px 0px" }}>
	<Carousel>
		<Carousel.Item interval={2000}>
<img className="d-block w-100" src={africanman} alt="Image One" style={{height:"10%",width:"10%" }}/>
	<Carousel.Caption>
		</Carousel.Caption>
		<h3>Label for First slide</h3>
			<p>Sample Text for Image One</p><br/>
		</Carousel.Item>


	<Carousel.Item interval={2000}>
<img className="d-block w-100" src={smiling} alt="Image Two" style={{height:"10%",with:"10%" }}/>
		<Carousel.Caption>
		</Carousel.Caption>
		<h3>Label for second slide</h3>
			<p>Sample Text for Image Two</p><br/>
		</Carousel.Item>


		<Carousel.Item interval={2000}>
<img className="d-block w-100" src={womans} alt="Image Two" style={{height:"10%",width:"10%"}}/>
		<Carousel.Caption>	
		</Carousel.Caption>
		<h3>Label for third slide</h3>
		<p>Sample Text for Image three</p><br/>
		</Carousel.Item>

		<Carousel.Item interval={2000}>
<img className="d-block w-100" src={woman} alt="Image Two" style={{height:"10%",width:"10%"}}/>
		<Carousel.Caption>	
		</Carousel.Caption>
		<h3>Label for third slide</h3>
		<p>Sample Text for Image three</p><br/>
		</Carousel.Item>

<Carousel.Item interval={2000}>
<img className="d-block w-100" src={africanmanx} alt="Image Two" style={{height:"10%",width:"10%"}}/>
		<h3>Label for third slide</h3>
		<p>Sample Text for Image three</p><br/>
		</Carousel.Item>
	</Carousel><br/><br/>
	
	</div>
	</div>
       )
}
export default Testimonial;
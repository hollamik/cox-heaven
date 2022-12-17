import React from "react";
const Poster = ({ post: { name, role,
imgUrl}, index }) => {
return (
	<div className="poster-container" style={{margin:"10px 0px 0px 0px",padding:"0px 0px 0px 200px",width:"20px"}}>
	<img className="image" src={imgUrl} alt="post" style={{borderRadius:"50px",width:"30%"}}/>
    <h4 className="heading"style={{fontSize:"12px"}}><em>{name}</em></h4>
	<p style={{margin:"-50px 0px 0px 0px"}} >{role}</p>
	<div className="info">	
		{/*<h4>Written by: {author}</h4>*/}
	</div>
	</div>
);
};

export default Poster;

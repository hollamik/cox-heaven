import React from "react";
const Post = ({ post: { title, body,
imgUrl, author }, index }) => {
return (
	<div className="post-container">
	<h1 className="heading" style={{fontSize:"20px"}}>{title}<hr/></h1>
	{/*<img className="image" src={imgUrl} alt="post" />*/}
	<p style={{margin:"-40px 0px 0px 0px"}}>{body}</p>
	<div className="info" >	
		{/*<h4>Written by: {author}</h4>*/}
	</div>
	</div>
);
};

export default Post;

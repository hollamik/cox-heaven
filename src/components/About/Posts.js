import React from "react";
import Post from "../About/Post";

const Posts = () => {
const blogPosts = [
     
	{
	title: "Our Vision",
	body: `JavaScript is the world most popular
	lightweight, interpreted compiled programming
	language. It is also known as scripting
	language for web pages. It is well-known for
	the development of web pages, many non-browser
	environments also use it. JavaScript can be
	used for Client-side developments as well as
	Server-side developments`,
	//author: "Nishant Singh ",
	
	},
	{
	title: "Our Mission",
	body: `There are many real-life examples of
	a stack. Consider an example of plates stacked
	over one another in the canteen. The plate
	which is at the top is the first one to be
	removed, i.e. the plate which has been placed
	at the bottommost position remains in the
	stack for the longest period of time. So, it
	can be simply seen to follow LIFO(Last In
	First Out)/FILO(First In Last Out) order.`,
	//author: "Suresh Kr",
	
	},
	{
	title: "Our Services",
	body: `The word Algorithm means “a process
	or set of rules to be followed in calculations
	or other problem-solving operations”. Therefore
	Algorithm refers to a set of rules/instructions
	that step-by-step define how a work is to be
	executed upon in order to get the expected
	results. `,
	//author: "Monu Kr",

	},
	
];

return (
	<div className="posts-container">
	{blogPosts.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))}
	</div>
);
};

export default Posts;

import React from "react";
import Poster from "../About/Poster";

const Posters = () => {
const imagePosters = [
       
	{
	imgUrl:"https://scontent.fabb1-2.fna.fbcdn.net/v/t31.18172-8/15403736_1382567421761463_5246427322987355366_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFYm-RW8wBHE6CkNOH0uFY7O5uAKfUBEDE7m4Ap9QEQMUcVDrVYb_E9Euorv4JQGzenMNhwKsC35ZziKKl-Nka2&_nc_ohc=m8SwoWlY_HkAX9Avm5O&_nc_ht=scontent.fabb1-2.fna&oh=00_AfAFb110W3c-v1t9hsZT9ckebjvCWmSy7SCQg7M_a9NLMg&oe=6380ACA4",
	name: "Barrister Mrs Olunike.Awoseemo",
	role: `Founder/Ceo`,
    facebook:"",
	},
	{
        imgUrl:"https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/50189729_618873058549695_4264123808702529536_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFiTj4BRQDkFPwBE4CRYG0HrLEwGls49PassTAaWzj09t3s9KCB_g5mMte-F-dmBQKhjmbeXDYBNEEt3ohYbVrF&_nc_ohc=6nwf52rTYN0AX99_g-Q&_nc_ht=scontent.fabb1-1.fna&oh=00_AfAiO-M6aHKIyIl2zPb-C_Yntv_zYl6fHszIiLOztOT5eA&oe=637DD605",
        name: "T.J",
        role: `Director of Operation`,
        facebook:"",

	},
	{     
	imgUrl:"https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/65711034_3058336964183993_3538413694482382848_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHJrFxpQakEFia9dCx1WEItAqMqT2tZruQCoypPa1mu5IVn6iu3rvdAzPoMk5lCm0in3VJ2Xt2VECC6PBqnDKgJ&_nc_ohc=HB3-XgZPed8AX92_npS&_nc_ht=scontent.fabb1-1.fna&oh=00_AfDzIzGCcY8uG_XZ9os4gBq_VfucEYRUQsgELnQlovUvpA&oe=637E2AA8",
	name: "Jude Okeke",
	role: `Marketing Manager`,
    facebook:"",
	},	
	{     
		imgUrl:"/img/Logo.jpg",
		name: "Jude Okeke",
		role: `Marketing Manager`,
		facebook:"",
		},
];
return (
    <div className="posters-container">
	{imagePosters.map((post, index) => (
		<Poster key={index} index={index} post={post} />
	))}
	</div>
);
};

export default Posters;

import React, { useState } from "react";
import { AiFillMail,AiFillPhone } from "react-icons/ai";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>      
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  };
  return (
    <>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
     // method="POST"
      //target="_blank"
  >
     
      <div className="contact-container" >
        <h2 style={{color:"white"}}>CONTACT <span className="purple">ME</span></h2>
         <AiFillMail style={{color:"white"}}/>Email:awoseemonike@gmail.com<br/>
         <AiFillPhone style={{color:"white"}}/>+2348064139378<br/><br/>

      <div className="contact"><h3>Name</h3>
        <input
          type="text"
          placeholder="Your fullname"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <br/>
      <div className="contact"><h3>Email</h3>
        <input
          type="email"
          placeholder="your Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <br/>
      <div className="contact-message"><h3>Message</h3>
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <br/>
      <div className="contact-btn">
        <button
          className="btn"
          type="submit"
        >
          Send a message
        </button>
      </div>
      </div>
    </form>
    </>
  );
};
export default Contact;
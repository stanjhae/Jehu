import React from 'react';
import './Contact.css';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';

const Contact = () => (
  <div className="contact">
    <Helmet>
      <title>Start Ups</title>
      <meta name="description" content="Contact" />
    </Helmet>
    <div className="ui doubling stackable two column center aligned grid">
      <div className="row centeredd">
        <div className="column contactHeader">
          <Fade top duration={2000} className="column">
            <h1>Contact</h1>
            <h1>Us</h1>
          </Fade>
        </div>
        <div className="column">
          <form
            className="contactFormDiv"
            method="POST"
            action="https://formspree.io/ceejayorji@yahoo.com"
          >
            <input
              className="emailInput"
              type="name"
              name="name"
              placeholder="Name"
            />
            <input
              className="emailInput"
              type="email"
              name="email"
              placeholder="Email"
            />
            <textarea
              rows="4"
              className="messageInput"
              name="message"
              placeholder="Message"
            />
            <button className="submitButton" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>

    {/* <div className="contactTextDiv"> */}
    {/* <h1>Email: info@jehu.com</h1> */}
    {/* </div> */}
  </div>
);

export default Contact;

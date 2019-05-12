import React from 'react';
import './Contact.css';
import { Helmet } from 'react-helmet';

const Contact = () => (
  <div className="contact">
    <Helmet>
      <title>Start Ups</title>
      <meta name="description" content="Start Ups" />
    </Helmet>
    <div className="contactTextDiv">
      <h1>Email: info@jehu.com</h1>
    </div>

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
);

export default Contact;

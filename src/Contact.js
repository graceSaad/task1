

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Contact.css';

const Contact = () => {


    return (
        <div className="contact-us-container">
            <h1>Contact Us</h1>
            <p className='o'> Please feel free to reach out to us with any questions or inquiries!</p>
            <form >
       <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Name</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Email</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
        className='bh'
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom" className='bh'>Message</label>
      </Form.Floating>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;

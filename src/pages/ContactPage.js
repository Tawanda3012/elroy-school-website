import React, { useState } from "react";
import "./contact.css";



const ContactPage = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    address: "",
    message: "",
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-us" >
      <div className="background-image"></div>
      <div className="contact">
      <div className="fform container">
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="names">
            <div className="names__fname">
              <input
                type="text"
                placeholder="First-Name"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
              />
            </div>
            <div className="names__lname">
              <input
                type="text"
                placeholder="Last-Name"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="Address">
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="Message">
            <textarea
              placeholder="Enter your message here"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ height: "300px" }}
            />
          </div>
          <div className="submit_h">
            <button type="submit" className="btn btn-primary submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};


export default ContactPage;

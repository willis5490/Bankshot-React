import React, { Component } from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm.js'




class Contact extends Component {




  // render nav
  render() {
    return (
      <div>
        <ContactForm contactHeader={'Contact'} contactText={'Show us some love! Contact us and we will get back to you ASAP!'}></ContactForm>
      </div>
    );
  }
}


export default Contact;
